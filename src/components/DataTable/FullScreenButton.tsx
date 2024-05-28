"use client";
import React, { useState } from "react";
import { FullScreen } from "../Icones/FullScreen";

export const FullScreenButton = () => {
  const toggleFullscreen = () => {
    const isFullscreen = document
      .querySelector(".tabela")
      ?.classList.contains("fullscreen");
    document.querySelector(".tabela")?.classList.toggle("fullscreen");
    const table = document.querySelector(".table-inside") as HTMLElement;
    if (isFullscreen) {
      document.removeEventListener("keydown", handleEscapeClicked);
      table.style.setProperty(
        "max-height",
        `${
          window.innerHeight -
          130 -
          (document.querySelector("table")?.offsetTop || 0)
        }px`
      );
    } else {
      document.addEventListener("keydown", handleEscapeClicked);
      const size = window.innerHeight - 180;
      table.style.setProperty("max-height", `${size}px`);
    }
  };

  const handleEscapeClicked = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      toggleFullscreen();
    }
  };

  return (
    <button
      className="ml-5 hover:scale-125 transition-all"
      onClick={toggleFullscreen}
    >
      <FullScreen />{" "}
    </button>
  );
};
