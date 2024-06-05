import React from "react";
import { Gear } from "../Icones/Gear";

export interface ConfigurationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const ConfigurationButton: React.FC<ConfigurationButtonProps> = ({
  ...props
}: ConfigurationButtonProps) => {
  return (
    <button {...props} className="mr-5 hover:scale-125 transition-all">
      <Gear />
    </button>
  );
};
