import React from 'react';
import useForm from '../../../hooks/useForm';
import Label from '../../atoms/Label/Label';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlurFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	forProp: string;
	inputType?: string;
	placeholderValue?: string;
	isError?: boolean;
}

const InputWithLabel = ({
	children,
	onChangeFunc,
	onBlurFunc,
	forProp,
	inputType = 'text',
	placeholderValue,
	isError = false,
}: Props) => {
	return (
		<div className='relative flex flex-col gap-sm'>
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
			{isError && (
				<span className='absolute w-fit max-w-[300px] top-[0] right-0 py-[0.3rem] px-xs bg-error text-white text-xs rounded-xl'>
					Password must have atleas 8 signs and cover letters
				</span>
			)}
		</div>
	);
};

export default InputWithLabel;
