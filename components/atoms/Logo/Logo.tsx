import logo from '../../../assets/logo.svg';
import Image from 'next/image';

const Logo = () => {
	return (
		<a className='cursor-pointer h-auto'>
			<Image className='h-full' src={logo} alt='Logo of cointis app' />
		</a>
	);
};

export default Logo;
