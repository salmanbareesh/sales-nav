import React from 'react';
import { SalesNavigatorPlan } from '../types';

interface DurationSelectorProps {
  plans: Record<number, SalesNavigatorPlan>;
  selectedDuration: number;
  onDurationChange: (duration: number) => void;
}

export default function DurationSelector({ plans, selectedDuration, onDurationChange }: DurationSelectorProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      {Object.keys(plans).map((duration) => (
        <button
          key={duration}
          onClick={() => onDurationChange(Number(duration))}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            selectedDuration === Number(duration)
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white'
              : 'glass-card text-gray-300 hover:bg-white/10'
          }`}
        >
          {duration} {Number(duration) === 1 ? 'Month' : 'Months'}
        </button>
      ))}
    </div>
  );
}
