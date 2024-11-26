"use client"

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileBox, Rocket } from "lucide-react";
import { db } from "../../../firebaseConfig";
import { Button } from "@/components/ui/button";

export default function Versions() {
  const [versions, setVersions] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        const versionsCollectionRef = collection(db, "versions");
        const versionsSnapshot = await getDocs(versionsCollectionRef);
  
        const versionsData = versionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVersions(versionsData);
      } catch (error) {
        console.error("Erro ao buscar dados das versões:", error);
      } finally {
        setIsLoading(false); // Carregamento concluído
      }
    };
  
    fetchVersions();
  }, []);
  

  return (
    <div>
      <Card className="m-4 flex flex-col justify-center items-center">
        <CardHeader>
          <h1 className="text-4xl mt-10 font-bold"> Download Robok</h1>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-2 justify-center content-center items-center">
            <CardTitle>
              <h3 className="font-semibold mb-4 text-2xl">Latest versions</h3>
            </CardTitle>
            <div className="flex gap-6 justify-center mb-10 items-center">
              <a href="#">
                <Button>
                  <div className="flex items-center p-2 justify-center gap-2">
                    <span className="text-xl">Stable</span>
                    <FileBox />
                  </div>
                </Button>
              </a>
              <a href="#">
                <Button variant={"outline"}>
                  <div className="flex items-center p-2 justify-center gap-2">
                    <span className="text-xl">Latest</span>
                    <Rocket />
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex flex-col justify-center items-center m-4">
        <CardHeader>
          <h1 className="text-xl text-center font-bold">Versões Disponíveis</h1>
          <p>Lista de versões disponíveis para download.</p>
        </CardHeader>

        <CardContent className="flex w-full">
          <Table className="flex w-full flex-col items-center">
            <TableCaption>Versões disponíveis.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Versão</TableHead>
                <TableHead>Desenvolvedor</TableHead>
                <TableHead>Download</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {versions.length > 0 ? (
                versions.map((version) => (
                  <TableRow key={version.id}>
                    <TableCell className="font-medium">{version.version}</TableCell>
                    <TableCell>{version.build}</TableCell>

                    <TableCell>
                      <a
                        href={version.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        <Download className="inline w-4 h-4 mr-1" /> Click
                      </a>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    Carregando dados...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
