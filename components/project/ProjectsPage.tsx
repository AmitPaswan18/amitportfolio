"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { imageSources } from "@/assets/projects_link/projectImgLink";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

import { useRef } from "react";

interface Props {
  emoji: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card({ emoji }: Props) {
  const background = `linear-gradient(306deg)`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}>
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <AspectRatio ratio={16 / 9}>
          <div>
            <Image
              src={emoji}
              alt={`Image ${emoji}`}
              height={500}
              width={500}
              className="rounded-md object-cover"
            />
          </div>
        </AspectRatio>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: " ",
    offset: ["end end", "end end"],
  });

  return (
    <div>
      {" "}
      <div className="h-[82vh] flex flex-col justify-center items-center">
        <div className="text-8xl font-semibold">projects</div>
        <div className="text-3xl pt-10">
          Some of my personal projects on GitHub
        </div>
      </div>
      <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="flex flex-col overflow-auto">
        <section>
          {" "}
          <div className="flex flex-wrap justify-center">
            {imageSources.map((src, index) => (
              <div key={index} className="flex ml-20 justify-center">
                <div className="w-[640px] m-4">
                  <AspectRatio ratio={16 / 9}>
                    <div>
                      <Image
                        src={src}
                        alt={`Image ${index}`}
                        height={500}
                        width={500}
                        className="rounded-md object-cover"
                      />
                    </div>
                  </AspectRatio>
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
      {imageSources.map((emoji) => (
        <Card emoji={emoji} key={emoji} />
      ))}
    </div>
  );
}
