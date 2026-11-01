export const demoUsers = [
  { id: 'u-1', email: 'admin@demo.com', password: 'admin123', role: 'admin', name: 'Platform Admin' },
  { id: 'u-2', email: 'member@demo.com', password: 'member123', role: 'member', name: 'Jane Creator' }
];

export const demoPage = {
  id: 'p-1',
  userId: 'u-2',
  customUsername: 'janecreator',
  bioText: 'Profile designer, creator, and digital storyteller.',
  themeTemplate: 'minimalist',
  isPublished: true,
  isActive: true,
  content: [
    { id: 'c-1', title: 'Portfolio', type: 'link', url: 'https://example.com/portfolio', isPublished: true, isActive: true, sortOrder: 1 },
    { id: 'c-2', title: 'Shop', type: 'link', url: 'https://shop.example.com', isPublished: true, isActive: true, sortOrder: 2 },
    { id: 'c-3', title: 'Newsletter', type: 'link', url: 'https://example.com/newsletter', isPublished: true, isActive: true, sortOrder: 3 }
  ]
};
