"use client";

import Image from "next/image";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Chain from "./Chain";
import Input from "./Input";
import Calculator from "./Calculator";

const Form = () => {
  const [transpose, setTranspose] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selected, SetSelected] = useState(0);
  const [selected1, setSelected1] = useState(0);
  const [selected2, SetSelected2] = useState(1);
  const [price, setPrice] = useState("");
  const [multiplyPrice, setMultiplyPrice] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPrice(inputValue);
    const multipliedPrice = parseFloat(inputValue) * 2;
    setMultiplyPrice(isNaN(multipliedPrice) ? 0 : multipliedPrice);
  };

  const selectDropdown = (a: number) => {
    SetSelected(a);
    SetIsOpen(isOpen);
  };

  const selectDropdown1 = (a: number) => {
    setSelected1(a);
    setIsOpen1(isOpen);
  };

  const selectDropdown2 = (a: number) => {
    SetSelected2(a);
    setIsOpen2(isOpen);
  };

  const clearAllState = () => {
    setTranspose(false);
    SetIsOpen(false);
    setIsOpen1(false);
    setIsOpen2(false);
    SetSelected(0);
    setSelected1(0);
    SetSelected2(1);
    setPrice("");
    setMultiplyPrice(null);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div
        className={` w-[500px] shadow-xl h-[550px]
  py-[24px] px-[20px] rounded-xl bg-main-2 border-2 border-main-1
  mdm:w-[90vw] mdm:p-[2vw] xlm:h-auto smm:border-none`}
      >
        <div className="h-full flex flex-col gap-y-4 mdm:gap-y-[3vw]">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-xl text-main-1 uppercase">bridge</p>
            </div>
            <button
              className="flex gap-x-2 cursor-pointer"
              onClick={clearAllState}
            >
              <Image
                src="/clear.png"
                width={100}
                height={100}
                alt="clear"
                className="w-[25px]"
              />
              <p className="font-bold text-lg text-main-3">Clear</p>
            </button>
          </div>

          <div className="flex flex-col gap-y-1">
            <h2 className="text-white">Token:</h2>
            <Dropdown
              isOpen={isOpen}
              setIsOpen={SetIsOpen}
              selected={selected}
              setSelected={SetSelected}
              selectDropdown={selectDropdown}
            />
          </div>

          <Chain
            transpose={transpose}
            setTranspose={setTranspose}
            isOpen1={isOpen1}
            isOpen2={isOpen2}
            setIsOpen1={setIsOpen1}
            setIsOpen2={setIsOpen2}
            selectDropdown1={selectDropdown1}
            selectDropdown2={selectDropdown2}
            selected1={selected1}
            selected2={selected2}
            setSelected1={setSelected1}
            setSelected2={SetSelected2}
          />

          <Input
            price={price}
            multiplyPrice={multiplyPrice}
            handleInputChange={handleInputChange}
          />

          <Calculator />

          <div className={`flex justify-center`}>
            <button
              className="bg-red-500 hover:bg-red-700 h-[50px]
        w-[440px] text-xl font-bold text-white shadow-lg
        rounded-full border-b-[5px] border-r-[3px] border-red-700/55"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
