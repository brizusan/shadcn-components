"use client";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>;
export default function SliderPage() {
  const [value, setValue] = useState([0]);
  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">Slider Page</h1>
        <section>
          <Slider
            defaultValue={value}
            max={100}
            step={10}
            onValueChange={(value) => setValue(value)}
          />
          <p>Value: {value}</p>
        </section>
      </main>
    </>
  );
}
