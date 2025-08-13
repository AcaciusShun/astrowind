// Site configuration
export const SITE = {
  name: 'Somincola',
  site: 'https://example.com',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: undefined,
};

// Metadata configuration
export const METADATA = {
  title: {
    default: 'Somincola',
    template: '%s — Somincola',
  },
  description:
    'Leading SaaS development and consulting company specializing in custom software solutions, digital transformation, and strategic technology consulting services.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'Somincola',
    images: [
      {
        url: '~/assets/images/default.png',
        width: 1200,
        height: 628,
      },
    ],
    type: 'website',
  },
  twitter: {
    handle: '@somincola',
    site: '@somincola',
    cardType: 'summary_large_image',
  },
};

// I18N configuration
export const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

// App configuration
export const APP_BLOG = {
  isEnabled: true,
  isRelatedPostsEnabled: true,
  postsPerPage: 6,
  post: {
    isEnabled: true,
    permalink: '/blog/%slug%',
    robots: {
      index: true,
      follow: true,
    },
  },
  list: {
    isEnabled: true,
    pathname: 'blog',
    robots: {
      index: true,
      follow: true,
    },
  },
  category: {
    isEnabled: true,
    pathname: 'category',
    robots: {
      index: true,
      follow: true,
    },
  },
  tag: {
    isEnabled: true,
    pathname: 'tag',
    robots: {
      index: true,
      follow: true,
    },
  },
};

// UI configuration
export const UI = {
  theme: 'system',
};

// Analytics configuration
export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: undefined,
      partytown: false,
    },
  },
};
