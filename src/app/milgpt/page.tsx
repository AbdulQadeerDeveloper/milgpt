"use client";

import { useState } from "react";
import Sidebar from "@/components/milgpt/Sidebar";
import ChatHeader from "@/components/milgpt/ChatHeader";
import ChatMessages from "@/components/milgpt/ChatMessages";
import ChatInput from "@/components/milgpt/ChatInput";
import { Message } from "@/types/index";
import { useGemini } from "@/hooks/useGemini";

export default function MILGPTPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to MILGPT. I'm here to assist with military intelligence, strategy, and operational queries. How can I help you today?",
    },
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { sendMessage, loading, error } = useGemini();

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || loading) return;

    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Send combined conversation to Gemini
      const response = await sendMessage(content);

      const assistantMessage: Message = {
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Error sending message:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ There was an issue connecting to the Gemini API. Please try again later.",
        },
      ]);
    }
  };

  const handleNewChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Welcome to MILGPT. I'm here to assist with military intelligence, strategy, and operational queries. How can I help you today?",
      },
    ]);
  };

  return (
    <div className="flex h-screen bg-[#0d0e10] text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onNewChat={handleNewChat}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full">
        <ChatHeader
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Messages */}
        <ChatMessages messages={messages} loading={loading} error={error} />

        {/* Input */}
        <ChatInput onSendMessage={handleSendMessage} disabled={loading} />
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
