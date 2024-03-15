"use client";

import { useGlobalContext } from "../context/Global";

import Image from "next/image";
import HoverModal from "./HoverModal";

const Navbar = () => {
  const { isOpen, setIsOpen } = useGlobalContext()!;
  return (
    <nav
      className="flex justify-between p-2 items-center 
    mdm:px-[3vw]"
      onMouseOut={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-x-4">
        <Image
          src="/LogoEvermoon_Primary.png"
          width={300}
          height={300}
          alt=""
          className="w-[120px] xlm:hidden"
        />
        <h2
          className="capitalize text-xl text-white
        xlm:hidden"
        >
          bridge
        </h2>
        <Image
          src="/Menu.png"
          width={300}
          height={300}
          alt="Menu"
          className="w-[32px] xl:hidden"
        />
      </div>

      <div className="flex items-center xl:hidden">
        <Image
          src="/Evermoon text logo.png"
          width={300}
          height={300}
          alt=""
          className="w-[150px]"
        />
      </div>
      <HoverModal />
    </nav>
  );
};

export default Navbar;
