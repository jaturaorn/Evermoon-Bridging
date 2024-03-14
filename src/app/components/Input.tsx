import Image from "next/image";

const Input = ({
  price,
  multiplyPrice,
  handleInputChange,
}: {
  price: any;
  multiplyPrice: any;
  handleInputChange: any;
}) => {
  return (
    <div className="flex flex-col gap-y-2 mdm:mt-[110px]">
      <div className="flex justify-between">
        <h2 className="text-white">Form:</h2>
        <h2 className="text-main-3">Binance</h2>
      </div>
      <div
        className="flex justify-between items-center gap-x-2
       bg-[#FFFFFF33] rounded-xl border-2 border-slate-200 p-[7px]"
      >
        <input
          type="text"
          value={price}
          placeholder="at least 0.00001"
          className="w-full bg-transparent text-left rounded-xl outline-none text-white"
          onChange={handleInputChange}
        />
        <p className="text-white">Max</p>
      </div>
      <div className="flex justify-center cursor-pointer">
        <Image
          src="/down.png"
          width={300}
          height={300}
          alt=""
          className="w-[22px]"
        />
      </div>
      <div className="flex justify-between">
        <h2 className="text-white">To:</h2>
        <h2 className="text-main-3">ImmutableX</h2>
      </div>
      <div
        className="w-full h-[35px] bg-[#FFFFFF33] text-left rounded-xl outline-none 
        border-2 border-slate-200 text-white px-[10px] flex items-center"
      >
        {multiplyPrice}
      </div>
    </div>
  );
};

export default Input;
