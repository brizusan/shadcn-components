"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });

  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">Dialog Page</h1>

        <section className="flex flex-wrap gap-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border mx-auto max-w-[250px]"
            disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
          />

          <Calendar
            mode="multiple"
            selected={multipleDate}
            onSelect={setMultipleDate}
            className="rounded-md border mx-auto max-w-[250px]"
          />

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border mx-auto max-w-[250px]"
          />
        </section>

        <section>
          <h2 className="text-lg">Informarcion</h2>
          <div className="border-b my-2" />
          <p>
            Fecha : <span>{smallDate}</span>
          </p>

          <p>
            Multiple :{" "}
            {multipleDate?.length === 0
              ? "Fechas no seleccionadas"
              : multipleDate?.length + " Fechas seleccionadas"}
          </p>
          <div>
            {multipleDate?.map((date, index) => (
              <p key={index}>
                {date.toLocaleDateString("es-ES", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
