import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Import from lib

// ✅ Correct App Router pattern (no default export)
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
