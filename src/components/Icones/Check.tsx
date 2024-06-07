import React from "react";

interface CheckProps extends React.SVGProps<SVGSVGElement> {}

export const Check: React.FC<CheckProps> = ({ ...props }: CheckProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.4rem"
      width="1.4rem"
      className="fill-green-500"
      viewBox="0 0 448 512"
      {...props}
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
};
