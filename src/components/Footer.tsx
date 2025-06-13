import React from 'react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: '#',
    color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: '#',
    color: 'hover:bg-blue-600'
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: '#',
    color: 'hover:bg-red-600'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:contact@sympathystudio.com',
    color: 'hover:bg-amber-400'
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-6">
            <img 
              src="/Sympathy (Foto de perfil de Facebook).zip - 6.svg" 
              alt="Sympathy Studio Logo" 
              className="w-10 h-10"
            />
            <span className="text-white text-xl font-light tracking-wider">
              SYMPATHY <span className="font-medium">STUDIO</span>
            </span>
          </div>
          
          <h2 className="text-2xl text-white font-light mb-8">
            Connect with <span className="font-medium">Us</span>
          </h2>
          
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white/10 ${social.color} transition-all duration-300 group`}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-white" />
              </a>
            ))}
          </div>

          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Sympathy Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;