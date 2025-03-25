import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import Fuse from 'fuse.js';
import { categories } from '../data/categories';
import { SearchResults } from './SearchResults';
import { Footer } from './Footer';
import type { Category } from '../types';

const fuse = new Fuse(categories, {
  keys: ['name', 'description', 'tools.name', 'tools.description'],
  threshold: 0.3,
  distance: 100,
  includeScore: true
});

export function Layout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Category[]>([]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = fuse.search(query)
        .slice(0, 5)
        .map(result => result.item);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      <nav className="border-b border-white/10 bg-[#121212]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="text-xl font-bold gradient-text">
              AI Tools Directory
            </Link>
            <div className="flex items-center gap-4 relative flex-1 max-w-xl ml-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search tools and categories..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full rounded-lg bg-white/10 px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3a86ff] focus:bg-white/15 transition-all"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <SearchResults results={searchResults} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}