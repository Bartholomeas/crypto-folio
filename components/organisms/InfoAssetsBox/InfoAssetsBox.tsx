import ChangeInValue from '../../atoms/ChangeInValue/ChangeInValue';
interface Props {
  children: string;
  asset: string;
  changeValue: number;
  isPercent?: boolean;
}

const InfoAssetsBox = ({ children, asset, changeValue, isPercent }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-sm w-full p py-sm bg-accentDark text-white rounded lg:h-[50%]">
      <p className="text-sm">{children}</p>
      <div className="flex items-center gap-sm">
        <p className="font-semibold text">{asset}</p>
        <ChangeInValue isPercent={isPercent}>{changeValue}</ChangeInValue>
      </div>
    </div>
  );
};

export default InfoAssetsBox;
