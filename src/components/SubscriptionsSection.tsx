import React from 'react';
import { Gem, Star, ArrowRight, Crown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SubscriptionsSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Star className="h-5 w-5" />,
      text: "Priority processing and handling"
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "Discounted rates on all shipments"
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "Dedicated account manager"
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "Extended insurance coverage"
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "Advanced analytics dashboard"
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "24/7 premium support"
    }
  ];

  return (
    <section id="subscriptions" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl mb-8 shadow-lg">
                <Crown className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">{t('subscriptionsTitle')}</h2>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                {t('subscriptionsDesc')}
              </p>

              {/* Benefits grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center text-left p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <div className="text-yellow-400 mr-3">
                      {benefit.icon}
                    </div>
                    <span className="text-white text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold rounded-xl text-lg px-8 py-4 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('subscriptionsCTA')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                
                <div className="text-sm text-gray-300">
                  <div className="flex items-center justify-center mb-2">
                    <Gem className="h-4 w-4 mr-2 text-yellow-400" />
                    Qualification criteria apply
                  </div>
                  <p className="max-w-md mx-auto">
                    Partner program is available for businesses with consistent monthly shipping volume. 
                    Contact us to see if you qualify for exclusive rates and benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};