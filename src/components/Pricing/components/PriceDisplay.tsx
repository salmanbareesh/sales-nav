import React from 'react';
import { SalesNavigatorPlan } from '../types';

interface PriceDisplayProps {
  plan: SalesNavigatorPlan;
  selectedDuration: number;
}

export default function PriceDisplay({ plan, selectedDuration }: PriceDisplayProps) {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-bold text-gradient">₹{plan.basePrice}</span>
        <span className="text-gray-400">
          for {selectedDuration} {selectedDuration === 1 ? 'month' : 'months'}
        </span>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        ₹{plan.pricePerMonth}/month
      </p>
      {plan.savings && (
        <div className="mt-3">
          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            Save ₹{plan.savings}
          </span>
        </div>
      )}
    </div>
  );
}
