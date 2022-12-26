import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../state/reduxHooks";
import { uiActions } from "../../../state/uiSlice";
import BasicLink from "../../atoms/BasicLink/BasicLink";
import Button from "../../atoms/Button/Button";
import Loader from "../../atoms/Loader/Loader";
import InputWithLabel from "../../molecules/InputWithLabel/InputWithLabel";

function AddWalletModal() {
	const dispatch = useAppDispatch();
	const { isWalletModalOpen, isLoaderOpen } = useAppSelector(
		(state) => state.ui,
	);

	return (
		<div
			className={`popup-bg ${
				isWalletModalOpen ? "fixed" : "hidden"
			} w-full h-full top-0 left-0 right-0 bottom-0 bg-zinc-800/50 backdrop-blur-sm z-[1000]`}
		>
			<div
				className="dark:bg-dmBase
			 fixed flex flex-col h-full w-full top-[50%] left-[50%] py-lg px-lg text translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl md:min-w-[500px] min-h-[500px] md:max-w-[500px] md:h-auto md:w-auto overflow-y-auto"
			>
				<button
					type="button"
					onClick={() => dispatch(uiActions.toggleWalletModal())}
					className="absolute top-0 right-0 text-md cursor-pointer pt-lg pl-sm pr-lg"
				>
					<MdOutlineCancel className=" text-fontLight " />
				</button>
				<div className="flex items-start justify-center w-full pb-lg">
					<p
						className={`dark:bg-transparent dark:hover:bg-transparent
						 w-fit min-w-[5rem] px-md pt-0 pb-xs bg-transparent text-md hover:bg-transparent after:origin-left
                        after:content-[""] after:absolute after:h-[.3rem] after:w-[3rem] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-accent after:rounded  after:transition-transform hover:after:scale-x-100 after:scale-x-0
                    `}
					>
						Add coin to your wallet
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap pt-lg">
					<form onSubmit={() => {}} className="flex flex-col gap w-full h-full">
						<InputWithLabel
							errors={{ count: "ebe" }}
							onChangeFunc={(e) => {
								console.log(e.target.value);
							}}
							onBlurFunc={() => {}}
							forProp="count"
							inputType="count"
							placeholderValue="Password here"
						>
							Password
						</InputWithLabel>
						<Button isSubmit isAccent otherStyles="max-h-[5rem]">
							Log in
						</Button>
					</form>
					<BasicLink hrefRoute="/">I forgot password</BasicLink>
				</div>

				{isLoaderOpen && <Loader />}
			</div>
		</div>
	);
}

export default AddWalletModal;
