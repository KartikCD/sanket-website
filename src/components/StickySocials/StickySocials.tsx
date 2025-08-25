import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const phoneNumber = "918779496622";
const message = "Hello Keshav Enterprises, I'm interested in your waterproofing services. Could you please provide more information?";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

// Custom WhatsApp icon to match the theme
const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.803 6.182l-.341 1.236 1.241-.328zM9.06 8.642c-.196-.318-.42-.335-.614-.341-.182-.006-.38-.006-.578 0-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198.931 1.593 2.262 2.237.944.465 1.66.689 2.23.882.745.246 1.413.208 1.95.124.581-.092 1.818-.745 2.08-1.47.262-.724.262-1.358.183-1.47-.08-.112-.196-.17-.42-.318s-1.255-.622-1.448-.694c-.194-.072-.335-.111-.476.111-.14.223-.547.694-.673.836-.125.142-.25.158-.475.048-.225-.111-.944-.346-1.8-.925-.669-.456-1.124-1.016-1.258-1.184-.133-.168-.014-.262.098-.37c.101-.098.224-.262.335-.393.111-.13.149-.222.224-.371.074-.149.037-.28-.019-.393-.056-.112-.476-1.141-.653-1.562z" />
  </svg>
);

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
    href: whatsappUrl,
    icon: <WhatsappIcon className="h-6 w-6" />,
    label: 'WhatsApp',
    hoverBg: 'hover:bg-green-500',
  },
  {
    href: 'mailto:contact@kewaterproofing.com',
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
