import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

export function HomePage() {
  return (
    <div className="bg-glow">
      <div className="relative bg-gradient-to-br from-[#121212] to-[#1a1a1a] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-6xl animate-float">
            Discover the Best{' '}
            <span className="gradient-text">AI Tools</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our curated collection of AI tools to enhance your workflow.
            Find, compare, and implement the perfect AI solutions for your needs.
          </p>
        </div>
      </div>

      <div className="py-16 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] opacity-50" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold gradient-text mb-8">Browse Categories</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent p-6 hover:from-white/[0.12] transition-all duration-500 card-hover-effect"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-[#3a86ff]/10 p-3 group-hover:bg-[#3a86ff]/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-[#3a86ff]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        {category.tools.length} tools
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    {category.description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#3a86ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}