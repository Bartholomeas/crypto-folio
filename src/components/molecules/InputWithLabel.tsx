import React, { useEffect, useState } from "react";
import ErrorText from "../atoms/ErrorText";
import Label from "../atoms/Label";

interface Props {
	children: React.ReactNode | React.ReactNode[];
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	forProp: string;
	inputType?: string;
	placeholderValue?: string;
	errors: Record<string, string>;
}

function InputWithLabel({
	children,
	onChange,
	onBlur,
	forProp,
	inputType = "text",
	placeholderValue,
	errors,
}: Props) {
	const [isError, setIsError] = useState(false);

	useEffect(
		() => (errors[forProp] !== "" ? setIsError(true) : setIsError(false)),
		[errors[forProp]],
	);

	return (
		<div className="form-control w-full">
			<Label forProp={forProp}>{children}</Label>
			<input
				onChange={onChange || (() => {})}
				onBlur={onBlur || (() => {})}
				className={`input input-bordered input-lg ${
					isError && "border-error border-2"
				}`}
				min="0"
				placeholder={placeholderValue}
				type={inputType}
				name={forProp}
				id={forProp}
			/>
			{isError && <ErrorText>{errors[forProp]}</ErrorText>}
		</div>
	);
}

export default InputWithLabel;
