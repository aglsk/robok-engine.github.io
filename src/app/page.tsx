import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Codeclip from "@/components/code";
import { Button } from "@/components/ui/button";
import { FileBox, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-transparent">
      <section className="grid gap-2">
        <Card className="w-full bg-gradient-to-b from-[#94b5fc] bg-transparent bg-opacity-40 min-h-screen">
          <CardHeader>
            <div className="flex items-center justify-center mt-32 w-full">
              <CardTitle className="flex items-center justify-center select-none">
                <h1 className="text-3xl my-2 sm:text-6xl font-bold">Robok Engine</h1>
              </CardTitle>
            </div>
            <CardDescription className="flex items-center justify-center w-full">
              <p className="flex items-center justify-center text-2xl text-foreground text-center select-none">
                Code and build mobile apps, with Robok Engine
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center w-full mb-32 gap-6">
              <a href="/versions">
                <Button>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-md">Download</span>
                    <FileBox />
                  </div>
                </Button>
              </a>

              <a href="https://github.com/Robok-Engine/Robok-Engine">
                <Button variant={"outline"}>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-md">Github</span>
                    <Github />
                  </div>
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}