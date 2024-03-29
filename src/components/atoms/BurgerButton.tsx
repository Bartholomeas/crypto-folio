import { useAppSelector } from "../../state/reduxHooks";

interface Props {
	onClick: () => void;
}

function BurgerButton({ onClick }: Props) {
	const { isNavOpen } = useAppSelector((state) => state.ui);

	return (
		<button
			type="button"
			className="flex flex-col items-center justify-center gap-2 w-[30px] h-[40px] cursor-pointer md:hidden"
			onClick={onClick}
		>
			<span
				className={`dark:bg-baseLight  w-full h-[3px] bg-accentDark rounded ${
					isNavOpen && "rotate-45"
				} origin-[30%] transition-transform`}
			/>
			<span
				className={`dark:bg-baseLight  w-full h-[3px] bg-accentDark rounded ${
					isNavOpen && "rotate-[-45deg]"
				} origin-[30%] transition-transform`}
			/>
		</button>
	);
}

export default BurgerButton;
