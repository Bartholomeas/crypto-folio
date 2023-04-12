import React, { useCallback, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import Label from "../atoms/Label";
import SearchbarItems from "../molecules/SearchbarItems";

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
				process.env.NEXT_PUBLIC_SEARCHED_COINS + coinValue,
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
		<div className="form-control">
			<Label forProp="searchbar">
				<div className="input-group">
					<input
						autoComplete="off"
						onChange={(e) => getInputValue(e)}
						onBlur={(e) => clearCoinsData(e)}
						id="searchbar"
						placeholder={placeholderText}
						className="input input-bordered input-lg w-full text-base-content"
						type="text"
					/>
					<button type="button" className="btn btn-lg btn-square">
						<MdSearch />
					</button>
				</div>
			</Label>
			<SearchbarItems coinsData={searchedCoins} />
		</div>
	);
}

export default Searchbar;
