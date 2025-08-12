import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Apply Now', href: getPermalink('/contact'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Business Solutions', href: getPermalink('/services') },
        { text: 'Financial Services', href: getPermalink('/services') },
        { text: 'Consulting', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Contact Info',
      links: [
        { text: '30 N Gould St Ste N', href: '#' },
        { text: 'Sheridan, WY 82801 US', href: '#' },
        { text: 'contact@somincola.com', href: 'mailto:contact@somincola.com' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@somincola.com' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Somincola. All rights reserved. | 30 N Gould St Ste N, Sheridan, WY 82801 US
  `,
};
