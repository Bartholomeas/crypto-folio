import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

import useForm from "../../hooks/useForm";
import useUserRequest from "../../hooks/useUserRequest";

import { useAppDispatch, useAppSelector } from "../../state/reduxHooks";
import { uiActions } from "../../state/uiSlice";

import Button from "../atoms/Button";
import ErrorText from "../atoms/ErrorText";
import Label from "../atoms/Label";
import Loader from "../atoms/Loader";

import InputWithLabel from "../molecules/InputWithLabel";

import Searchbar from "./Searchbar";

function AddCoinModal() {
	const dispatch = useAppDispatch();
	const { isCoinModalOpen, isLoaderOpen } = useAppSelector((state) => state.ui);

	const [isValid, setIsValid] = useState(true);
	const { walletCoin } = useAppSelector((state) => state.coins);
	const { addCoinToWallet } = useUserRequest();
	const { validateInputOnBlur, setCoinPurchaseData } = useForm();

	function validateAndAddCoin() {
		if (Object.values(walletCoin).every((item) => item)) {
			setIsValid(true);
			addCoinToWallet(walletCoin);
		} else {
			setIsValid(false);
		}
	}

	return (
		<div
			className={`popup-bg ${
				isCoinModalOpen ? "fixed" : "hidden"
			} w-full h-full top-0 left-0 right-0 bottom-0 bg-zinc-800/50 backdrop-blur-sm z-[1000]`}
		>
			<div
				className="dark:bg-dmBase
			 fixed flex flex-col h-full w-full top-[50%] left-[50%] py-lg px-lg text translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl md:min-w-[500px] min-h-[500px] md:max-w-[500px] md:h-auto md:w-auto"
			>
				<button
					type="button"
					onClick={() => dispatch(uiActions.toggleCoinModal())}
					className="absolute top-0 right-0 text-md cursor-pointer pt-lg pl-sm pr-lg"
				>
					<MdOutlineCancel className=" text-fontLight " />
				</button>
				<div className="flex items-start justify-center w-full pb-lg">
					<h2 className="text-accent text-md font-bold">
						Add coin to your wallet
					</h2>
				</div>
				<div className="flex flex-col items-center justify-center gap pt-lg">
					<form className="w-full">
						<Label>Search for coin</Label>
						<div className="flex flex-col gap-6">
							<Searchbar fullWidth />
							<div className="flex items-center gap-4">
								<InputWithLabel
									errors={{ purchaseDate: "" }}
									onChange={(e) => {
										setCoinPurchaseData("date", e.target.value);
									}}
									onBlur={validateInputOnBlur}
									forProp="purchaseDate"
									inputType="date"
								>
									Purchase date
								</InputWithLabel>
							</div>
							<div className="flex items-center gap-4">
								<InputWithLabel
									errors={{ purchasePrice: "" }}
									onChange={(e) => {
										setCoinPurchaseData("price", +e.target.value);
									}}
									onBlur={validateInputOnBlur}
									forProp="purchasePrice"
									inputType="number"
								>
									Price
								</InputWithLabel>
								<InputWithLabel
									errors={{ purchaseAmount: "" }}
									onChange={(e) => {
										setCoinPurchaseData("amount", +e.target.value);
									}}
									onBlur={validateInputOnBlur}
									forProp="purchaseAmount"
									inputType="number"
								>
									Amount
								</InputWithLabel>
							</div>
							{!isValid && <ErrorText>No field can be empty</ErrorText>}
							<Button onClick={() => validateAndAddCoin()} theme="accent">
								Add coin to wallet
							</Button>
							<Button onClick={() => dispatch(uiActions.toggleCoinModal())}>
								Anuluj
							</Button>
						</div>
					</form>
				</div>

				{isLoaderOpen && <Loader />}
			</div>
		</div>
	);
}

export default AddCoinModal;
