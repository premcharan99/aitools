import React from 'react';
import { Brain, Notebook as Robot, Code, MessageSquare, Image, Music, Video, Database } from 'lucide-react';

const categories = [
  { id: '1', name: 'Machine Learning', icon: Brain, description: 'Advanced ML and deep learning tools' },
  { id: '2', name: 'Chatbots', icon: MessageSquare, description: 'Conversational AI solutions' },
  { id: '3', name: 'Image Generation', icon: Image, description: 'AI-powered image creation tools' },
  { id: '4', name: 'Code Generation', icon: Code, description: 'AI coding assistants' },
  { id: '5', name: 'Robotics', icon: Robot, description: 'Robotic process automation' },
  { id: '6', name: 'Audio & Music', icon: Music, description: 'AI music and audio tools' },
  { id: '7', name: 'Video Generation', icon: Video, description: 'AI video creation and editing' },
  { id: '8', name: 'Data Analysis', icon: Database, description: 'AI-powered data analytics' },
];

export function CategoryGrid() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white font-poppins mb-8">Browse Categories</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent p-6 hover:from-white/[0.12] transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#3a86ff]/10 p-3">
                    <IconComponent className="h-6 w-6 text-[#3a86ff]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-poppins">{category.name}</h3>
                </div>
                <p className="mt-4 text-sm text-gray-400 font-inter">{category.description}</p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#3a86ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}