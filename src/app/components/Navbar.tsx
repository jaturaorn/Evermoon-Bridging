import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 mx-auto">
      <div className="flex items-center gap-x-4">
        <Image
          src="/LogoEvermoon_Primary.png"
          width={300}
          height={300}
          alt=""
          className="w-[120px]"
        />
        <h2 className="capitalize text-xl text-white">bridge</h2>
      </div>
      <div className="flex items-center">
        <button
          className="flex items-center px-[20px] py-[12px] bg-[#372C7D] rounded-lg text-lg
        gap-x-2 border-2 border-white text-white"
        >
          <Image
            src="/metamask.png"
            width={300}
            height={300}
            alt=""
            className="w-[30px]"
          />
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
