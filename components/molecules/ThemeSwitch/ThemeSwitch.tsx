import { MdNightlightRound, MdWbSunny } from 'react-icons/md';

interface Props {
	toggleThemeFunc: () => void;
	isThemeDark: boolean;
}

const ThemeSwitch = ({ toggleThemeFunc, isThemeDark }: Props) => {
	return (
		<button
			onClick={toggleThemeFunc}
			className='flex items-center justify-center bg-baseLight p-sm rounded-xl aspect-square h-full text-accent 
			hover:bg-baseVeryLight transition-colors'>
			{isThemeDark ? <MdNightlightRound /> : <MdWbSunny />}
		</button>
	);
};

export default ThemeSwitch;
