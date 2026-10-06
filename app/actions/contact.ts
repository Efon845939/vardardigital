"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type ContactField = "name" | "email" | "scope" | "budget" | "consent";

export type ContactValues = { name: string; email: string; scope: string; budget: string; consent: boolean };

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "invalid"; errors: ContactField[]; values: ContactValues }
  | { status: "failed" | "unconfigured"; values: ContactValues };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendInquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const text = (key: string, max: number) => String(formData.get(key) ?? "").trim().slice(0, max);

  // Honeypot: real visitors never see or fill this field.
  if (text("company_website", 200)) return { status: "success" };

  const values: ContactValues = {
    name: text("name", 120),
    email: text("email", 200),
    scope: text("scope", 5000),
    budget: text("budget", 60),
    consent: formData.get("consent") === "on",
  };

  const errors: ContactField[] = [];
  if (values.name.length < 2) errors.push("name");
  if (!emailPattern.test(values.email)) errors.push("email");
  if (values.scope.length < 20) errors.push("scope");
  if (!values.budget) errors.push("budget");
  if (!values.consent) errors.push("consent");
  if (errors.length) return { status: "invalid", errors, values };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: "unconfigured", values };

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "Vardar Digital <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL || site.email,
    replyTo: values.email,
    subject: `Project inquiry: ${values.name} (${values.budget})`,
    text: [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Budget: ${values.budget}`,
      `Locale: ${text("locale", 5)}`,
      "",
      values.scope,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error", error);
    return { status: "failed", values };
  }
  return { status: "success" };
}
