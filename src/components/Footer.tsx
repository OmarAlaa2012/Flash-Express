import React from 'react';
import { Facebook, Twitter, Linkedin, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '#services', key: 'navServices' },
    { href: '#packaging-advisor', key: 'navAdvisor' },
    { href: '#pricing', key: 'navPricing' },
    { href: '#subscriptions', key: 'navSubscriptions' },
    { href: '#tracking', key: 'footerTrack' },
    { href: '#contact', key: 'navContact' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-gray-900" />
              </div>
              <span className="ml-3 text-2xl font-bold">Flash Express</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footerSlogan')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footerLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white mb-1">Phone & WhatsApp</p>
                <p>+20 111 630 6013</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Service Area</p>
                <p>Greater Cairo, Alexandria, Giza</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Business Hours</p>
                <p>Sun-Thu: 9AM-8PM</p>
                <p>Fri-Sat: 10AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Flash Express. {t('footerRights')}
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};