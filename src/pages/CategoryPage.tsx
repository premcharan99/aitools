import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { ToolModal } from '../components/ToolModal';
import type { AITool } from '../types';

export function CategoryPage() {
  const { categoryId } = useParams();
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">{category.name}</h1>
        <p className="mt-2 text-lg text-gray-400">{category.description}</p>
        
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.tools.map((tool) => (
            <div
              key={tool.id}
              className="cursor-pointer rounded-xl bg-white/[0.08] p-6 hover:bg-white/[0.12] transition-all duration-300"
              onClick={() => {
                setSelectedTool(tool);
                setIsModalOpen(true);
              }}
            >
              <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{tool.description}</p>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-[#3a86ff]/10 px-2.5 py-0.5 text-xs font-medium text-[#3a86ff]">
                  {tool.pricing}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToolModal
        tool={selectedTool}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTool(null);
        }}
      />
    </div>
  );
}