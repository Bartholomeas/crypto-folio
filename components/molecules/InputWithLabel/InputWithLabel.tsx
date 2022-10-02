import React from 'react';
import Label from '../../atoms/Label/Label';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	forProp: string;
	inputType?: string;
	placeholderValue?: string;
}

const InputWithLabel = ({ children, forProp, inputType = 'text', placeholderValue }: Props) => {
	return (
		<div className='flex flex-col gap-sm'>
			<Label forProp={forProp}>{children}</Label>
			<input
				className='p-xs rounded-xl border-2 border-baseLight text'
				placeholder={placeholderValue}
				type={inputType}
				name={forProp}
				id={forProp}
			/>
		</div>
	);
};

export default InputWithLabel;
