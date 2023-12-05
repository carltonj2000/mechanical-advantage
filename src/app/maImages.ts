import { StaticImageData } from "next/image";
import complex5to1 from "../img/complex5to1.png";
import complex5to1from3to1 from "../img/complex5to1from3to1.png";
import countingTension3to1 from "../img/countingTension3to1.png";
import countingTension3to1piggyback from "../img/countingTension3to1piggy-back.png";
import countingTension5to1 from "../img/countingTension5to1.png";
import countingTension7to1 from "../img/countingTension7to1.png";
import frictionefficiency from "../img/friction-efficiency.png";
import frictionefficiency5n3to1 from "../img/friction-efficiency5n3to1.png";
import frictionefficiency5to1differences from "../img/friction-efficiency5to1differences.png";
import frictionefficiency5to1pullyPlacement from "../img/friction-efficiency5to1pullyPlacement.png";
import friction7p5mmrope from "../img/friction7p5mmrope.png";
import mechanicalAdvantageSystems from "../img/mechanicalAdvantageSystems.png";
import simple5to1 from "../img/simple5to1.png";
import simple5to1from3to1 from "../img/simple5to1from3to1.png";

export type ImageT = {
  src: StaticImageData;
  alt: string;
};
export type ImagesT = Array<ImageT>;

export const images: ImagesT = [
  { src: countingTension3to1, alt: "Tension 3-1" },
  { src: countingTension5to1, alt: "Tension 5-1" },
  { src: friction7p5mmrope, alt: "Friction 7.5mm" },
  { src: frictionefficiency, alt: "Friction" },
  { src: frictionefficiency5n3to1, alt: "Friction 5n3-1" },
  { src: countingTension7to1, alt: "Tension 7-1" },
];

export const images2: ImagesT = [
  {
    src: frictionefficiency5to1differences,
    alt: "Friction 5-1",
  },
  {
    src: frictionefficiency5to1pullyPlacement,
    alt: "Friction 5-1",
  },
];

export const images3: ImagesT = [
  { src: complex5to1from3to1, alt: "Complex 5-1 from 3-1" },
  { src: complex5to1, alt: "Complex 5-1" },
  { src: simple5to1from3to1, alt: "5-1 From 3-1" },
  { src: simple5to1, alt: "Simple 5-1" },
  { src: mechanicalAdvantageSystems, alt: "MA Systems" },
  {
    src: countingTension3to1piggyback,
    alt: "Tension 3-1 Piggyback",
  },
];
