import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t('testimonial1'),
      name: t('testimonial1Name'),
      role: t('testimonial1Role'),
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      rating: 5
    },
    {
      quote: t('testimonial2'),
      name: t('testimonial2Name'),
      role: t('testimonial2Role'),
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      rating: 5
    },
    {
      quote: t('testimonial3'),
      name: t('testimonial3Name'),
      role: t('testimonial3Role'),
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonialsTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('testimonialsSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-yellow-200 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-yellow-400/20">
                <Quote className="h-12 w-12" />
              </div>
              
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  className="h-14 w-14 rounded-full object-cover border-2 border-yellow-400/20"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <p className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-200">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">4.9/5</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">10K+</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">500K+</div>
              <div className="text-gray-600 text-sm">Packages Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">99.9%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};