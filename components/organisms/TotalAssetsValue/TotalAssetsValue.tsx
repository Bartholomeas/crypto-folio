import ChangeInValue from "../../atoms/ChangeInValue/ChangeInValue";

interface Props {
  totalValue: number;
  valueInBtc: number;
  changePercent: number;
  changeValue: number;
}

function TotalAssetsValue({
  totalValue,
  valueInBtc,
  changePercent,
  changeValue,
}: Props) {
  return (
    <div
      className="flex justify-between items-center min-w-[200px] w-full px py-lg rounded text-white bg-accent 
			lg:max-w-[300px]"
    >
      <div className="flex flex-col items-start w-full">
        <p>My portfolio</p>
        <p className="text-lg font-semibold">{totalValue}$</p>
        <p className="text">={valueInBtc} BTC</p>
      </div>
      <div className="flex flex-col items-end bg-accentDark w-fit h-fit p-xs rounded">
        <ChangeInValue isPercent>{changePercent}</ChangeInValue>
        <ChangeInValue isPercent={false}>{changeValue}</ChangeInValue>
      </div>
    </div>
  );
}

export default TotalAssetsValue;
