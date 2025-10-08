"use client";

import { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  onSendMessage,
  disabled = false,
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  const handleSubmit = () => {
    if (!input.trim() || disabled) return;
    onSendMessage(input);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(e.target.value);

  return (
    <div className="border-t border-gray-800 p-4 bg-[#0d0e10]">
      <div className="max-w-3xl mx-auto">
        <div className="relative flex items-end bg-[#1a1a1c] rounded-2xl border border-gray-800 focus-within:border-green-600 transition-colors">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Message MILGPT..."
            rows={1}
            disabled={disabled}
            className="flex-1 bg-transparent px-4 py-3 outline-none resize-none max-h-[200px] text-sm text-white"
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || disabled}
            className="m-2 p-2 rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-30 transition-colors flex items-center justify-center"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="text-xs text-gray-500 text-center mt-3">
          MILGPT can make mistakes. Verify important information.
        </div>
      </div>
    </div>
  );
}
