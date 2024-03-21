import { useGlobalContext } from "../../../../State/global";

const Calculator = () => {
  const { multiplyPrice } = useGlobalContext()!;
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-between xl:hidden">
        <h3 className="text-white">Gas</h3>
        <h3 className="text-white">0.014456 BNB</h3>
      </div>
      <div className="flex justify-between">
        <h3 className="text-white">Fee</h3>
        <h3 className="text-white">12.3805 EVM</h3>
      </div>
      <div className="flex justify-between xl:hidden">
        <h3 className="text-white capitalize">you will receive</h3>
        <h3 className="text-white">{multiplyPrice} EVM</h3>
      </div>
      <div className="flex justify-between">
        <h3 className="text-white">Estimate Wait</h3>
        <h3 className="text-white">12 Minutes</h3>
      </div>
    </div>
  );
};

export default Calculator;
