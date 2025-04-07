import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";
import Link from "next/link";

export default function ButtonPage() {
  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">Buttons Page</h1>
        <section className="flex flex-wrap gap-2">
          <Button>Button</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button disabled> Disabled </Button>
          <Button size={"sm"}>Button Small</Button>
          <Button size={"lg"}>Button Grande</Button>
          <Button asChild variant="link" className="lowercase">
            <Link href={"/dashboard/alert"}>Go Alert</Link>
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight />
          </Button>
          <Button disabled>
            <Loader2 className="animate-spin" />
            Please wait
          </Button>
          <Button>
            <Mail /> Login with Email
          </Button>
        </section>
      </main>
    </>
  );
}
