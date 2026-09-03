import type { APIRoute } from 'astro';

const pages = [
  '/',
  '/about/',
  '/contact/',
  '/faq/',
  '/privacy/',
  '/process/',
  '/services/',
  '/therapist-websites/',
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
