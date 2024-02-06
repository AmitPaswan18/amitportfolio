import { Button } from "@/components/ui/button";
import bgImage from "../../assets/blurry-bg.png";
import Image from "next/image";
import * as React from "react";
import { ModeToggle } from "@/components/home/ModeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function HomePage() {
  return (
    <>
      <div>
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={bgImage}
              width={500}
              height={500}
              alt="Picture of the Background"
            />
          </AspectRatio>
        </div>
      </div>
    </>
  );
}
