import { getPermalink, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
    },
    {
      text: 'Our Story',
      href: 'story',
    },
    {
      text: 'Our Work',

      links: [
        {
          text: 'Brookdale Scholarships',
          href: getPermalink('/work/brookdale'),
        },
        {
          text: 'ACE Scholarships',
          href: getPermalink('/work/ace'),
        },
        {
          text: 'Sports EQ Drive',
          href: getPermalink('/work/eq-drive'),
        },
      ],
    },
    {
      text: 'Get Involved',
      href: 'involved',
    },
  ],
  actions: [{ text: 'Donate', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Get In Touch',
      links: [
        { text: '(732) 241-7990', href: 'tel:7322417990' },
        { text: 'RJCroceFoundation@gmail.com', href: 'mailto:rjcrocefoundation@gmail.com' },
        {
          text: 'RJ Croce Foundation \n 30 First Street \n Rumson NJ, 07760',
          href: 'http://maps.google.com/?q=30 First Street, Rumson, New Jersey, 07760',
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
