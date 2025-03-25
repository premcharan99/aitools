import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from '../types';

interface SearchResultsProps {
  results: Category[];
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] rounded-lg shadow-xl border border-white/10 max-h-[400px] overflow-y-auto backdrop-blur-lg">
      {results.map((category) => (
        <div key={category.id}>
          <div className="p-3 bg-white/5">
            <h3 className="text-sm font-semibold text-[#3a86ff]">{category.name}</h3>
          </div>
          {category.tools.map((tool) => (
            <Link
              key={tool.id}
              to={`/category/${category.id}`}
              className="flex items-start gap-4 p-4 hover:bg-white/5 transition-colors"
            >
              <div>
                <h4 className="text-white font-semibold">{tool.name}</h4>
                <p className="text-sm text-gray-400 mt-1">{tool.description}</p>
                <span className="inline-flex items-center rounded-full bg-[#3a86ff]/10 px-2 py-0.5 text-xs font-medium text-[#3a86ff] mt-2">
                  {tool.pricing}
                </span>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}