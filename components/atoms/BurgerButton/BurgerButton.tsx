import { useAppSelector } from '../../../state/reduxHooks';

interface Props {
	onClickFn: () => void;
}

const BurgerButton = ({ onClickFn }: Props) => {
	const { isNavOpen } = useAppSelector(state => state.ui);

	return (
		<button
			className='flex flex-col items-center justify-center gap-2 w-[30px] h-[40px] cursor-pointer md:hidden'
			onClick={onClickFn}>
			<span
				className={`dark:bg-baseLight  w-full h-[3px] bg-accentDark rounded ${
					isNavOpen && 'rotate-45'
				} origin-[30%] transition-transform`}
			/>
			<span
				className={`dark:bg-baseLight  w-full h-[3px] bg-accentDark rounded ${
					isNavOpen && 'rotate-[-45deg]'
				} origin-[30%] transition-transform`}
			/>
		</button>
	);
};

export default BurgerButton;
