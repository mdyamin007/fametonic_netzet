import Image from "next/image";
import Influe_mobile from "@/assets/Influe_mobile_mockup_3.png";

export default function HeroImage() {
  return (
    <div className="absolute top-[126px] left-[673px] z-0">
      <Image
        src={Influe_mobile}
        alt="Influe mobile mockup"
        width={666}
        height={679}
      />
    </div>
  );
}
