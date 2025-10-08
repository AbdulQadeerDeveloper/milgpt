// types/chat.ts

export interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

export interface Conversation {
  id: number;
  title: string;
  date: string;
  messages?: Message[];
}

export interface User {
  name: string;
  clearanceLevel: string;
  avatar?: string;
}

export interface APIResponse {
  message: string;
  success: boolean;
  error?: string;
}

export interface Chat {
  id: string;
  title: string;
  createdAt: Date;
  messages: Message[];
}
