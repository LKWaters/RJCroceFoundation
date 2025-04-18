import { getPermalink, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Our Story',
      href: getHomePermalink(),
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
      href: getPermalink('/involved'),
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
        { text: '(732) 687-9334', href: 'tel:7326879334' },
        { text: 'RJCroceFoundation@gmail.com', href: 'mailto:rjcrocefoundation@gmail.com' },
        {
          text: '30 First Street \n Rumson NJ, 07760',
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
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/rjcrocefoundation/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61565832213939' },
  ],
  footNote: `
    &#9178; 
    Developed by 
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/LKWaters"><u>LKWaters</u></a>
     and 
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dzialoj"><u>dzialoj</u></a>
  `,
};
