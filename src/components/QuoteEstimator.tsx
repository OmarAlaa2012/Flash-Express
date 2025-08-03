import React, { useState } from 'react';
import { Calculator, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LoadingSpinner } from './LoadingSpinner';

export const QuoteEstimator: React.FC = () => {
  const { t } = useLanguage();
  const [description, setDescription] = useState('');
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetQuote = async () => {
    if (!description.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockQuote = `
        <div class="space-y-6">
          <h4 class="font-bold text-xl text-gray-900">Estimated Quote for Your Shipment</h4>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
              <h5 class="font-semibold text-green-800 mb-2">Estimated Cost Range</h5>
              <div class="text-2xl font-bold text-green-700">3,500 - 5,200 EGP</div>
              <p class="text-sm text-green-600 mt-1">Based on standard bulk rates</p>
            </div>
            
            <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
              <h5 class="font-semibold text-blue-800 mb-2">Estimated Delivery</h5>
              <div class="text-2xl font-bold text-blue-700">2-3 Days</div>
              <p class="text-sm text-blue-600 mt-1">For bulk shipments</p>
            </div>
          </div>
          
          <div>
            <h5 class="font-semibold text-gray-800 mb-3">Cost Factors:</h5>
            <div class="space-y-2">
              <div class="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                <span class="text-gray-700">Total Weight</span>
                <span class="font-medium">Major factor</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                <span class="text-gray-700">Package Dimensions</span>
                <span class="font-medium">Moderate factor</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                <span class="text-gray-700">Distance</span>
                <span class="font-medium">Moderate factor</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                <span class="text-gray-700">Special Handling</span>
                <span class="font-medium">Minor factor</span>
              </div>
            </div>
          </div>
          
          <div class="p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
            <p class="text-sm text-yellow-800">
              <strong>Important:</strong> This is a preliminary estimate. For an accurate quote, 
              please contact our customer service team at +20 111 630 6013 with detailed specifications.
            </p>
          </div>
          
          <div class="text-center">
            <a href="#contact" class="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200">
              Get Final Quote
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      `;
      
      setQuote(mockQuote);
      setIsLoading(false);
    }, 2500);
  };

  return (
    <section id="quote-estimator" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('estimatorTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('estimatorSubtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl border border-purple-100">
            <div className="space-y-6">
              <div>
                <label htmlFor="quote-description" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your bulk shipment:
                </label>
                <textarea
                  id="quote-description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-4 text-gray-700 placeholder-gray-400 bg-white border border-purple-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400/30 focus:border-purple-400 transition-all duration-200 resize-none"
                  placeholder={t('estimatorPlaceholder')}
                />
              </div>
              
              <button
                onClick={handleGetQuote}
                disabled={isLoading || !description.trim()}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl text-lg px-8 py-4 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner />
                    <span className="ml-2">Calculating estimate...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    {t('estimatorButton')}
                  </>
                )}
              </button>
            </div>

            {quote && (
              <div className="mt-8 animate-fadeIn">
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <div dangerouslySetInnerHTML={{ __html: quote }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};