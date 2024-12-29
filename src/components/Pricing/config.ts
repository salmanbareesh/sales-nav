import { SalesNavigatorPlan, PremiumPlan } from './types';

export const salesNavigatorPlans: Record<number, SalesNavigatorPlan> = {
  1: {
    duration: 1,
    basePrice: 2500,
    pricePerMonth: 2500,
    popular: true // Making 1-month plan popular since it's the only option
  }
};

export const salesNavigatorFeatures = [
  "Advanced lead and company search",
  "Extended network access",
  "InMail messages (30 per month)",
  "Lead recommendations",
  "Real-time sales updates",
  "CRM integration",
  "Smart links",
  "Notes and tags",
  "Priority customer support",
  "Team collaboration tools",
  "Advanced reporting",
  "Bulk InMail credits"
];

export const premiumBusinessPlan: PremiumPlan = {
  title: "LinkedIn Premium Business",
  description: "Enhanced professional presence",
  basePrice: 3000,
  duration: 6,
  features: [
    "See who viewed your profile",
    "Business insights",
    "Unlimited people browsing",
    "15 InMail messages per month",
    "Online video courses",
    "Salary insights",
    "Applicant insights",
    "Premium badge"
  ]
};
