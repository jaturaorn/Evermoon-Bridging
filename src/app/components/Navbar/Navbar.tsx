"use client";

import { useGlobalContext } from "../../../State/global";

import Image from "next/image";

import HoverModal from "./components/HoverModal";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between p-2 items-center 
    mdm:px-[3vw]"
    >
      <div className="flex items-center gap-x-4">
        <Image
          src="/LogoEvermoon_Primary.png"
          width={300}
          height={300}
          alt=""
          className="w-[120px] xlm:hidden"
        />

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

      <div className="flex items-center xl:hidden">
        <Image
          src="/login.png"
          width={200}
          height={200}
          alt=""
          className="w-[32px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
