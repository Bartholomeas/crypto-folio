import { MdNightlightRound, MdWbSunny } from "react-icons/md";

interface Props {
	toggleThemeFunc: () => void;
	isThemeDark: boolean;
}

function ThemeSwitch({ toggleThemeFunc, isThemeDark }: Props) {
	return (
		<button
			type="button"
			onClick={toggleThemeFunc}
			className="btn btn-square btn-primary"
		>
			{isThemeDark ? <MdNightlightRound /> : <MdWbSunny />}
		</button>
	);
}

export default ThemeSwitch;
