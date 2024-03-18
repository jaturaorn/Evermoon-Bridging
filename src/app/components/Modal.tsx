import { useGlobalContext } from "../context/Global";

import Image from "next/image";

const Modal = () => {
  const { selected, selected1, selected2, setShowModal, price, multiplyPrice } =
    useGlobalContext()!;
  return (
    <div
      className={`flex justify-content items-center bg-black/40 backdrop-blur-xl  
       fixed inset-0 smm:bottom-0 z-50 outline-none focus:outline-none   
      transition-opacity duration-300 ease-in-out`}
    >
      <div
        className={`m-auto max-w-[1120px] w-[800px] h-[600px] md:w-[600px] 
        md:h-[500px] smm:max-w-[90vw] smm:h-[130vw]`}
      >
        <div
          className="w-full h-full  lg:w-auto p-5 smm:p-[2vw]  align-middle transition-all 
        transform bg-main-2 border-[1px] border-main-1 shadow-xl rounded-2xl "
        >
          <div className="flex flex-col gap-y-[14px]">
            <div className="m-auto">
              <h2 className="text-xl text-main-1 uppercase mdm:text-base">
                send confirm
              </h2>
            </div>
            <div className="m-auto capitalize">
              <p className="text-white mdm:text-sm">
                please review your transition
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-[14px] mt-[14px]">
            <div className="m-auto">
              {selected === 0 && (
                <>
                  <div className="m-auto">
                    <Image
                      src="/EVM.png"
                      width={100}
                      height={100}
                      alt="EVM"
                      className="w-[52px] mdm:w-[7vw]"
                    />
                  </div>
                </>
              )}
              {selected === 1 && (
                <>
                  <div className="m-auto">
                    <Image
                      src="/ES.png"
                      width={300}
                      height={300}
                      alt="Picture of the author"
                      className="w-[52px] mdm:w-[10vw]"
                    />
                  </div>
                </>
              )}
              {selected === 2 && (
                <>
                  <div className="m-auto">
                    <Image
                      src="/Ethereum.png"
                      width={300}
                      height={300}
                      alt="Picture of the author"
                      className="w-[52px] mdm:w-[10vw]"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col gap-y-[14px]">
              <p className="m-auto text-white mdm:text-sm">Send {price} EVM</p>
              <p className="text-[#00DDFF] m-auto mdm:text-sm">
                ~${multiplyPrice}
              </p>
            </div>
            <div className="flex items-center gap-x-[10px] m-auto mdm:flex-col smm:w-full mdm:gap-y-[2vw]">
              <div
                className="flex items-center w-[180px] p-1 bg-[#FFFFFF]/20 rounded-lg
              border-2 border-[#FFFFFF]/60 hover:bg-[#FFFFFF]/40 smm:w-full"
              >
                {selected1 === 0 && (
                  <>
                    <div className="flex items-center gap-x-2 text-white">
                      <Image
                        src="/bnb-chain.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                        className="w-[25px] mdm:w-[4.5vw]"
                      />
                      BNB Chain
                    </div>
                  </>
                )}
                {selected1 === 1 && (
                  <>
                    <div className="flex items-center gap-x-2 text-white">
                      <Image
                        src="/immutable.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                        className="w-[22px] mdm:w-[4.5vw]"
                      />
                      Immutable
                    </div>
                  </>
                )}
              </div>
              <div className="w-[100px] h-[30px] ">
                <Image
                  src="/Arrow_right.png"
                  width={300}
                  height={300}
                  alt=""
                  className="w-[30px] mdm:w-[7vw] m-auto smm:rotate-90"
                />
              </div>
              <div
                className="flex items-center w-[180px] p-1 bg-[#FFFFFF]/20 
                rounded-lg border-2 border-[#FFFFFF]/60 smm:w-full hover:bg-[#FFFFFF]/40"
              >
                {selected2 === 0 && (
                  <>
                    <div className="flex items-center gap-x-3 text-white">
                      <Image
                        src="/bnb-chain.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                        className="w-[25px] mdm:w-[4.5vw]"
                      />
                      BNB Chain
                    </div>
                  </>
                )}
                {selected2 === 1 && (
                  <>
                    <div className="flex items-center gap-x-3 text-white">
                      <Image
                        src="/immutable.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                        className="w-[22px] mdm:w-[4.5vw]"
                      />
                      Immutable
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[14px] mt-[14px]">
            <div className="flex justify-between">
              <div>
                <p className="capitalize text-white mdm:text-sm">
                  you will receive
                </p>
              </div>
              <div>
                <p className="capitalize text-white mdm:text-sm">
                  {multiplyPrice} $EVM
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="capitalize text-white mdm:text-sm">
                  estimated wait:
                </p>
              </div>
              <div>
                <p className="capitalize text-white mdm:text-sm">12 minutes</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[14px] mt-[14px]">
            <div className="flex justify-center text-red-500 text-xs items-center">
              <button className="bg-transparent rounded-full p-1">
                <Image
                  src="/error.png"
                  width={300}
                  height={300}
                  alt=""
                  className="w-[17px] mdm:w-[6vw]"
                />
              </button>
              Please make sure your wallet is connected to the destination
              network.
            </div>
            <div className="m-auto">
              <div className="flex gap-x-[5vw]">
                <button
                  className="bg-[#E53935] w-[150px] p-1 rounded-lg capitalize
                border-2 border-white text-white mdm:w-[30vw]"
                >
                  send
                </button>

                <button
                  type="button"
                  className="bg-transparent w-[150px] p-1 rounded-lg border-2 border-white
                text-white capitalize mdm:w-[30vw]"
                  onClick={() => setShowModal(false)}
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
