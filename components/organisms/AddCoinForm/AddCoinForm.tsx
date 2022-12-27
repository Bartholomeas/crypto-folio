import React from "react";
import Label from "../../atoms/Label/Label";

import InputWithLabel from "../../molecules/InputWithLabel/InputWithLabel";
import Searchbar from "../Searchbar/Searchbar";

function AddCoinForm() {
	return (
		<form className="">
			<Label>Search for coin</Label>
			<Searchbar />
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
