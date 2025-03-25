import React from 'react';
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-[#121212] to-[#1a1a1a] py-20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Discover the Best{' '}
            <span className="bg-gradient-to-r from-[#3a86ff] to-[#4cc9f0] bg-clip-text text-transparent">
              AI Tools
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 font-inter">
            Explore our curated collection of AI tools to enhance your workflow.
            Find, compare, and implement the perfect AI solutions for your needs.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                className="w-full rounded-lg bg-white/10 px-4 py-3 pl-12 text-white placeholder-gray-400 backdrop-blur-sm ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                placeholder="Search AI tools..."
              />
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}