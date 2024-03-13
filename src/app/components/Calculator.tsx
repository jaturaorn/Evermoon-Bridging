const Calculator = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-between">
        <h3 className="text-white">Fee</h3>
        <h3 className="text-white">12.3805 EVM</h3>
      </div>
      <div className="flex justify-between">
        <h3 className="text-white">Estimate Wait</h3>
        <h3 className="text-white">12 Minutes</h3>
      </div>
    </div>
  );
};

export default Calculator;
