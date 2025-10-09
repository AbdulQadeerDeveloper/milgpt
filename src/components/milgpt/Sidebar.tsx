"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Shield,
  LogOut,
  Settings,
  HelpCircle,
  Star,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onNewChat: () => void;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onNewChat }: SidebarProps) {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    picture?: string;
  } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    else router.push("/auth/login");
  }, [router]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await fetch("http://localhost:5000/api/auth/logout", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed md:relative z-30 w-64 bg-[#171719] h-full transition-transform duration-300 ease-in-out flex flex-col`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0d0e10] hover:bg-[#1a1a1c] transition-colors"
        >
          <Plus size={18} />
          <span className="text-sm font-medium text-gray-200">New Chat</span>
        </button>
      </div>

      {/* Footer */}
      <div className="relative border-t border-gray-800 p-4 mt-auto">
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#1a1a1c] rounded-lg transition"
        >
          {user?.picture ? (
            <Image
              src={user.picture}
              alt={user.name}
              width={32} // 8 * 4px (Tailwind w-8)
              height={32} // 8 * 4px (Tailwind h-8)
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center">
              <Shield size={18} />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate text-gray-200">
              {user?.name || "Loading..."}
            </div>
            <div className="text-xs text-gray-500 truncate">
              {user?.email || ""}
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute bottom-16 left-4 w-56 bg-[#1e1e21] border border-gray-700 rounded-lg shadow-lg py-2 animate-fadeIn">
            <div className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700 truncate">
              {user?.email}
            </div>
            <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-[#2a2a2d] text-sm text-gray-300">
              <Star size={16} /> Upgrade plan
            </button>
            <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-[#2a2a2d] text-sm text-gray-300">
              <User size={16} /> Personalization
            </button>
            <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-[#2a2a2d] text-sm text-gray-300">
              <Settings size={16} /> Settings
            </button>
            <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-[#2a2a2d] text-sm text-gray-300">
              <HelpCircle size={16} /> Help
            </button>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-2 hover:bg-[#2a2a2d] text-sm text-red-400"
            >
              <LogOut size={16} /> Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
