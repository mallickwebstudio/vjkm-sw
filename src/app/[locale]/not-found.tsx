"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
export default function NotFound() {
  const router = useRouter();

  return (
    <section className="relative bg-background min-h-screen flex justify-center items-center">
      <div className="relative mx-auto container px-6 py-12 md:p-16 lg:py-20">
        <header className="mx-auto max-w-2xl flex flex-col justify-center items-center text-center">
          <div>
            <h1 className="text-9xl font-bold md:text-[12rem]">404</h1>
            <h2 className="text-2xl font-bold">Oops!</h2>
            <p className="mt-3 md:mt-4 max-w-sm mx-auto text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              className="cursor-pointer"
              onClick={() => router.back()}
            >
              Go Back
            </Button>

            <Button
              variant="secondary"
              className="cursor-pointer"
              onClick={() => router.push("/")}
            >
              Go to Homepage
            </Button>
          </div>
        </header>
      </div>
    </section>
  );
}