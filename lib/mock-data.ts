export const mockUsers = [
  {
    id: 'u-001',
    email: 'jane@demo.com',
    username: 'janecreator',
    role: 'client',
    subscriptionTier: 'pro',
    status: 'active',
    emailVerified: true,
    displayName: 'Jane Creator'
  },
  {
    id: 'u-002',
    email: 'admin@demo.com',
    username: 'admin',
    role: 'super_admin',
    subscriptionTier: 'pro',
    status: 'active',
    emailVerified: true,
    displayName: 'Platform Admin'
  }
];

export const mockPage = {
  id: 'p-001',
  userId: 'u-001',
  customUsername: 'janecreator',
  profileName: 'Jane Creator',
  bioText: 'Helping creators grow with product, content, and community.',
  themeTemplate: 'minimalist',
  isPublished: true,
  isActive: true,
  content: [
    { id: 'c-1', title: 'Portfolio', type: 'link', url: 'https://example.com/portfolio', isPublished: true, isActive: true, sortOrder: 1 },
    { id: 'c-2', title: 'Shop', type: 'link', url: 'https://shop.example.com', isPublished: true, isActive: true, sortOrder: 2 },
    { id: 'c-3', title: 'Newsletter', type: 'link', url: 'https://example.com/newsletter', isPublished: true, isActive: true, sortOrder: 3 }
  ]
};
