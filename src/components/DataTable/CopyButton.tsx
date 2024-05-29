import React from "react";
import { Copy } from "../Icones/Copy";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  show: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  show,
  ...props
}: CopyButtonProps) => {
  return (
    <button
      className={
        show
          ? "bg-primary w-8 h-8 rounded flex items-center justify-center hover:bg-blue-600 ml-2 transition-all hover:scale-110"
          : "hidden"
      }
      {...props}
    >
      <Copy />
    </button>
  );
};
