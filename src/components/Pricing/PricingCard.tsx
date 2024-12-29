import React, { useState } from 'react';
import { Check } from 'lucide-react';
import ActionButtons from './components/ActionButtons';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
  savings?: string;
  pricePerMonth?: string;
}

export default function PricingCard({
  title,
  description,
  price,
  duration,
  features,
  popular,
  savings,
  pricePerMonth
}: PricingCardProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const isPremiumBusiness = title.includes('Premium Business');

  return (
    <div className={`h-full ${popular ? 'lg:scale-110' : ''}`}>
      <div className={`h-full glass-card rounded-2xl transition-all duration-300 ${
        popular ? 'border-2 border-purple-500/50 shadow-lg shadow-purple-500/20' : ''
      }`}>
        <div className="p-8">
          {popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
              Most Popular
            </span>
          )}
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-gradient">₹{price}</span>
              <span className="text-gray-400">{duration}</span>
            </div>
            {pricePerMonth && (
              <p className="text-sm text-gray-400 mt-2">
                ₹{pricePerMonth}/month
              </p>
            )}
            {savings && (
              <div className="mt-3">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Save ₹{savings}
                </span>
              </div>
            )}
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <ActionButtons
            onPayAfterActivation={() => {}}
            isProcessing={isProcessing}
            showPayAfter={!isPremiumBusiness}
          />
        </div>
      </div>
    </div>
  );
}
