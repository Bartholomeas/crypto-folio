import Image from 'next/image';

interface Props {
	heightVal?: string;
}

const Logo = ({ heightVal = '50' }: Props) => {
	return (
		<a className='cursor-pointer h-auto'>
			<Image className='h-full' src='/logo.svg' width={heightVal} height={heightVal} alt='Logo of cointis app' />
		</a>
	);
};

export default Logo;
