"use client";
import BrandLogo from "./icons/BrandLogo";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";

export default function Navbar() {
  return (
    <nav className="absolute top-[92px] left-[141px] md:left-0 md:top-[81px] w-[221px] md:w-full md:px-[211px] flex justify-between z-10">
      <span className="[&>svg]:h-[46px] [&>svg]:w-[107.78px] md:[&>svg]:h-[74px] md:[&>svg]:w-[174px]">
        <BrandLogo />
      </span>

      <button className="block md:hidden" aria-label="Open menu">
        <BurgerMenuIcon />
      </button>

      <ul className="hidden md:flex gap-10">
        <li className="font-figtree font-semibold text-lg text-[#A9A9A9]">
          About us
        </li>
        <li className="font-figtree font-semibold text-lg text-[#A9A9A9]">
          Contact
        </li>
      </ul>
    </nav>
  );
}
