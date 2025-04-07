"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function SonnerPage() {
  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">SonnerUI Page</h1>
        <section className="flex gap-6">
          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Show Toast Default
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast.success("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
                position: "top-right",
              })
            }
          >
            Show custom toast
          </Button>
        </section>
      </main>
    </>
  );
}
