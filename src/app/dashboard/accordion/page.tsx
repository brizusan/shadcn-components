import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Is it accesible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern",
  },
  {
    id: "item-2",
    question: "How do I get started?",
    answer: "You can start by reading the documentation.",
  },
  {
    id: "item-3",
    question: "Can I use it on mutiple projects?",
    answer: "Yes. It's licensed under MIT license",
  },
];

export default function AccordionPage() {
  return (
    <>
      <Accordion
        type="single" // multiple, single
        collapsible
        className="max-w-xl mx-auto border border-gray-200 rounded-md p-2 shadow"
      >
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
