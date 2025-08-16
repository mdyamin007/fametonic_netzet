import Image from "next/image";
import Hero_desktop from "@/assets/hero_desktop.png";
import Hero_mobile from "@/assets/hero_mobile.png";

export default function HeroImage() {
  return (
    <>
      <div className="hidden md:block absolute top-[126px] left-[673px] z-0">
        <Image
          src={Hero_desktop}
          alt="Influe mobile mockup"
          width={666}
          height={679}
        />
      </div>

      <div className="block md:hidden absolute top-[76px] left-[1px] z-0">
        <Image
          src={Hero_mobile}
          alt="Influe mobile mockup"
          width={390}
          height={426}
        />
      </div>
    </>
  );
}
