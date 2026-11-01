export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  minutesRead: number;
  coverImage: string;
  content: string[];
  internalLinks: string[];
  externalLinks: string[];
};

const categories = ['SEO', 'Marketing', 'Creator', 'Growth', 'Branding', 'Productivity'];
const tagPool = ['seo', 'creator', 'marketing', 'growth', 'branding', 'analytics', 'automation', 'conversion'];

const internalLinks = [
  '/blog',
  '/archive',
  '/contact',
  '/access',
  '/dashboard',
  '/admin',
  '/tag/seo',
  '/tag/marketing'
];

const externalLinks = [
  'https://www.google.com',
  'https://www.searchenginejournal.com',
  'https://www.hubspot.com',
  'https://neilpatel.com',
  'https://moz.com',
  'https://www.canva.com',
  'https://www.youtube.com',
  'https://www.linkedin.com',
  'https://www.instagram.com',
  'https://www.shopify.com'
];

const paragraphTemplates = [
  'Pada dasarnya, {keyword} bukan hanya tentang traffic, tetapi tentang membuat audiens paham mengapa mereka harus tertarik dan mengambil tindakan.',
  'Dalam strategi creator dan bisnis modern, setiap halaman publik harus bekerja seperti funnel kecil: perhatian, pemahaman, kepercayaan, dan conversion.',
  'Dengan struktur konten yang jelas dan CTA yang tepat, Anda bisa memaksimalkan dampak dari setiap click, view, dan interaksi yang terjadi di halaman Anda.',
  'Konten yang bagus tidak hanya menginformasikan, tetapi juga mengangkat rasa relevansi dan membangun trust di benak audiens yang sedang mencari solusi.',
  'Pada level berikutnya, internal linking, tag, dan struktur blog secara keseluruhan membantu mesin pencari dan pembaca menemukan konten yang paling relevan.',
  'Silakan melihat bagaimana kombinasi antara storytelling, data, dan call-to-action bisa memperkuat nilai tawaran Anda di setiap tahap perjalanan pelanggan.',
  'Strategi yang kuat hadir ketika Anda menggabungkan posisi brand, kebutuhan pelanggan, dan alur tindakan yang logis di setiap interaksi.',
  'Dengan ekosistem yang konsisten, Anda tidak hanya menambah trafik, tetapi juga membangun loyalitas jangka panjang dari audiens yang relevan.'
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

function makeTitle(index: number) {
  const base = [
    'Strategi Link-in-Bio',
    'Cara Meningkatkan Lead',
    'SEO untuk Creator',
    'Traffic dan Conversion',
    'Brand Strategy',
    'Marketing Creator Modern',
    'Growth Funnel',
    'Content Planning',
    'Analytics dan CTR',
    'Membangun Trust di Digital'
  ];
  return `${base[index % base.length]} untuk Brand dan Creator Modern`;
}

export function buildBlogPost(index: number): BlogPost {
  const category = categories[index % categories.length];
  const keyword = tagPool[index % tagPool.length];
  const title = makeTitle(index);
  const slug = slugify(title);
  const tags = [keyword, tagPool[(index + 1) % tagPool.length], tagPool[(index + 2) % tagPool.length]];

  const content = paragraphTemplates.map((template, paragraphIndex) =>
    template.replace('{keyword}', keyword).replace('{index}', String(paragraphIndex + 1))
  );

  return {
    slug: `${index}-${slug}`,
    title,
    excerpt: `Panduan komprehensif tentang ${keyword} untuk creator, brand, dan bisnis yang ingin tumbuh dengan strategi lebih kuat melalui bio link, content, dan funnel conversion.`,
    category,
    tags,
    author: 'MikroBiolink Editorial',
    publishedAt: `2026-0${(index % 9) + 1}-0${(index % 27) + 1}`.replace(/-0(\d)\b/g, '-$1'),
    minutesRead: 6 + (index % 8),
    coverImage: `https://images.unsplash.com/photo-${1516321318423 + index}?auto=format&fit=crop&w=1200&q=80`,
    content,
    internalLinks: internalLinks.slice(0, 7),
    externalLinks: externalLinks.slice(0, 10)
  };
}

export function getBlogPosts(limit = 300): BlogPost[] {
  return Array.from({ length: limit }, (_, index) => buildBlogPost(index));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts(300).find((post) => post.slug === slug);
}

export function getPopularPosts(limit = 5): BlogPost[] {
  return getBlogPosts(limit);
}

export function getTagPosts(tag: string, limit = 12): BlogPost[] {
  const normalized = tag.toLowerCase();
  return getBlogPosts(300).filter((post) =>
    post.tags.some((entry) => entry.toLowerCase() === normalized)
  ).slice(0, limit);
}
