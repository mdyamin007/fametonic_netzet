import BrandLogo from "./icons/BrandLogo";

export default function Navbar() {
  return (
    <nav className="absolute top-[81px] w-full px-[211px] flex justify-between">
      <BrandLogo />

      <ul className="flex gap-10">
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
