"use client";

import Image from "next/image";
import DropDownHalf2 from "./DropDownHalf2";
import DropdownHalf from "./DropdownHalf";

const Chain = ({
  transpose,
  setTranspose,
  isOpen1,
  isOpen2,
  setIsOpen1,
  setIsOpen2,
  selectDropdown1,
  selectDropdown2,
  selected1,
  selected2,
  setSelected1,
  setSelected2,
}: {
  transpose: boolean;
  setTranspose: any;
  isOpen1: boolean;
  isOpen2: boolean;
  setIsOpen1: any;
  setIsOpen2: any;
  selectDropdown1: any;
  selectDropdown2: any;
  selected1: any;
  selected2: any;
  setSelected1: any;
  setSelected2: any;
}) => {
  return (
    <div className="relative flex flex-col gap-y-1">
      <h2 className="text-white">Chain:</h2>
      <div className="flex justify-between h-[25px]">
        <DropdownHalf
          transpose={transpose}
          isOpen1={isOpen1}
          setIsOpen1={setIsOpen1}
          selectDropdown1={selectDropdown1}
          selected1={selected1}
        />

        <button
          type="button"
          className={`absolute left-[48%] top-[60%]
           bg-main-2 text-white cursor-pointer
          mdm:top-[150%] mdm:left-[47%]
          ${isOpen1 == true ? "hidden" : "show"}`}
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

        <DropDownHalf2
          transpose={transpose}
          isOpen2={isOpen2}
          setIsOpen2={setIsOpen2}
          selectDropdown2={selectDropdown2}
          selected2={selected2}
        />
      </div>
    </div>
  );
};

export default Chain;
