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
          text: 'ACE Scholarships (Coming Soon)',
          href: getPermalink('/work/coming-soon'),
        },
        {
          text: 'Sports EQ Drive (Coming Soon)',
          href: getPermalink('/work/coming-soon'),
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
    &#9178; 
    Developed by 
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/LKWaters"><u>LKWaters</u></a>
     and 
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dzialoj"><u>dizaloj</u></a>
  `,
};
