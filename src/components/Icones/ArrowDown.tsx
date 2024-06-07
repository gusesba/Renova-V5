import React from "react";

interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowDown: React.FC<ArrowDownProps> = ({
  ...props
}: ArrowDownProps) => {
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
      <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill=""></path>
    </svg>
  );
};
