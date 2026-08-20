import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("VJKM Self-Finance College Web Portal - BSW & MSW Programs", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
