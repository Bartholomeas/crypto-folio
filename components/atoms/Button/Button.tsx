import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	onClickFn?: (arg1?: React.MouseEvent<HTMLButtonElement> | EventTarget) => void;
	isAccent?: boolean;
	otherStyles?: string;
}

const Button = ({ children, onClickFn, isAccent, otherStyles }: Props) => {
	return (
		<button
			onClick={onClickFn}
			className={`relative flex items-center justify-center gap-sm px-sm py-sm h-full w-full text-sm rounded-xl  ${
				isAccent
					? ' bg-accentDark text-white font-bold hover:bg-accent'
					: 'dark:bg-dmBaseElement dark:hover:bg-accentDark dark:text-baseLight bg-baseLight text-font hover:bg-baseVeryLight'
			}
            
            transition-colors
            ${otherStyles}
            `}>
			{children}
		</button>
	);
};

export default Button;
