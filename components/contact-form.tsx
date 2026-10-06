"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { Check } from "lucide-react";
import { sendInquiry, type ContactField, type ContactState } from "@/app/actions/contact";
import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type T = Dictionary["contact"]["form"];

const input =
  "w-full rounded-sharp border border-line bg-surface px-3 text-[15px] text-ink placeholder:text-[#8a8a8a] transition-colors hover:border-line-strong focus-visible:border-ink aria-[invalid=true]:border-[#b42318]";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-[13px] text-[#b42318]">
      {message}
    </p>
  );
}

export function ContactForm({ locale, t }: { locale: Locale; t: T }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendInquiry, { status: "idle" });
  // Controlled: React's post-action form reset does not restore a <select> defaultValue.
  const [budget, setBudget] = useState("");

  if (state.status === "success") {
    return (
      <div role="status" className="flex items-start gap-3 rounded-sharp border border-ink bg-surface p-5 text-[15px]">
        <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
        {t.success}
      </div>
    );
  }

  const values = state.status === "idle" ? undefined : state.values;
  const errors: ContactField[] = state.status === "invalid" ? state.errors : [];
  const error = (field: ContactField) => (errors.includes(field) ? t.errors[field] : undefined);
  const invalid = (field: ContactField) => (errors.includes(field) ? true : undefined);

  const mailto = values
    ? `mailto:${site.email}?subject=${encodeURIComponent(`${t.mailSubject}: ${values.name}`)}&body=${encodeURIComponent(
        `${values.scope}\n\n${t.budget}: ${values.budget}\n${values.name} <${values.email}>`,
      )}`
    : `mailto:${site.email}`;

  return (
    <form action={action} noValidate className="grid gap-5">
      <input type="hidden" name="locale" value={locale} />
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            {t.name}
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            defaultValue={values?.name}
            aria-invalid={invalid("name")}
            aria-describedby={error("name") ? "contact-name-error" : undefined}
            className={`${input} h-11`}
          />
          <FieldError id="contact-name-error" message={error("name")} />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
            {t.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values?.email}
            aria-invalid={invalid("email")}
            aria-describedby={error("email") ? "contact-email-error" : undefined}
            className={`${input} h-11`}
          />
          <FieldError id="contact-email-error" message={error("email")} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-scope" className="mb-1.5 block text-sm font-medium">
          {t.scope}
        </label>
        <textarea
          id="contact-scope"
          name="scope"
          rows={5}
          placeholder={t.scopePlaceholder}
          defaultValue={values?.scope}
          aria-invalid={invalid("scope")}
          aria-describedby={error("scope") ? "contact-scope-error" : undefined}
          className={`${input} resize-y py-2.5 leading-relaxed`}
          data-lenis-prevent
        />
        <FieldError id="contact-scope-error" message={error("scope")} />
      </div>

      <div>
        <label htmlFor="contact-budget" className="mb-1.5 block text-sm font-medium">
          {t.budget}
        </label>
        <select
          id="contact-budget"
          name="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          aria-invalid={invalid("budget")}
          aria-describedby={error("budget") ? "contact-budget-error" : undefined}
          className={`${input} h-11 appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3Cpath%20d='M4%206l4%204%204-4'%20fill='none'%20stroke='%23111'%20stroke-width='1.5'/%3E%3C/svg%3E")] bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>
            {t.budgetPlaceholder}
          </option>
          {t.budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
        <FieldError id="contact-budget-error" message={error("budget")} />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            defaultChecked={values?.consent}
            aria-invalid={invalid("consent")}
            aria-describedby={error("consent") ? "contact-consent-error" : undefined}
            className="mt-0.5 size-4 shrink-0 rounded-[1px] accent-accent"
          />
          <label htmlFor="contact-consent" className="text-[13px] leading-relaxed text-muted">
            {t.consentBefore}
            <Link href={`/${locale}/privacy`} target="_blank" className="text-ink underline underline-offset-2 hover:text-accent">
              {t.consentLink}
            </Link>
            {t.consentAfter}
          </label>
        </div>
        <FieldError id="contact-consent-error" message={error("consent")} />
      </div>

      <div aria-live="polite">
        {(state.status === "failed" || state.status === "unconfigured") && (
          <p className="rounded-sharp border border-line bg-canvas p-4 text-sm">
            {state.status === "failed" ? t.errors.server : t.errors.unconfigured}{" "}
            <a href={mailto} className="font-medium text-accent underline underline-offset-2">
              {site.email}
            </a>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex h-11 items-center justify-center gap-2 rounded-sharp border border-accent bg-accent px-5 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-out-expo hover:bg-accent-hover active:translate-y-px disabled:cursor-progress disabled:opacity-70 sm:justify-self-start"
      >
        {pending ? t.sending : t.submit}
      </button>
    </form>
  );
}
