import React from 'react';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      description: 'Speak directly with our team',
      action: 'tel:+201116306013',
      buttonText: t('contactCall'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      description: 'Quick and convenient messaging',
      action: 'https://wa.me/201116306013',
      buttonText: t('contactWhatsapp'),
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const businessHours = [
    { day: 'Sunday - Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday - Saturday', hours: '10:00 AM - 6:00 PM' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contactTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('contactSubtitle')}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  
                  <div className="text-2xl font-bold text-gray-800 mb-6 tracking-wider">
                    +20 111 630 6013
                  </div>
                  
                  <a
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white font-bold rounded-xl px-6 py-3 transition-all duration-200 transform hover:scale-105 flex items-center justify-center`}
                  >
                    {method.icon}
                    <span className="ml-2">{method.buttonText}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Business Info */}
            <div className="space-y-6">
              {/* Business Hours */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl border border-yellow-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                </div>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Service Area</h3>
                </div>
                
                <div className="space-y-2 text-gray-700">
                  <p>Greater Cairo Area</p>
                  <p>Alexandria</p>
                  <p>Giza</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Expanding to more cities soon!
                  </p>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 text-center">
                <div className="text-2xl font-bold text-green-700 mb-2">⚡ Quick Response</div>
                <p className="text-green-600 text-sm">
                  We typically respond within 30 minutes during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};