import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const getData = async (time: number) => {
  await new Promise((r) => setTimeout(r, time * 1000));
};

export default async function SkeletonPage() {
  await getData(3);
  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">Skeleton Page</h1>

        <section className="grid  sm:grid-cols-3 gap-4 mx-auto ">
          <Card>
            <CardHeader>
              <Image
                src={"https://picsum.photos/id/1005/400/200"}
                alt="card"
                width={400}
                height={200}
              />
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nihil
                repellendus deserunt sit dicta molestias, placeat inventore
                mollitia expedita tenetur!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src={"https://picsum.photos/id/1002/400/200"}
                alt="card"
                width={400}
                height={200}
              />
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              architecto eius. Corporis sit animi omnis aliquam.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src={"https://picsum.photos/id/1000/400/200"}
                alt="card"
                width={400}
                height={200}
              />
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              sequi, sed blanditiis nemo, quos dignissimos provident dolor nam
              quia voluptas sit.
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex flex-col space-y-3 justify-center items-center">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
