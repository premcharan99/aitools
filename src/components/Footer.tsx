import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">AI Tools Directory</h3>
            <p className="text-gray-400">
              Curated collection of the best AI tools to enhance your workflow.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/categories" className="text-gray-400 hover:text-white transition-colors">
                  Categories
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <a href="mailto:gpremcharan999@gmail.com" className="hover:text-white transition-colors">
                  gpremcharan999@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Github className="h-4 w-4" />
                <a href="https://github.com/premcharan99" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Linkedin className="h-4 w-4" />
                <a href="https://www.linkedin.com/in/prem-charan-gudipudi-a621a7256/" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">About Creator</h4>
            <p className="text-gray-400">
              Created with by Prem Charan. A passionate developer focused on building innovative solutions.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AI Tools Directory. Created by Prem Charan.</p>
        </div>
      </div>
    </footer>
  );
}