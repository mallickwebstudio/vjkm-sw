"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LayoutSecure({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  if (process.env.NEXT_PUBLIC_CURRENT_ENV === "development") {
    return <>{children}</>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (password === process.env.NEXT_PUBLIC_INVOICE_PASSWORD) {
    if (password === "1234") {
      setAuthorized(true);
    } else {
      router.push("/");
    }
  };

  if (authorized) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-lg border p-6"
      >
        <h1 className="text-xl font-semibold">Protected Page</h1>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded border px-3 py-2"
          autoFocus
        />

        <button
          type="submit"
          className="w-full rounded bg-black py-2 text-white"
        >
          Continue
        </button>
      </form>
    </div>
  );
}