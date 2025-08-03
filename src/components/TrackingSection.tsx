import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LoadingSpinner } from './LoadingSpinner';

interface TrackingStatus {
  status: string;
  location: string;
  details: string;
  icon: React.ReactNode;
  color: string;
}

export const TrackingSection: React.FC = () => {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackingStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const trackingStatuses: TrackingStatus[] = [
    {
      status: 'In Transit',
      location: 'Cairo Sorting Facility',
      details: 'Package has left the origin facility.',
      icon: <Truck className="h-6 w-6" />,
      color: 'text-blue-600'
    },
    {
      status: 'Out for Delivery',
      location: 'Alexandria Hub',
      details: 'Your package is on its way to the final destination.',
      icon: <Package className="h-6 w-6" />,
      color: 'text-yellow-600'
    },
    {
      status: 'Delivered',
      location: 'Your City',
      details: 'Package delivered successfully.',
      icon: <CheckCircle className="h-6 w-6" />,
      color: 'text-green-600'
    },
    {
      status: 'Exception',
      location: 'Giza',
      details: 'Delivery attempt failed. Will retry next business day.',
      icon: <AlertCircle className="h-6 w-6" />,
      color: 'text-red-600'
    }
  ];

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);
    setShowExplanation(false);

    setTimeout(() => {
      const randomStatus = trackingStatuses[Math.floor(Math.random() * trackingStatuses.length)];
      setTrackingResult(randomStatus);
      setIsLoading(false);
    }, 1500);
  };

  const handleExplainStatus = () => {
    setShowExplanation(true);
  };

  return (
    <section id="tracking" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('trackTitle')}</h2>
            <p className="text-xl text-gray-600">{t('trackSubtitle')}</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleTracking} className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-grow relative">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder={t('trackPlaceholder')}
                  className="w-full px-6 py-4 text-lg text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold rounded-xl text-lg px-8 py-4 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    {t('trackButton')}
                  </>
                )}
              </button>
            </form>

            {trackingResult && (
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border-l-4 border-yellow-400 animate-fadeIn">
                <div className="flex items-start space-x-4">
                  <div className={`${trackingResult.color} mt-1`}>
                    {trackingResult.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Tracking ID: {trackingNumber.toUpperCase()}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Status:</span>
                        <span className={`${trackingResult.color} font-semibold`}>
                          {trackingResult.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Location:</span>
                        <span className="text-gray-900 font-medium">{trackingResult.location}</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-600 font-medium">Details:</span>
                        <span className="text-gray-700 text-right max-w-xs">{trackingResult.details}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={handleExplainStatus}
                      className="mt-4 w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      {t('explainButton')}
                    </button>

                    {showExplanation && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg animate-fadeIn">
                        <p className="text-blue-800 text-sm leading-relaxed">
                          Your package is currently {trackingResult.status.toLowerCase()} at {trackingResult.location}. 
                          This means {trackingResult.details.toLowerCase()} You can expect updates within the next 24 hours. 
                          If you have any concerns, please contact our customer service at +20 111 630 6013.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};