import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
	children: React.ReactNode | React.ReactNode[];
	hrefRoute: string;
	coinSymbol: string;
	coinLogo: string;
	coinRank: number;
}
const SearchbarCoin = ({ children, hrefRoute, coinSymbol, coinLogo, coinRank }: Props) => {
	return (
		<Link passHref href={hrefRoute}>
			<a className=''>
				<div
					className='flex items-center justify-between bg-white w-full px-sm py-[0.3rem] h-full rounded min-h-[5rem]
                hover:bg-baseLight'>
					<div className='flex items-center gap-sm'>
						<Image src={coinLogo} width={20} height={20} alt='Logo of cointis app' />
						<p className='text-font '>{children}</p>
						<p className='text-fontLight font-bold'>{coinSymbol}</p>
					</div>
					<p className='font-bold text-fontLight'>#{coinRank}</p>
				</div>
			</a>
		</Link>
	);
};

export default SearchbarCoin;
