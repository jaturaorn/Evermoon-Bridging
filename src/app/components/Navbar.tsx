import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 mx-auto smm:p-1 smm:w-full">
      <div className="flex items-center gap-x-4">
        <Image
          src="/LogoEvermoon_Primary.png"
          width={300}
          height={300}
          alt=""
          className="w-[120px] xlm:hidden"
        />
        <h2
          className="capitalize text-xl text-white
        xlm:hidden"
        >
          bridge
        </h2>
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
      <div className="flex items-center">
        <button
          className="flex items-center px-[20px] py-[12px] bg-[#372C7D] rounded-lg text-lg
        gap-x-2 border-2 border-white text-white xlm:hidden"
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
        <Image
          src="/login.png"
          width={300}
          height={300}
          alt=""
          className="w-[30px] xl:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
