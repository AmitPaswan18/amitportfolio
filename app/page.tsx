import { Button } from "@/components/ui/button"
import bgImage from  "../assets/blurry-bg.png"
import Image from 'next/image'  
import * as React from "react"
import { ModeToggle } from "@/components/home/ModeToggle"
import { useTheme } from "next-themes"


export default  async function Page() {
return (
  <div className="flex flex-col">
    <div><ModeToggle/></div>
   <Image
      src={bgImage}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  </div>
  );
}
