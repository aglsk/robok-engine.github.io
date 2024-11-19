import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyclipProps {
  codeText: string;
}

const Copyclip: React.FC<CopyclipProps> = ({ codeText }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <button onClick={handleCopy} className="flex items-center text-foreground p-2 rounded">
      {isCopied ? (
        <>
          <Check className="mr-2" /> 
        </>
      ) : (
        <>
          <Copy className="mr-2" />
        </>
      )}
    </button>
  );
};

export default Copyclip;
