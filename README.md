# Mohammad Asef Qayumi — Portfolio

Personal site built with Next.js (App Router), TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Content

All copy — profile, experience, projects and skills — lives in [`src/data/profile.ts`](src/data/profile.ts).
To add a project, append an entry to `projects`; set `status: "in-progress"` while it's being built and add
`repo` / `live` links once they're public.

## Contact form

`POST /api/contact` sends messages through [Resend](https://resend.com). Set these in `.env.local` (and in Vercel):

| Variable     | Purpose                              |
| ------------ | ------------------------------------ |
| `RESEND_API` | Resend API key                       |
| `EMAIL_REC`  | Address that receives the messages   |

Input is validated and HTML-escaped server-side before it's rendered into the email.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Production build         |
| `npm run lint`  | Lint with ESLint         |
