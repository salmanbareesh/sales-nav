import React, { useState } from 'react';
import EmailModal from '../EmailModal';
import { SalesNavigatorPlan } from './types';
import DurationSelector from './components/DurationSelector';
import PriceDisplay from './components/PriceDisplay';
import FeatureList from './components/FeatureList';
import ActionButtons from './components/ActionButtons';

interface DynamicPricingCardProps {
  plans: Record<number, SalesNavigatorPlan>;
  features: string[];
}

export default function DynamicPricingCard({ plans, features }: DynamicPricingCardProps) {
  const [selectedDuration, setSelectedDuration] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const currentPlan = plans[selectedDuration];

  const handlePayNow = async () => {
    setIsProcessing(true);
    try {
      localStorage.setItem('pendingOrder', JSON.stringify({
        plan: `Sales Navigator ${selectedDuration} ${selectedDuration === 1 ? 'Month' : 'Months'}`,
        price: `₹${currentPlan.basePrice}`,
        duration: `${selectedDuration} ${selectedDuration === 1 ? 'month' : 'months'}`,
        timestamp: new Date().toISOString()
      }));
    } catch (error) {
      console.error('Payment initiation failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={`h-full ${currentPlan.popular ? 'lg:scale-110' : ''}`}>
      <div className={`h-full glass-card rounded-2xl transition-all duration-300 ${
        currentPlan.popular ? 'border-2 border-purple-500/50 shadow-lg shadow-purple-500/20' : ''
      }`}>
        <div className="p-8">
          {currentPlan.popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
              Most Popular
            </span>
          )}
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Sales Navigator</h3>
            <p className="text-gray-400">Perfect for sales professionals</p>
          </div>

          <div className="mb-8">
            <DurationSelector
              plans={plans}
              selectedDuration={selectedDuration}
              onDurationChange={setSelectedDuration}
            />
            
            <PriceDisplay
              plan={currentPlan}
              selectedDuration={selectedDuration}
            />
          </div>
          
          <FeatureList features={features} />
          
          <ActionButtons
            onPayNow={handlePayNow}
            onPayAfterActivation={() => setIsModalOpen(true)}
            isProcessing={isProcessing}
          />
        </div>
      </div>

      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planTitle={`Sales Navigator ${selectedDuration} ${selectedDuration === 1 ? 'Month' : 'Months'}`}
        paymentType="after"
      />
    </div>
  );
}
