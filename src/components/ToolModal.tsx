import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import type { AITool } from '../types';

interface ToolModalProps {
  tool: AITool | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ToolModal({ tool, isOpen, onClose }: ToolModalProps) {
  if (!tool) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-[#1a1a1a] p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-white">
                    {tool.name}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-1 hover:bg-white/10"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-300">{tool.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center rounded-full bg-[#3a86ff]/10 px-2.5 py-0.5 text-xs font-medium text-[#3a86ff]">
                      {tool.pricing}
                    </span>
                  </div>
                  {tool.features && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white">Features</h4>
                      <ul className="mt-2 list-disc pl-5 text-gray-300">
                        {tool.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-6">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-[#3a86ff] px-4 py-2 text-sm font-medium text-white hover:bg-[#3a86ff]/90"
                    >
                      Try Now
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}