import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.instagram.com/',
    icon: <Instagram className="h-6 w-6" />,
    label: 'Instagram',
    hoverBg: 'hover:bg-pink-600',
  },
  {
    href: 'https://www.facebook.com/',
    icon: <Facebook className="h-6 w-6" />,
    label: 'Facebook',
    hoverBg: 'hover:bg-blue-700',
  },
  {
    href: 'mailto:info@keshaventerprises.com',
    icon: <Mail className="h-6 w-6" />,
    label: 'Email',
    hoverBg: 'hover:bg-gray-600',
  },
];

export const StickySocials = (): JSX.Element => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-center">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${link.label}`}
          className={`
            bg-[#f37021] text-white p-3 shadow-lg transition-all duration-300 ease-in-out 
            transform hover:scale-110 hover:-translate-x-2 ${link.hoverBg}
            ${index === 0 ? 'rounded-tl-lg' : ''}
            ${index === socialLinks.length - 1 ? 'rounded-bl-lg' : ''}
          `}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
