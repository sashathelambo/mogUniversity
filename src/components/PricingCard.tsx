import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, features, popular }) => {
  return (
    <div className={`relative p-8 bg-white rounded-2xl shadow-sm ${popular ? 'border-2 border-indigo-600 shadow-lg' : ''}`}>
      {popular && (
        <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-indigo-600 text-white px-4 py-1 text-sm rounded-full">
          Popular
        </span>
      )}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-indigo-600 mr-3" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full py-3 px-6 rounded-lg text-center font-medium ${
        popular
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      } transition-colors`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;