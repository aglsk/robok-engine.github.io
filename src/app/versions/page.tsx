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
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Download, FileBox, Rocket } from "lucide-react";
import { db } from "../../../firebaseConfig";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";

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
        console.error("Error fetching version data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVersions();
  }, []);

  return (
    <div className="p-4">
      {/* Card for main download options */}
      <Card className="flex flex-col justify-center items-center mb-8 shadow-lg border">
        <CardHeader>
          <h1 className="text-4xl mt-10 font-bold text-center">Download Robok</h1>
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

      {/* Card with version table */}
      <Card className="flex flex-col justify-center items-center shadow-lg border">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold">Available Versions</h1>
          <p>List of available versions for download.</p>
        </CardHeader>

        <CardContent className="w-full">
          <Table className="w-full text-sm text-left text-gray-700 mt-4">
            <TableCaption>Available versions for download.</TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Version</TableHead>
                <TableHead>Developer</TableHead>
                <TableHead>Download</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4">
                    Loading data...
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
                        aria-label={`Download version ${version.version}`}
                      >
                        <Download className="inline w-4 h-4 mr-1" /> Click
                      </a>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4">
                    No versions available at the moment.
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
