import logo from '/logo.svg';
import Image from 'next/image';

interface Props {
	heightVal?: string;
}

const Logo = ({ heightVal = '50' }: Props) => {
	return (
		<a className='cursor-pointer h-auto'>
			<Image className='h-full' src='/logo.svg' width='100%' height={heightVal} alt='Logo of cointis app' />
		</a>
	);
};

export default Logo;
