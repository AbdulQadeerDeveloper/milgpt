'use client';

import { Menu, X, Shield } from 'lucide-react';

interface ChatHeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function ChatHeader({ isSidebarOpen, onToggleSidebar }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-[#1a1a1c] rounded-lg transition-colors md:hidden"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center">
            <Shield size={18} />
          </div>
          <h1 className="text-xl font-bold">MILGPT</h1>
        </div>
      </div>
      <div className="hidden md:block">
        <span className="text-xs text-gray-500 bg-[#1a1a1c] px-3 py-1.5 rounded-full">
          Model: GPT-4 Military
        </span>
      </div>
    </div>
  );
}