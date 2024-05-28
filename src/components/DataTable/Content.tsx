"use client";

import { useEffect, useState } from "react";

interface ContentProps {
  children?: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }: ContentProps) => {
  const [size, setSize] = useState<number>(0);
  useEffect(() => {
    const updateSize = () => {
      setSize(
        window.innerHeight -
          130 -
          (document.querySelector("table")?.offsetTop || 0)
      );
    };
    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div
        className={`datatable-bottom border-t-gray-1 dark:border-t-graydark border-t-[1px] flex table-inside overflow-auto`}
        style={{ maxHeight: `${size}px` }}
      >
        <table className="w-full ">{children}</table>
      </div>
    </>
  );
};
