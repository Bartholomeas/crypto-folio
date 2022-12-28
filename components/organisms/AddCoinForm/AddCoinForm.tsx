import React from "react";
import Label from "../../atoms/Label/Label";

import InputWithLabel from "../../molecules/InputWithLabel/InputWithLabel";
import Searchbar from "../Searchbar/Searchbar";

function AddCoinForm() {
	return (
		<form className="max-w-[600px]">
			<h2>Add coin to your wallet</h2>
			<Label>Search for coin</Label>
			<Searchbar fullWidth />
			<div className="flex items-center gap-4">
				<InputWithLabel
					errors={{ boughtDate: "" }}
					onChangeFunc={() => {}}
					onBlurFunc={() => {}}
					forProp="boughtDate"
					inputType="date"
				>
					Bought date
				</InputWithLabel>
				<InputWithLabel
					errors={{ amount: "" }}
					onChangeFunc={() => {}}
					onBlurFunc={() => {}}
					forProp="amount"
					inputType="number"
				>
					Amount
				</InputWithLabel>
			</div>
		</form>
	);
}

export default AddCoinForm;
