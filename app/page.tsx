import Image from "next/image";
import BubbleCursor from "./components/bubble-cursor";
import { GradientText } from "./components/gradient-text";

export default function Home() {
  return (
    <div className="App relative">
      <BubbleCursor />
      <div className="w-full absolute h-screen  object-cover bg-[url('/images/banner.jpg')] bg-cover bg-center" />
      <div className="w-full h-screen relative flex items-center justify-center">
        <div className="text-center flex flex-col items-center absolute">
          <GradientText className="text-[10rem]">Seaside</GradientText>
          <GradientText className="text-[10rem]">Explorers</GradientText>
        </div>
        <Image
          src="/images/scuba-diver.png"
          alt="Seaside Explorers"
          width={1920}
          height={1080}
          priority
          className="w-full top-0 z-50 asbolute h-full object-cover"
        />
      </div>
      {/* <div className="w-full h-screen  object-cover relative bg-gradient-radial from-[#013058] to-[#000314]">
        <Image
          src="/images/scuba-diver.png"
          alt="Seaside Explorers"
          width={1920}
          height={1080}
          priority
          className="mix-blend-overlay w-full top-0 z-50 asbolute h-full object-cover"
        />
        <Image
          src="/images/banner.jpg"
          alt="Seaside Explorers"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
      </div> */}
    </div>
  );
}
