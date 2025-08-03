import React, { useState } from 'react';
import { Sparkles, Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LoadingSpinner } from './LoadingSpinner';

export const PackagingAdvisor: React.FC = () => {
  const { t } = useLanguage();
  const [description, setDescription] = useState('');
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAdvice = async () => {
    if (!description.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockAdvice = `
        <div class="space-y-4">
          <h4 class="font-bold text-lg text-gray-900">Packaging Recommendations for: ${description}</h4>
          
          <div>
            <h5 class="font-semibold text-gray-800 mb-2">Materials Needed:</h5>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>Sturdy cardboard box (appropriate size)</li>
              <li>Bubble wrap or foam padding</li>
              <li>Packing tape (heavy-duty)</li>
              <li>Fragile stickers (if applicable)</li>
            </ul>
          </div>
          
          <div>
            <h5 class="font-semibold text-gray-800 mb-2">Packing Steps:</h5>
            <ol class="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Choose a box that's 2-3 inches larger than your item on all sides</li>
              <li>Add a layer of padding at the bottom of the box</li>
              <li>Wrap your item carefully with bubble wrap</li>
              <li>Place the wrapped item in the center of the box</li>
              <li>Fill empty spaces with additional padding</li>
              <li>Seal the box securely with packing tape</li>
              <li>Label clearly with "FRAGILE" if applicable</li>
            </ol>
          </div>
          
          <div class="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p class="text-sm text-yellow-800">
              <strong>Pro Tip:</strong> Always test your package by gently shaking it. If you hear movement, add more padding!
            </p>
          </div>
        </div>
      `;
      
      setAdvice(mockAdvice);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="packaging-advisor" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-6">
            <Package className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('advisorTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('advisorSubtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <div className="space-y-6">
              <div>
                <label htmlFor="item-description" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your item:
                </label>
                <textarea
                  id="item-description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-4 text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all duration-200 resize-none"
                  placeholder={t('advisorPlaceholder')}
                />
              </div>
              
              <button
                onClick={handleGetAdvice}
                disabled={isLoading || !description.trim()}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-xl text-lg px-8 py-4 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    {t('advisorButton')}
                  </>
                )}
              </button>
            </div>

            {advice && (
              <div className="mt-8 animate-fadeIn">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                  <div dangerouslySetInnerHTML={{ __html: advice }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};