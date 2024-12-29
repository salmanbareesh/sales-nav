import React from 'react';
import { Mail, Clock, Link, Shield } from 'lucide-react';
import DynamicPricingCard from './DynamicPricingCard';
import PricingCard from './PricingCard';
import { salesNavigatorPlans, salesNavigatorFeatures, premiumBusinessPlan } from './config';

export default function PricingSection() {
  const steps = [
    {
      icon: Mail,
      title: "Enter Your Email",
      description: "Simply provide your email address - it's the only information we need from you."
    },
    {
      icon: Clock,
      title: "Choose Payment Option",
      description: "Select whether you want to pay before or after the service activation. For LinkedIn premium, no pay after activation available."
    },
    {
      icon: Link,
      title: "Activation Process",
      description: "Sales Navigator: Direct panel activation on your email. LinkedIn Premium: Voucher link sent to your email."
    },
    {
      icon: Shield,
      title: "Start Using",
      description: "Access all premium features instantly after activation. Full support provided."
    }
  ];

  return (
    <>
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <DynamicPricingCard 
              plans={salesNavigatorPlans}
              features={salesNavigatorFeatures}
            />
            <PricingCard
              title={premiumBusinessPlan.title}
              description={premiumBusinessPlan.description}
              price={premiumBusinessPlan.basePrice.toString()}
              duration={`for ${premiumBusinessPlan.duration} months`}
              features={premiumBusinessPlan.features}
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              Simple, fast, and secure activation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
