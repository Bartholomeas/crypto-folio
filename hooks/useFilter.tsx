import { useState } from "react";
import { CoinItem, coinsActions } from "../state/coinsSlice";
import { useAppDispatch, useAppSelector } from "../state/reduxHooks";

const useFilter = () => {
  const dispatch = useAppDispatch();
  const [isAscending, setIsAscending] = useState(true);

  const sortCoins = (coinsList: CoinItem[], valueToSort: string) => {
    const sortedCoinsList =
      coinsList.length > 1 &&
      coinsList.sort((a: any, b: any): number => {
        a[valueToSort] == b[valueToSort] && 0;
        return (
          (a[valueToSort] > b[valueToSort]
            ? 1
            : a[valueToSort] < b[valueToSort]
            ? -1
            : 0) * (isAscending ? 1 : -1)
        );
      });
    dispatch(coinsActions.setCoinsList(sortedCoinsList));
    setIsAscending(!isAscending);
  };

  return { sortCoins };
};

export default useFilter;
