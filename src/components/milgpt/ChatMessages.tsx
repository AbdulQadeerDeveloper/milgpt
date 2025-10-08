"use client";

import { useEffect, useRef } from "react";
import { Shield } from "lucide-react";
import { Message } from "@/types/index";

interface ChatMessagesProps {
  messages: Message[];
  loading?: boolean;
  error?: string | null;
}

export default function ChatMessages({
  messages,
  loading,
  error,
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto bg-[#0e0e10]">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start gap-3 ${
                msg.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  msg.role === "assistant"
                    ? "bg-gradient-to-br from-green-600 to-emerald-700"
                    : "bg-[#1a1a1c]"
                }`}
              >
                {msg.role === "assistant" ? (
                  <Shield size={18} />
                ) : (
                  <div className="text-sm font-semibold text-gray-300">U</div>
                )}
              </div>
              <div
                className={`max-w-[80%] text-sm ${
                  msg.role === "user"
                    ? "bg-[#1a1a1c] p-4 rounded-2xl text-gray-200"
                    : "text-gray-200 whitespace-pre-wrap leading-relaxed"
                }`}
              >
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-2xl">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-red-400 text-sm text-center mt-2">{error}</div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
