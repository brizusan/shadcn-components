"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export default function ShetMenuPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">ShetMenu Page</h1>
        <section>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" onClick={() => setOpen(true)}>
                Open
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </section>

        <div className="grid grid-cols-2 gap-2">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" onClick={() => setOpen(true)}>
                  {side}
                </Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <div className="max-w-xl mx-auto w-11/12">
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4 ">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </main>
    </>
  );
}
