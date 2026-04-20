# Qingluan Academy

A premium marketing website for **青鸾书院 / Qingluan Academy**, built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Routes

- `/`
- `/about`
- `/services`
- `/services/bazi`
- `/services/qimen-dunjia`
- `/services/feng-shui`
- `/faq`
- `/contact`
- `/book`

## Development

```bash
npm install
npm run dev
```

## Contact Form Setup

Copy `.env.example` to `.env.local` and fill in your SMTP credentials:

```bash
BREVO_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

The contact form posts to `/api/contact` and sends inquiry emails through Brevo's transactional email API.
`CONTACT_FROM_EMAIL` must be a sender email verified in Brevo.

## Public Site Configuration

The marketing pages can be configured without code changes via public environment variables:

```bash
NEXT_PUBLIC_CONTACT_EMAIL=hello@qingluan.academy
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_BOOKING_EMBED_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_XIAOHONGSHU_URL=
NEXT_PUBLIC_WECHAT_URL=
```

- If `NEXT_PUBLIC_BOOKING_URL` is set, `/book` switches to a live booking flow.
- If `NEXT_PUBLIC_BOOKING_EMBED_URL` is set, `/book` also renders an embedded calendar iframe.
- Social links appear on `/contact` when their corresponding variables are provided.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Notes

- Booking is now env-driven: placeholder by default, live flow when booking URL is provided.
- Contact form is now a real server-backed submission flow and requires Brevo API configuration.
- The project is structured for future booking integration, bilingual support, and content expansion.
