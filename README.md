This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
# Site URL for SEO and metadata
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### For Gmail:
1. Enable 2-Step Verification on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use your Gmail address as `EMAIL_USER`
4. Use the generated App Password as `EMAIL_PASSWORD`

**Note:** Never commit your `.env.local` file to version control.

## SEO Features

This portfolio includes comprehensive SEO optimization:

- ✅ **Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- ✅ **Structured Data**: JSON-LD schema for Person, Website, and ProfessionalService
- ✅ **Sitemap**: Automatically generated at `/sitemap.xml`
- ✅ **Robots.txt**: Configured at `/robots.txt`
- ✅ **Semantic HTML**: Proper heading hierarchy and semantic elements
- ✅ **Image Optimization**: Alt texts and priority loading for key images
- ✅ **Canonical URLs**: Proper URL canonicalization

### SEO Checklist:
- [ ] Update `NEXT_PUBLIC_SITE_URL` in `.env.local` with your actual domain
- [ ] Verify structured data at: https://search.google.com/test/rich-results
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph tags at: https://www.opengraph.xyz/
- [ ] Verify Twitter Card at: https://cards-dev.twitter.com/validator

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

When deploying, make sure to add the `EMAIL_USER` and `EMAIL_PASSWORD` environment variables in your Vercel project settings.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
