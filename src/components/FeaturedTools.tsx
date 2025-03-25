import React from 'react';
import { Star } from 'lucide-react';

const featuredTools = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced language model for natural conversations and content generation',
    logo: 'https://images.unsplash.com/photo-1699133788037-f661cc2cf62d?w=64&h=64&fit=crop',
    rating: 4.8,
    reviewCount: 2547,
    pricing: 'freemium'
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI-powered image generation with stunning artistic capabilities',
    logo: 'https://images.unsplash.com/photo-1699114833348-8f5a1cf0a410?w=64&h=64&fit=crop',
    rating: 4.7,
    reviewCount: 1832,
    pricing: 'paid'
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code faster',
    logo: 'https://images.unsplash.com/photo-1699201210001-715a0b695c24?w=64&h=64&fit=crop',
    rating: 4.9,
    reviewCount: 3156,
    pricing: 'paid'
  }
];

export function FeaturedTools() {
  return (
    <div className="py-16 bg-[#121212]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white font-poppins mb-8">Featured Tools</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <div
              key={tool.id}
              className="rounded-xl bg-white/[0.08] p-6 hover:bg-white/[0.12] transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white font-poppins">{tool.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-[#3a86ff] fill-current" />
                      <span className="ml-1 text-sm text-white">{tool.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">({tool.reviewCount} reviews)</span>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-[#3a86ff]/10 px-2.5 py-0.5 text-xs font-medium text-[#3a86ff] mt-2">
                    {tool.pricing}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400 font-inter">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}