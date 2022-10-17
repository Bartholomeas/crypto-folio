import React, { useEffect, useState } from 'react';
import ErrorText from '../../atoms/ErrorText/ErrorText';
import Label from '../../atoms/Label/Label';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlurFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	forProp: string;
	inputType?: string;
	placeholderValue?: string;
	isError?: boolean;
	errors?: any;
}

const InputWithLabel = ({
	children,
	onChangeFunc,
	onBlurFunc,
	forProp,
	inputType = 'text',
	placeholderValue,
	errors,
}: Props) => {
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		errors[forProp] ? setIsError(true) : setIsError(false);
	}, [errors[forProp]]);

	return (
		<div className='relative flex flex-col gap-[.3rem] py-xs'>
			<Label forProp={forProp}>{children}</Label>
			<input
				onChange={onChangeFunc || (() => {})}
				onBlur={onBlurFunc || (() => {})}
				className={`px-sm py-sm rounded-xl border-2 border-baseLight text ${
					isError && 'border-error border-2'
				}`}
				placeholder={placeholderValue}
				type={inputType}
				name={forProp}
				id={forProp}
			/>
			{isError && <ErrorText>{errors[forProp]}</ErrorText>}
		</div>
	);
};

export default InputWithLabel;
