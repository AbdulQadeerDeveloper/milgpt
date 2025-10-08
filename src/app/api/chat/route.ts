import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY || "AIzaSyDczy3tYUgUylHKxcHTTH0wtb-LqpIRt84";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.candidates?.[0]) {
      console.error("Gemini API Error:", data);
      return NextResponse.json({ error: "Gemini API error" }, { status: 500 });
    }

    const text =
      data.candidates[0].content.parts[0].text || "No response generated.";
    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json(
      { error: "Failed to generate response. Please try again." },
      { status: 500 }
    );
  }
}
