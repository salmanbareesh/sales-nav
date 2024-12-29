import { useState } from 'react';
import { SalesNavigatorPlan } from '../types';

export function usePayment(selectedDuration: number, currentPlan: SalesNavigatorPlan) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDirectPayment = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      localStorage.setItem('pendingOrder', JSON.stringify({
        plan: `Sales Navigator ${selectedDuration} ${selectedDuration === 1 ? 'Month' : 'Months'}`,
        price: `₹${currentPlan.basePrice}`,
        duration: `${selectedDuration} ${selectedDuration === 1 ? 'month' : 'months'}`,
        timestamp: new Date().toISOString()
      }));
      
      setIsProcessing(false);
    } catch (error: any) {
      console.error('Payment initiation failed:', error);
      setError('Failed to initiate payment. Please try again.');
      setIsProcessing(false);
      setTimeout(() => setError(null), 5000);
    }
  };

  return {
    isProcessing,
    error,
    handleDirectPayment
  };
}
