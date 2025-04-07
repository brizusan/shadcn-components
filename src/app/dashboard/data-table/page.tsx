import { payments } from "@/data/payments";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  return payments;
}

export default async function DataTabblePage() {
  const data = await getData();
  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">Data Tabble Page</h1>
        <section>
          <DataTable columns={columns} data={data} />
        </section>
      </main>
    </>
  );
}
