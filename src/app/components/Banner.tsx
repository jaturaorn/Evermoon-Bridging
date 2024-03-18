const Banner = () => {
  return (
    <main className="w-full h-[350px] smm:w-full smm:h-[80vw]">
      <div
        className="flex justify-center h-full items-center 
       bg-[url('/environment1.png')] bg-no-repeat bg-center
      border-main-1 border-y-2 mdm:bg-cover smm:bg-cover
      3xl:bg-cover"
      >
        <p
          className="font-bold text-6xl [text-shadow:_2px_1px_5px_rgb(0_0_0_/_65%)] 
        uppercase text-main-1 smm:text-[12vw]"
        >
          bridge
        </p>
      </div>
    </main>
  );
};

export default Banner;
