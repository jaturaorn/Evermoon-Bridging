"use client";

import Image from "next/image";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Chain from "./Chain";
import Input from "./Input";
import Calculator from "./Calculator";
import Modal from "./Modal";
import { useGlobalContext } from "../context/global";

const Form = () => {
  const { showModal, setShowModal, clearAllState } = useGlobalContext()!;

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
            <Dropdown />
          </div>

          <Chain />

          <Input />

          <Calculator />

          <div className={`flex justify-center`}>
            <button
              className="bg-red-500 hover:bg-red-700 h-[50px]
        w-[440px] text-xl font-bold text-white shadow-lg
        rounded-full border-b-[5px] border-r-[3px] border-red-700/55"
              onClick={() => setShowModal(!showModal)}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
      {showModal && <Modal />}
    </main>
  );
};

export default Form;
