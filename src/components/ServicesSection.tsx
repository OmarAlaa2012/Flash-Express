import React from 'react';
import { PackageCheck, Truck, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <PackageCheck className="h-8 w-8" />,
      title: t('service1Title'),
      description: t('service1Desc'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: t('service2Title'),
      description: t('service2Desc'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Insurance Coverage',
      description: 'Full insurance coverage for all packages up to 5000 LE value, giving you complete peace of mind.',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you with any queries or concerns about your shipments.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('servicesTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('servicesSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-yellow-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900">Why Choose Flash Express?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">99.9%</div>
              <div className="text-gray-600">On-time delivery rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">0.1%</div>
              <div className="text-gray-600">Package damage rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">4.9/5</div>
              <div className="text-gray-600">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};