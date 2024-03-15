"use client";

import { useGlobalContext } from "../context/Global";

import Image from "next/image";

const DropdownHalf = () => {
  const { transpose, isOpen1, setIsOpen1, selectDropdown1, selected1 } =
    useGlobalContext()!;
  return (
    <div className="inline-block" onClick={() => setIsOpen1(!isOpen1)}>
      <button
        type="button"
        className={`absolute 
        ${
          transpose == true
            ? "translate-x-[0%] right-[0%] "
            : "translate-x-[0%] left-[0%] "
        } 
        flex justify-between items-center p-1 font-semibold gap-x-2 
    bg-main-2  rounded-lg text-white border-2 border-main-1
    focus:outline-none w-[200px] transition-all duration-200
    mdm:w-full mdm:border-[1px]`}
      >
        {selected1 === 0 && (
          <>
            <div className="flex items-center gap-x-1">
              <Image
                src="/bnb-chain.png"
                width={300}
                height={300}
                alt="Picture of the author"
                className="w-[25px] mdm:w-[4.5vw]"
              />
              BNB Chain
            </div>
            <div>
              <Image
                src="/Arrow_down.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="w-[20px] mdm:w-[4.5vw]"
              />
            </div>
          </>
        )}
        {selected1 === 1 && (
          <>
            <div className="flex items-center gap-x-1">
              <Image
                src="/immutablex.png"
                width={300}
                height={300}
                alt="Picture of the author"
                className="w-[25px] mdm:w-[4.5vw]"
              />
              ImmutableX
            </div>
            <div>
              <Image
                src="/Arrow_down.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="w-[20px] mdm:w-[4.5vw]"
              />
            </div>
          </>
        )}
      </button>
      {isOpen1 && (
        <div
          className="absolute left-[0%] mt-10 origin-top-right bg-main-2  rounded-lg 
          shadow-lg w-[200px] ring-1 ring-black ring-opacity-5  border-2 border-main-1
          mdm:w-full smm:mt-[37px] z-30"
        >
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <li onClick={() => selectDropdown1(0)}>
              <p
                className="flex items-center p-2 text-sm text-white 
  font-semibold hover:bg-[#FFFFFF33] hover:text-main-1 cursor-pointer
  gap-x-1 mdm:p-[1vw]"
              >
                <Image
                  src="/bnb-chain.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                  className="w-[25px] smm:w-[4.5vw]"
                />
                BNB Chain
              </p>
            </li>

            <li onClick={() => selectDropdown1(1)}>
              <p
                className="flex items-center p-2 text-sm text-white 
        hover:bg-[#FFFFFF33] hover:text-main-1 
        font-semibold cursor-pointer gap-x-1 mdm:p-[1vw]"
              >
                <Image
                  src="/immutablex.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                  className="w-[25px] smm:w-[4.5vw]"
                />
                ImmutableX
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownHalf;
