import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">Buttons Page</h1>
        <section className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="destructive">destructive</Badge>
          <Badge variant="outline">outline</Badge>
          <Badge variant="secondary">secondary</Badge>
          <Badge variant="accent" textTransform={"capitalize"}>
            accent
          </Badge>
        </section>
      </main>
    </>
  );
}
