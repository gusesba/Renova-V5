"use client";
import React, { useState } from "react";
import { FullScreen } from "../Icones/FullScreen";

export const FullScreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const fullscreen = () => {
    const toggleFullscreen = () => {
      document.querySelector(".tabela")?.classList.toggle("fullscreen");
      const table = document.querySelector(".table-inside") as HTMLElement;
      if (isFullscreen) {
        table.style.setProperty(
          "max-height",
          `${
            window.innerHeight -
            130 -
            (document.querySelector("table")?.offsetTop || 0)
          }px`
        );
        setIsFullscreen(false);
      } else {
        const size = window.innerHeight - 180;
        table.style.setProperty("max-height", `${size}px`);
        setIsFullscreen(true);
      }
    };
    toggleFullscreen();
  };

  return (
    <button
      className="ml-5 hover:scale-125 transition-all"
      onClick={fullscreen}
    >
      <FullScreen />{" "}
    </button>
  );
};
