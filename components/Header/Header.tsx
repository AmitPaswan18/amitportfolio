import { Button } from "@/components/ui/button";
import bgImage from "../../assets/blurry-bg.png";
import Image from "next/image";
import * as React from "react";
import { ModeToggle } from "@/components/home/ModeToggle";
import Link from "next/link";

export default async function Header() {
  return (
    <>
      <div className="flex w-full justify-between h-24">
        <div className="flex w-[50%] justify-center items-center gap-10 text-xl pt-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="flex h-24 justify-end pt-8 pr-32">
          <div className="flex">
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
