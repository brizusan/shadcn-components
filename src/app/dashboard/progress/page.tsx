"use client";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });

      return () => clearInterval(interval);
    }, 100);
  }, []);
  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">Progress Page</h1>
        <section>
          <Progress
            value={progress}
            className="w-[60%] mx-auto"
            indicatorColor={cn({
              "bg-blue-500": progress > 80,
              "bg-green-500": progress <= 80,
              "bg-red-400": progress <= 40,
            })}
          />
        </section>
      </main>
    </>
  );
}
