"use client";
import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";

import Image from "next/image";
import DropdownUser from "./DropdownUser";
import { Search as SearchIcon } from "../Icones/Search";
import { Table } from "../Icones/Table";
import { useEffect, useState } from "react";
import { Plus } from "../Icones/Plus";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const searchItems = [
    {
      name: "Tabela Clientes",
      icon: <Table height={24} width={24} className="fill-primary" />,
      link: "/clientes",
    },
    {
      name: "Novo Clientes",
      icon: <Plus height={24} width={24} className="fill-primary" />,
      link: "/clientes/novo",
    },
    {
      name: "Tabela Estoque",
      icon: <Table height={24} width={24} className="fill-primary" />,
      link: "/produtos",
    },
    {
      name: "Tabela Saídas",
      icon: <Table height={24} width={24} className="fill-primary" />,
      link: "/saidas",
    },
    {
      name: "Tabela Grupo Saídas",
      icon: <Table height={24} width={24} className="fill-primary" />,
      link: "/saidas/grupo",
    },
  ];

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (document.activeElement?.tagName === "INPUT") return;
      if (e.key === "/") {
        e.preventDefault();
        (document.querySelector("#search-input") as HTMLInputElement).focus();
      }
    });
  }, []);

  const dropDownSearch = () => {
    return (
      <div
        id="drop-search"
        className="-left-2 top-[52.3px] rounded-b-lg bg-slate-50 dark:bg-boxdark shadow-2xl w-80 h-60 hidden overflow-auto border-t border-primary/20"
      >
        {searchItems.map((item, index) => {
          const valoresPesquisa = searchValue
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .split(" ");
          const nomeItem = item.name
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          const itemEncontrado = valoresPesquisa.every((valor) =>
            nomeItem.includes(valor)
          );
          if (!itemEncontrado) return null;
          return (
            <Link href={item.link} key={index}>
              <div
                onClick={() => setSearchValue("")}
                className="hover:bg-primary/10 hover:cursor-pointer flex items-center px-10 h-15"
              >
                {item.icon}
                <h1 className="font-medium text-l ml-2 ">{item.name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image width={32} height={32} src={"/vercel-icon.svg"} alt="Logo" />
          </Link>
        </div>

        <div className="hidden sm:block">
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </button>
            <div>
              <input
                id={"search-input"}
                value={searchValue}
                type="text"
                placeholder="Pressione / para pesquisar..."
                className="w-full bg-transparent pl-9 pr-4 font-normal focus:outline-none xl:w-125"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  document
                    .getElementById("drop-search")
                    ?.classList.remove("hidden");
                  document
                    .getElementById("drop-search")
                    ?.classList.add("absolute");
                  if (e.target.value === "") {
                    document
                      .getElementById("drop-search")
                      ?.classList.add("hidden");
                    document
                      .getElementById("drop-search")
                      ?.classList.remove("absolute");
                  }
                }}
                onFocus={(e) => {
                  if (searchValue !== "") {
                    document
                      .getElementById("drop-search")
                      ?.classList.remove("hidden");
                    document
                      .getElementById("drop-search")
                      ?.classList.add("absolute");
                  }
                }}
                onBlur={(e) => {
                  setTimeout(() => {
                    document
                      .getElementById("drop-search")
                      ?.classList.add("hidden");
                    document
                      .getElementById("drop-search")
                      ?.classList.remove("absolute");
                  }, 100);
                }}
              />
              {dropDownSearch()}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
