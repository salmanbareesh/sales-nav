import React from 'react';
import { Loader2 } from 'lucide-react';

interface ActionButtonsProps {
  onPayAfterActivation?: () => void;
  isProcessing?: boolean;
  showPayAfter?: boolean;
}

export default function ActionButtons({ 
  onPayAfterActivation, 
  isProcessing,
  showPayAfter = true
}: ActionButtonsProps) {
  return (
    <div className="space-y-3 mt-auto">
      {showPayAfter && (
        <button
          onClick={onPayAfterActivation}
          disabled={isProcessing}
          className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-300 disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Pay After Activation'
          )}
        </button>
      )}
    </div>
  );
}
