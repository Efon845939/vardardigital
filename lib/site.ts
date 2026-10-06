export const site = {
  name: "Vardar Digital",
  email: "vardardigital@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Company details for the imprint and the KVKK notice. Empty fields are not rendered.
  legal: {
    title: "",
    address: "",
    taxOffice: "",
    taxNumber: "",
    mersis: "",
  },
} as const;
