import React from "react";

interface ArrowUpProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowUp: React.FC<ArrowUpProps> = ({ ...props }: ArrowUpProps) => {
  return (
    <svg
      className="fill-current"
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 0L0 5H10L5 0Z" fill=""></path>
    </svg>
  );
};
