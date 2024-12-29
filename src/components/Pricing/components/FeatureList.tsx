import React from 'react';
import { Check } from 'lucide-react';

interface FeatureListProps {
  features: string[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
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
  );
}
