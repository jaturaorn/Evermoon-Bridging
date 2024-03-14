const Banner = () => {
  return (
    <main className="w-full h-[500px] smm:w-full">
      <div
        className="flex justify-center h-full items-center 
       bg-[url('/environment1.png')] bg-no-repeat bg-center
      border-main-1 border-y-2 mdm:bg-cover smm:bg-cover"
      >
        <p className="font-bold text-[60px] [text-shadow:_2px_1px_5px_rgb(0_0_0_/_70%)] uppercase text-main-1">
          bridge
        </p>
      </div>
    </main>
  );
};

export default Banner;
