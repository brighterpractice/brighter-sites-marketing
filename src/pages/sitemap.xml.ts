import type { APIRoute } from 'astro';

const pages = [
  '/',
  '/about/',
  '/contact/',
  '/faq/',
  '/guides/',
  '/guides/how-google-finds-websites/',
  '/guides/seo-for-small-business/',
  '/guides/google-search-console/',
  '/guides/google-business-profile/',
  '/guides/website-architecture/',
  '/guides/wix-vs-custom-website/',
  '/guides/domain-dns-online-presence/',
  '/guides/website-analytics/',
  '/privacy/',
  '/process/',
  '/services/',
  '/therapist-websites/',
  '/coaching-websites/',
  '/wellness-practitioner-websites/',
  '/terms/',
  '/website-strategy/',
  '/work/',
];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response('Site URL is not configured.', { status: 500 });
  }

  const urls = pages
    .map((path) => {
      const loc = new URL(path, site).toString();
      return `  <url><loc>${loc}</loc></url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
