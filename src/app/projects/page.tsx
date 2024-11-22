import { CardContent, CardHeader } from "@/components/ui/card";
import { Card } from "@nextui-org/react";

export default function ProjectsPage() {
  return (
    <Card>
      <CardHeader>
        <h1>Projects</h1>
      </CardHeader>
      <CardContent>
        <div>
          <ul>
            <li>Projeto 1</li>
            <li>Projeto 2</li>
            <li>Projeto 3</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )

}