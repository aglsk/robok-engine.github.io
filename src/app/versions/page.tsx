"use client";

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
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    };

    fetchVersions();
  }, []);

  return (
    <div className="p-4">
      {/* Card de download principal */}
      <Card className="flex flex-col justify-center items-center mb-8 shadow-lg border">
        <CardHeader>
          <h1 className="text-4xl mt-10 font-bold text-center">Download Robok</h1>
          <p className="mt-2 text-center text-gray-600">
            Faça o download das versões mais recentes do Robok Engine.
          </p>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-4 justify-center items-center mt-6">
            <a href="#" aria-label="Download versão estável">
              <Button>
                <div className="flex items-center p-2 justify-center gap-2">
                  <span className="text-xl">Stable</span>
                  <FileBox />
                </div>
              </Button>
            </a>
            <a href="#" aria-label="Download versão mais recente">
              <Button variant="outline">
                <div className="flex items-center p-2 justify-center gap-2">
                  <span className="text-xl">Latest</span>
                  <Rocket />
                </div>
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Card com a tabela de versões */}
      <Card className="flex flex-col justify-center items-center shadow-lg border">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold">Versões Disponíveis</h1>
          <p className="text-gray-600">Lista de versões disponíveis para download.</p>
        </CardHeader>

        <CardContent className="w-full">
          <Table className="w-full text-sm text-left text-gray-700 mt-4">
            <TableCaption className="text-gray-500">Versões disponíveis para download.</TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Versão</TableHead>
                <TableHead>Desenvolvedor</TableHead>
                <TableHead>Download</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4">
                    Carregando dados...
                  </TableCell>
                </TableRow>
              ) : versions.length > 0 ? (
                versions.map((version) => (
                  <TableRow key={version.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{version.version}</TableCell>
                    <TableCell>{version.build}</TableCell>
                    <TableCell>
                      <a
                        href={version.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                        aria-label={`Download versão ${version.version}`}
                      >
                        <Download className="inline w-4 h-4 mr-1" /> Click
                      </a>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4">
                    Nenhuma versão disponível no momento.
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
