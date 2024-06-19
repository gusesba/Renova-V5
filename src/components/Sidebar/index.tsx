"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowBack as ArrowBackIcon } from "../Icones/ArrowBack";
import { Client as ClientIcon } from "../Icones/Client";
import { Plus as PlusIcon } from "../Icones/Plus";
import { SidebarArrowUp as SidebarArrowUpIcon } from "../Icones/SidebarArrowUp";
import { Table as TableIcon } from "../Icones/Table";
import { Bag as BagIcon } from "../Icones/Bag";
import { Cart as CartIcon } from "../Icones/Cart";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { Cadeado } from "../Icones/Cadeado";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const trigger = useRef<any>(null);

  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const clientesDropdown = () => {
    return (
      <SidebarLinkGroup activeCondition={pathname.includes("clientes")}>
        {(handleClick, open) => {
          return (
            <>
              <Link
                href="#"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname.includes("clientes") && "bg-graydark dark:bg-meta-4"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                }}
              >
                <ClientIcon />
                Clientes
                <SidebarArrowUpIcon open={open} />
              </Link>
              {/* <!-- Dropdown Menu Start --> */}
              <div
                className={`translate transform overflow-hidden ${
                  !open && "hidden"
                }`}
              >
                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                  <li>
                    <Link
                      href="/clientes"
                      className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white ${
                        pathname === "/clientes" && "text-white"
                      }`}
                    >
                      Tabela
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/clientes/novo"
                      className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white ${
                        pathname === "/clientes/novo" && "text-white"
                      }`}
                    >
                      Novo Cliente
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Dropdown Menu End --> */}
            </>
          );
        }}
      </SidebarLinkGroup>
    );
  };

  const produtosDropdown = () => {
    return (
      <SidebarLinkGroup activeCondition={pathname.includes("produtos")}>
        {(handleClick, open) => {
          return (
            <>
              <Link
                href="#"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname.includes("produtos") && "bg-graydark dark:bg-meta-4"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                }}
              >
                <BagIcon className="fill-current" />
                Produtos
                <SidebarArrowUpIcon open={open} />
              </Link>
              {/* <!-- Dropdown Menu Start --> */}
              <div
                className={`translate transform overflow-hidden ${
                  !open && "hidden"
                }`}
              >
                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                  <li>
                    <Link
                      href="/produtos"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        pathname === "/produtos" && "bg-graydark dark:bg-meta-4"
                      }`}
                    >
                      Todos os Produtos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/produtos/estoque"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        pathname === "/produtos/estoque" &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                    >
                      Estoque
                    </Link>
                  </li>
                  {novoProduto()}
                </ul>
              </div>
              {/* <!-- Dropdown Menu End --> */}
            </>
          );
        }}
      </SidebarLinkGroup>
    );
  };

  const saidasDropdown = () => {
    return (
      <SidebarLinkGroup activeCondition={pathname.includes("saidas")}>
        {(handleClick, open) => {
          return (
            <>
              <Link
                href="#"
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname.includes("saidas") && "bg-graydark dark:bg-meta-4"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                }}
              >
                <CartIcon className="fill-current" />
                Saídas
                <SidebarArrowUpIcon open={open} />
              </Link>
              {/* <!-- Dropdown Menu Start --> */}
              <div
                className={`translate transform overflow-hidden ${
                  !open && "hidden"
                }`}
              >
                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                  {saidas()}
                  {saidasGrupo()}
                  {novaSaida()}
                </ul>
              </div>
              {/* <!-- Dropdown Menu End --> */}
            </>
          );
        }}
      </SidebarLinkGroup>
    );
  };

  const saidas = () => {
    return (
      <li>
        <Link
          href="/saidas"
          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
            pathname === "/saidas" && "bg-graydark dark:bg-meta-4"
          }`}
        >
          Todas as Saídas
        </Link>
      </li>
    );
  };

  const saidasGrupo = () => {
    return (
      <li>
        <Link
          href="/saidas/grupo"
          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
            pathname.includes("saidas/grupo") && "bg-graydark dark:bg-meta-4"
          }`}
        >
          Grupo de Saídas
        </Link>
      </li>
    );
  };

  const novaSaida = () => {
    return (
      <li>
        <Link
          href="/saidas/novo"
          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
            pathname === "/saidas/novo" && "bg-graydark dark:bg-meta-4"
          }`}
        >
          Nova Saída
        </Link>
      </li>
    );
  };

  const novoProduto = () => {
    console.log(pathname);
    return (
      <li>
        <Link
          href="/produtos/novo"
          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
            pathname === "/produtos/novo" && "bg-graydark dark:bg-meta-4"
          }`}
        >
          Novo Produto
        </Link>
      </li>
    );
  };

  const novoUsuario = () => {
    return (
      <li>
        <Link
          href="/signup"
          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
            pathname.includes("signup") && "bg-graydark dark:bg-meta-4"
          }`}
        >
          <Cadeado />
          Novo Usuário
        </Link>
      </li>
    );
  };

  // expand dropdown
  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  // close on click ouside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/vercel.svg"}
            alt="Logo"
            priority
          />
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <ArrowBackIcon />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {clientesDropdown()}
              {produtosDropdown()}

              {saidasDropdown()}
            </ul>

            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              SEGURANÇA
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">{novoUsuario()}</ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
