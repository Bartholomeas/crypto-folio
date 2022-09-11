import Image from 'next/image';

interface Props {
	toggleThemeFunc: () => void;
	isThemeDark: boolean;
}

const ThemeSwitch = ({ toggleThemeFunc, isThemeDark }: Props) => {
	return (
		<label className='switch relative inline-block w-[50px] h-[24px] bg-fontLight rounded-full drop-shadow-sm'>
			<input onChange={toggleThemeFunc} type='checkbox' className='h-[0] w-[0] opacity-0' />
			<span
				className={`slider absolute flex items-center justify-center h-full w-[60%] rounded-full bottom-0 right-0 bg-white  ${
					isThemeDark && 'translate-x-[-70%]'
				} cursor-pointer transition-transform`}>
				<Image src={isThemeDark ? '/nightIcon.svg' : '/dayIcon.svg'} width='15' height='15' alt='Day or night icon' />
			</span>
		</label>
	);
};

export default ThemeSwitch;
