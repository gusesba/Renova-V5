import Link from "next/link";

import { clientes } from "@/tempdata/clientes";

export default function Clientes() {
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-bold text-black dark:text-white">
          Data Tables
        </h2>

        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <a className="font-medium" href="index.html">
                Dashboard /
              </a>
            </li>
            <li className="font-medium text-primary">Data Tables</li>
          </ol>
        </nav>
      </div>
      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"></div>
      </div>
    </>
  );
}
