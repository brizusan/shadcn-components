import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon, Terminal } from "lucide-react";

export default function AlertPage() {
  return (
    <>
      <main className="space-y-4">
        <h1 className="text-2xl my-8">Alert Page</h1>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>

        <Alert variant={"destructive"}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>

        <Alert variant={"success"}>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </main>
    </>
  );
}
