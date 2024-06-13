import React from "react";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Panel: React.FC<PanelProps> = ({ ...props }: PanelProps) => {
  return (
    <div
      className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full h-full"
      {...props}
    >
      {props.children}
    </div>
  );
};
