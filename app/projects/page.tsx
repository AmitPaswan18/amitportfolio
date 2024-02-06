import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { imageSources } from "@/assets/projects_link/projectImgLink";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col overflow-auto">
      <div className="h-[82vh] flex flex-col justify-center items-center">
        <div className="text-8xl font-semibold">projects</div>
        <div className="text-3xl pt-10">
          Some of my personal projects in Github
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {imageSources.map((src, index) => (
          <div key={index} className="w-[748px] m-4">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={src}
                alt={`Image ${index}`}
                height={500}
                width={500}
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
}
