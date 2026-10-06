# Vardar Digital

Studio website. Next.js 16 (App Router), Tailwind CSS 4, GSAP + Lenis, TR/EN.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/en` or `/tr`).

## Content

| What | Where |
|---|---|
| All copy (EN / TR) | `lib/dictionaries/en.ts`, `lib/dictionaries/tr.ts` |
| Projects | `lib/projects.ts` (`showLiveLinks` hides the live links) |
| Screenshots | `public/work/*.jpg` |
| Email, company details for the imprint | `lib/site.ts` |

## Environment

Copy `.env.example` to `.env.local` and set it on your host:

- `RESEND_API_KEY`: create a free account at resend.com **with vardardigital@gmail.com** (the test sender `onboarding@resend.dev` only delivers to the account's own address), then create an API key. Without it the form shows a direct email link instead.
- `CONTACT_TO_EMAIL`: inbox for inquiries (default `vardardigital@gmail.com`).
- `CONTACT_FROM_EMAIL`: optional, once a domain is verified in Resend.
- `NEXT_PUBLIC_SITE_URL`: the production URL, e.g. `https://vardardigital.example`.

## Deploy

Any host that runs Next.js 16 (Node runtime): connect the GitHub repo, build command `npm run build`, add the env vars above.

The privacy / KVKK text in the dictionaries is a draft and should be reviewed before launch.

### Netlify

The repo includes a `netlify.toml`. Connect the GitHub repo in Netlify; it builds with `npm run build` and serves the app through Netlify's Next.js runtime (SSR, the locale proxy and the contact Server Action all work). Do not drag-and-drop the source folder, and do not switch to `output: "export"`: a static export cannot run the `/` → `/en`/`/tr` redirect or the contact form.
