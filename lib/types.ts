export type UserRole = 'super_admin' | 'client';
export type SubscriptionTier = 'free' | 'pro';
export type AccountStatus = 'active' | 'banned' | 'pending_verification';

export type UserModel = {
  id: string;
  email: string;
  username: string | null;
  role: UserRole;
  subscriptionTier: SubscriptionTier;
  status: AccountStatus;
  emailVerified: boolean;
  displayName: string;
};

export type ContentType =
  | 'link'
  | 'social_icon'
  | 'heading'
  | 'video_embed'
  | 'image_carousel'
  | 'email_collector'
  | 'tip_jar';

export type ContentItem = {
  id: string;
  title: string;
  type: ContentType;
  url?: string;
  platform?: string;
  isPublished: boolean;
  isActive: boolean;
  sortOrder: number;
};

export type BiolinkPage = {
  id: string;
  userId: string;
  customUsername: string;
  profileName: string;
  bioText: string;
  themeTemplate: 'minimalist' | 'neon' | 'glassmorphism' | 'corporate';
  isPublished: boolean;
  isActive: boolean;
  content: ContentItem[];
};
