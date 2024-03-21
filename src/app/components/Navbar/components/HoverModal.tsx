"use client";

import { useGlobalContext } from "../../../../State/global";

import Image from "next/image";

const HoverModal = () => {
  const {
    connectWallet,
    setConnectWallet,
    isHover,
    handleHoverModal,
    copied,
    handleCopy,
  } = useGlobalContext()!;

  return (
    <div className="relative inline-block xlm:hidden">
      <button
        className="flex items-center px-[15px] py-[12px] bg-gradient-to-r from-[#372C7D] to-[#0B0436] 
        rounded-lg text-lg gap-x-2 border-[1px] border-white text-white xlm:hidden"
        onClick={() => setConnectWallet(!connectWallet)}
        onMouseEnter={handleHoverModal}
      >
        <div className="flex items-center gap-x-2">
          <Image
            src="/metamask.png"
            width={200}
            height={200}
            alt="Picture of the author"
            className="w-[23px] h-[23px]"
          />
          {connectWallet === true ? "0xf......C6C8d" : "Connect Wallet"}
        </div>
      </button>
      {isHover && (
        <div
          className={`absolute left-0 mt-1.5 origin-top-right bg-main-2 rounded-lg p-[4px] h-auto
            shadow-lg w-full ring-1 ring-black ring-opacity-5 border-[1px] border-main-1
            ${connectWallet === false ? "hidden" : ""}`}
        >
          <div className="flex flex-col gap-y-[6px]">
            <div className="flex justify-between">
              <div className="flex gap-x-1 overflow-hidden">
                <h3 className="text-[#FFFFFF]/60 text-[12px]">Status:</h3>
                <h3 className="text-[#E53935] text-[12px]">Chain im</h3>
              </div>

              <button className="bg-[#FFFFFF]/20 px-[6px] py-[4px] rounded-lg">
                <Image
                  src="/Vector.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="w-[15px]"
                />
              </button>
            </div>
            <div className="w-[170px] h-[50px] bg-[#FFFFFF]/20 rounded-lg m-auto">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="p-[3px]">
                    <Image
                      src="/metamask.png"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                      className="w-[18px]"
                    />
                  </div>
                  <div className="flex items-center gap-x-2 p-[3px]">
                    <p className="text-main-1 text-[12px]">9,432</p>
                    <Image
                      src="/EVM.png"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                      className="w-[18px]"
                    />
                  </div>
                </div>
                <div className="flex justify-end items-center gap-x-2 p-[2px]">
                  <p className="text-main-1 text-[12px]">9,432</p>
                  <Image
                    src="/Ethereum.png"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className="w-[20px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-x-[4px]">
                <Image
                  src="/metamask.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="w-[18px]"
                />
                <p className="text-main-1 text-[12px]">0xfC6C8d</p>
              </div>
              <button onClick={handleCopy}>
                <Image
                  src="/copy.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className="w-[18px]"
                />
              </button>
            </div>
            {copied && <p className="text-main-1 text-xs">Text copied!</p>}
            {/* <button
              className="flex items-center m-auto bg-[#E53935] w-[120px] p-2 rounded-lg capitalize
                border-[1px] gap-x-1 border-white text-white mdm:w-[30vw]"
              // onMouseOut={() => setIsOpen(!isOpen)}
            >
              disconnect
              <Image
                src="/logout.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="w-[18px]"
              />
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverModal;
