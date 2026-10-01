export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: 'Search & Google' | 'Website Foundations' | 'Analytics & Improvement';
  summary: string;
};

export const guides: Guide[] = [
  {
    slug: 'how-google-finds-websites',
    title: 'How Google Finds, Understands, and Ranks a Website',
    description:
      'A plain-English look at crawling, indexing, ranking, and the factors that affect whether a small-business website can appear in search.',
    category: 'Search & Google',
    summary:
      'Understand the difference between crawling, indexing, and ranking—and why a website can be online without being easy for Google to understand.',
  },
  {
    slug: 'seo-for-small-business',
    title: 'SEO for Small Business: What It Actually Does',
    description:
      'Understand what search engine optimization can influence, what it cannot guarantee, and why SEO is more than adding keywords to a page.',
    category: 'Search & Google',
    summary:
      'A practical explanation of technical SEO, page relevance, local signals, content, authority, and the limits of ranking promises.',
  },
  {
    slug: 'google-search-console',
    title: 'Google Search Console: What the Data Tells You',
    description:
      'Learn what Search Console can reveal about impressions, clicks, search queries, indexing, and the visibility of a business website.',
    category: 'Search & Google',
    summary:
      'See what Search Console measures, why impressions and clicks matter, and how the data can reveal search opportunities or technical problems.',
  },
  {
    slug: 'google-business-profile',
    title: 'Why Google Business Profile Matters for Local Businesses',
    description:
      'Understand how a Google Business Profile supports a local digital presence and why it should reinforce the information on your website.',
    category: 'Search & Google',
    summary:
      'Learn why your business profile, website, services, reviews, and business information should tell a consistent local story.',
  },
  {
    slug: 'website-architecture',
    title: 'Why Website Architecture Matters',
    description:
      'Understand how page hierarchy, navigation, internal links, and content organization affect visitors, search engines, and future website growth.',
    category: 'Website Foundations',
    summary:
      'A website is more than a collection of pages. Its structure affects how people navigate it and how search engines understand the business.',
  },
  {
    slug: 'wix-vs-custom-website',
    title: 'Wix vs. a Custom Website: The Real Tradeoffs',
    description:
      'Compare the convenience of a website builder with the control and flexibility of a custom-built site without pretending either approach is right for everyone.',
    category: 'Website Foundations',
    summary:
      'Look beyond the monthly price and compare control, flexibility, maintenance, portability, performance, and the time required to manage the site.',
  },
  {
    slug: 'domain-dns-online-presence',
    title: 'Your Domain and DNS: The Foundation of Your Online Presence',
    description:
      'Understand why domain ownership, DNS, website routing, email, and HTTPS are business infrastructure—not just technical details.',
    category: 'Website Foundations',
    summary:
      'Your domain connects customers to your website and often your email. Learn why ownership and correct DNS management matter to business continuity.',
  },
  {
    slug: 'website-analytics',
    title: 'Website Analytics: Traffic Is Only the Beginning',
    description:
      'Understand what useful website analytics can reveal about traffic sources, landing pages, visitor actions, and whether a site is supporting business goals.',
    category: 'Analytics & Improvement',
    summary:
      'Visitor counts are not the whole story. The useful questions are how people arrived, what they needed, and whether the site helped them take the next step.',
  },
];

export const guideHref = (slug: string) => `/guides/${slug}/`;
