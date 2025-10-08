import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const username = formData.get("username");
  const email = formData.get("email");
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "File missing" }, { status: 400 });
  }

  // Example: Save file to storage or log details
  console.log("New project submission:", username, email, file.name);

  return NextResponse.json({ message: "Project received successfully" });
}
