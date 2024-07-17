"use client";
import Image from "next/legacy/image";
import introAu from "@/public/introAu.png";
import * as S from "./styles";
import { useEffect } from "react";

const Intro: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x =
        e.pageX ||
        e.clientX +
          (document.documentElement.scrollLeft || document.body.scrollLeft);
      const y =
        e.pageY ||
        e.clientY +
          (document.documentElement.scrollTop || document.body.scrollTop);

      const overlay = document.querySelector(".overlay") as HTMLElement;
      if (overlay) {
        overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent, #f3e8d8)`;
      }
    };

    const overlay = document.querySelector(".overlay") as HTMLElement;
    if (overlay) {
      overlay.style.background = `radial-gradient(circle at center, transparent, rgba(213, 237, 232, 0.797))`;
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <S.HomeWrapper>
      <div className="overlay"></div>
      <Image src={introAu} alt="logo header" />
    </S.HomeWrapper>
  );
};

export default Intro;
