import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  const data = Array.from({ length: 3 });
  return (
    <>
      <Skeleton className="h-4 w-[250px] " />
      {
        <div className="grid grid-cols-3 gap-4 mx-auto mt-8 ">
          {data.map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="w-full h-[180px] rounded-xl" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-[250px]" />
              </CardContent>
            </Card>
          ))}
        </div>
      }
    </>
  );
}
