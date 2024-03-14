"use client";

import { useGlobalContext } from "../context/global";

import Image from "next/image";
import DropDownHalf2 from "./DropDownHalf2";
import DropdownHalf from "./DropdownHalf";

const Chain = () => {
  const { transpose, setTranspose } = useGlobalContext()!;
  return (
    <div className="relative flex flex-col gap-y-1">
      <h2 className="text-white">Chain:</h2>
      <div className="flex justify-between h-[25px]">
        <DropdownHalf />

        <button
          type="button"
          className={`absolute left-[48%] top-[60%]
           bg-main-2 text-white cursor-pointer
          mdm:top-[150%] mdm:left-[47%]`}
          onClick={() => setTranspose(!transpose)}
        >
          <Image
            src="/swap_hori.png"
            width={100}
            height={100}
            alt="clear"
            className="w-[25px]"
          />
        </button>

        <DropDownHalf2 />
      </div>
    </div>
  );
};

export default Chain;
