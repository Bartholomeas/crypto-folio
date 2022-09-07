import logo from '../../../assets/logo.svg';

const Logo = () => {
	return (
		<a className='cursor-pointer h-auto'>
			<img className='h-full' src={logo} alt='Logo of cointis app' />
		</a>
	);
};

export default Logo;
