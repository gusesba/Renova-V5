"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>
      </body>
    </html>
  );
}
