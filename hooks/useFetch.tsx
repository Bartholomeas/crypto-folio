import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../state/reduxHooks";
import { coinsActions } from "../state/coinsSlice";

const useFetch = () => {
	const [resultData, setResultData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();

	const sendRequest = async (url: string) => {
		setIsLoading(true);
		try {
			const res = await axios(url!);

			dispatch(coinsActions.setTrendingCoins(res.data.coins));
		} catch (err) {
			throw new Error("Something went wrong!");
		}
	};

	return { sendRequest, resultData };
};

export default useFetch;
