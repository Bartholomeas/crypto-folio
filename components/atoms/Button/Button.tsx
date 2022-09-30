import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	onClickFn: () => void;
	isAccent?: boolean;
	otherStyles?: string;
}

const Button = ({ children, onClickFn, isAccent, otherStyles }: Props) => {
	return (
		<button
			onClick={onClickFn}
			className={`flex items-center justify-center gap-sm px-sm py-sm h-full w-full text-sm rounded-xl  ${
				isAccent
					? ' bg-accentDark text-white font-bold hover:bg-accent'
					: ' bg-baseLight text-font hover:bg-baseVeryLight'
			}
            
            transition-colors
            ${otherStyles}
            `}>
			{children}
		</button>
	);
};

export default Button;
