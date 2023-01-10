import React, { useCallback, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import Label from "../../atoms/Label/Label";
import SearchbarItems from "../../molecules/SearchbarItems/SearchbarItems";

interface Props {
	placeholderText?: string;
	fullWidth?: boolean;
}

function Searchbar({ placeholderText = "", fullWidth = false }: Props) {
	const [inputValue, setInputValue] = useState("");
	const [searchedCoins, setSearchedCoins] = useState([]);

	function clearCoinsData(e: React.FocusEvent<HTMLInputElement>) {
		let currentValue = e.target.value;

		setTimeout(() => {
			currentValue = "";
			setInputValue("");
			setSearchedCoins([]);
		}, 300);
	}

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

	function getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
	}
	useEffect(() => {
		if (inputValue === "") return;
		const debounceTimeout = setTimeout(() => {
			getSearchedCoins(inputValue);
		}, 500);
		// eslint-disable-next-line consistent-return
		return () => clearTimeout(debounceTimeout);
	}, [inputValue, getSearchedCoins]);

	return (
		<div
			className={`relative flex flex-col w-full min-h-[3rem] md:${
				fullWidth ? "" : "max-w-[300px]"
			}  z-[1000]`}
		>
			<Label forProp="searchbar">
				<div
					className="dark:bg-dmBaseElement dark:border-dmBase
				 flex justify-between items-center w-full h-full border-2 border-baseLight rounded-xl"
				>
					<input
						autoComplete="off"
						onChange={(e) => getInputValue(e)}
						onBlur={(e) => clearCoinsData(e)}
						id="searchbar"
						placeholder={placeholderText}
						className="dark:bg-inherit dark:text-dmFont
        w-full px-sm py-sm rounded-xl text"
						type="text"
					/>
					<span
						className="dark:bg-base
					flex items-center justify-center h-full max-h-[4rem] p-xs rounded-r text-lg text-fontLight"
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
