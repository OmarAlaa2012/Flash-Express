import React from 'react';
import { Box, PackagePlus, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('pricingTitle')}</h2>
          <p className="text-xl text-gray-600">{t('pricingSubtitle')}</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Small Orders Card */}
          <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
                <Box className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('smallOrdersTitle')}</h3>
              <div className="text-5xl font-extrabold text-gray-900 mb-2">
                {t('smallOrdersPrice')}
              </div>
              <p className="text-gray-600 mb-6">{t('smallOrdersDesc')}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Free pickup within Greater Cairo
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Real-time tracking included
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  3-day delivery guarantee
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Basic insurance included
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-xl px-6 py-3 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

          {/* Large Orders Card */}
          <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl shadow-2xl text-white transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-4 right-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                <Star className="inline h-3 w-3 mr-1" />
                POPULAR
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <PackagePlus className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('largeOrdersTitle')}</h3>
              <div className="text-3xl font-bold mb-2">Custom Pricing</div>
              <p className="text-white/90 mb-6">{t('largeOrdersDesc')}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Volume discounts available
                </div>
                <div className="flex items-center text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Dedicated account manager
                </div>
                <div className="flex items-center text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Priority handling & delivery
                </div>
                <div className="flex items-center text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Extended insurance coverage
                </div>
                <div className="flex items-center text-sm text-white/90">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Flexible payment terms
                </div>
              </div>

              <a
                href="#contact"
                className="w-full bg-white text-orange-500 hover:bg-gray-50 font-bold rounded-xl px-6 py-3 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                {t('largeOrdersCTA')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional pricing info */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-2xl border border-blue-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Need something different?</h4>
            <p className="text-gray-700 mb-6">
              We offer flexible pricing for special requirements, international shipping, 
              same-day delivery, and white-label solutions. Contact us to discuss your specific needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};