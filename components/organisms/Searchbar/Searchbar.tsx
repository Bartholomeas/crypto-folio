import React, { useCallback, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import Label from "../../atoms/Label/Label";
import SearchbarItems from "../../molecules/SearchbarItems/SearchbarItems";

interface Props {
	placeholderText?: string;
}

function Searchbar({ placeholderText = "" }: Props) {
	const [inputValue, setInputValue] = useState("");
	const [searchedCoins, setSearchedCoins] = useState([]);

	const clearCoinsData = (e: React.FocusEvent<HTMLInputElement>) => {
		let currentValue = e.target.value;
		currentValue = "";
		setInputValue("");
		setSearchedCoins([]);
	};

	const getSearchedCoins = useCallback(async (coinValue: string) => {
		try {
			const data = await axios(
				`https://api.coingecko.com/api/v3/search?query=${coinValue}`,
			);
			setSearchedCoins(data.data.coins);
		} catch (error) {
			throw new Error("Something went wrong");
		}
	}, []);

	const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};
	useEffect(() => {
		if (inputValue === "") return;
		const debounceTimeout = setTimeout(() => {
			getSearchedCoins(inputValue);
		}, 500);

		// eslint-disable-next-line consistent-return
		return () => clearTimeout(debounceTimeout);
	}, [inputValue, getSearchedCoins]);

	return (
		<div className="relative flex flex-col w-full min-h-[3rem] md:max-w-[400px] z-[100]">
			<Label forProp="searchbar">
				<div className="dark:border-support flex justify-between items-center w-full h-full border-accent border-solid border-l-4 rounded-md">
					<input
						autoComplete="off"
						onChange={(e) => getInputValue(e)}
						onBlur={(e) => clearCoinsData(e)}
						id="searchbar"
						placeholder={placeholderText}
						className="dark:bg-dmBaseElement dark:text-baseLight
						text w-full h-full max-h-[4rem] py px-xs bg-baseVeryLight "
						type="text"
					/>
					<span
						className="dark:bg-support
					flex items-center justify-center h-full max-h-[4rem] p-xs rounded-r bg-baseVeryLight text-lg text-fontLight"
					>
						<MdSearch />
					</span>
				</div>
			</Label>
			<SearchbarItems coinsData={searchedCoins} />
		</div>
	);
}

export default Searchbar;
