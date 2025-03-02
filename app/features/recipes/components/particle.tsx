import { useState } from "react";
import { useEffect } from "react";
import { MorphingText } from "~/common/components/magicui/morphing-text";
import { Particles } from "~/common/components/magicui/particles";
import { useTheme } from "~/hooks/use-theme";

const texts = ["Hello", "World"];
export default function Particle() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <div className="relative flex h-[300px] overflow-hidden w-full items-center justify-center">
      <MorphingText
        className="pointer-events-none text-8xl font-semibold leading-none"
        texts={texts}
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={100}
        color={color}
        refresh={color !== "#000000"}
      />
    </div>
  );
}
