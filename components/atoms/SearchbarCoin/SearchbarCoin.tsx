import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
	children: React.ReactNode | React.ReactNode[];
}
const SearchbarCoin = ({ children }: Props) => {
	return (
		<Link passHref href='/'>
			<a className=''>
				<div
					className='flex items-center justify-between bg-white w-full px-sm py-[0.3rem] h-full rounded min-h-[5rem] border-2 border-solid border-baseLight
                hover:bg-baseLight'>
					<div className='flex items-center gap'>
						<Image className='h-full' src='/logo.svg' width={30} height={50} alt='Logo of cointis app' />
						<p className='text-font '>{children}</p>
						<p className='text-fontLight font-bold'>BTC</p>
					</div>
					<p className='font-bold text-fontLight'> #1</p>
				</div>
			</a>
		</Link>
	);
};

export default SearchbarCoin;
