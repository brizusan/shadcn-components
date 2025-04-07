"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarrouselPage() {
  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">Carrousel Page</h1>
        <section>
          <Carousel
            className="w-full max-w-xs mx-auto"
            opts={{
              loop: true,
            }}
            autoplay={1500}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
    </>
  );
}
