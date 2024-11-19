"use client";

import React from 'react';
import { Code } from "@nextui-org/react";
import { Card } from "@/components/ui/card";
import Copyclip from "../copy";

export default function Codeclip() {
  const codeText = `
    @Composable fun FilledButtonExample(onClick: () -> Unit) {
      Button(onClick = { onClick() }) {
        Text("Filled")
      }
    }
  `;

  return (
    <Card className="p-4">
      <div className="flex items-center mx-auto w-full rounded-md font-medium bg-slate-200 justify-between">
        <p className="p-2 text-foreground text-center md:text-left">Copiar tutorial</p>
        <Copyclip codeText={codeText} />
      </div>

      <div className="flex flex-col gap-4">

        <div className="overflow-auto max-w-full rounded-md bg-gray-50 p-2">
          <Code size="sm" className="whitespace-pre-wrap break-words">
            {codeText}
          </Code>
        </div>
      </div>
    </Card>
  );
}
