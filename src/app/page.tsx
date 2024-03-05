"use client";
import moon from "./assets/moon.png";
import land from "./assets/land.png";
import cat from "./assets/cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import { useRef } from "react";

interface IParallaxRef {
  scrollTo: (offset: number) => void;
}

export default function Home() {
  const ref = useRef<IParallaxRef | null>(null);
  return (
    <div>
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon.src})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land.src})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <Image src={cat.src} alt="cat-" width={500} height={700} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current?.scrollTo(0)}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current?.scrollTo(0)}
        >
          <h2>Oii oii</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
