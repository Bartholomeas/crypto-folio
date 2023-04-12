import classNames from "classnames";
import { useAppSelector } from "../../state/reduxHooks";

interface Props {
	onClick: () => void;
}

function BurgerButton({ onClick }: Props) {
	const { isNavOpen } = useAppSelector((state) => state.ui);
	const burgerBar =
		"dark:bg-base-100 w-full h-[3px] bg-primary-focus rounded origin-[30%] transition-transform";
	return (
		<button
			type="button"
			className="flex flex-col items-center justify-center gap-2 w-[30px] h-[40px] cursor-pointer md:hidden"
			onClick={onClick}
		>
			<span className={classNames(burgerBar, isNavOpen && "rotate-45")} />
			<span className={classNames(burgerBar, isNavOpen && "rotate-[-45deg]")} />
		</button>
	);
}

export default BurgerButton;
