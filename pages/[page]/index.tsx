import { useState, useEffect } from 'react';
import { InferGetStaticPropsType } from 'next';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import FavouriteButton from '../../components/atoms/FavouriteButton/FavouriteButton';
import MarginBox from '../../components/atoms/MarginBox/MarginBox';
import PageHeader from '../../components/atoms/PageHeader/PageHeader';

import TableBody from '../../components/molecules/TableBody/TableBody';
import TableData from '../../components/molecules/TableData/TableData';
import TableHead from '../../components/molecules/TableHead/TableHead';
import TableHeader from '../../components/molecules/TableHeader/TableHeader';
import TableRow from '../../components/molecules/TableRow/TableRow';
import Searchbar from '../../components/organisms/Searchbar/Searchbar';
import Table from '../../components/organisms/Table/Table';
import { CoinItem, coinsActions } from '../../state/coinsSlice';
import Footer from '../../components/organisms/Footer/Footer';
import Pagination from '../../components/organisms/Pagination/Pagination';
import { addSpacesToNumber } from '../../utils/convertUtils';
import { useAppDispatch, useAppSelector } from '../../state/reduxHooks';
import useFilter from '../../hooks/useFilter';
import useDatabase from '../../hooks/useDatabase';

const SpecifiedPage = ({ coins, page }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const indexingByPage = page > 1 ? (page - 1) * 100 : 0;
	const { sortCoins } = useFilter();
	const dispatch = useAppDispatch();
	const { coinsList } = useAppSelector(state => state.coins);
	const { addToFavourites } = useDatabase();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		dispatch(coinsActions.setCoinsList(coins));
	}, [coins, dispatch]);

	return (
		<main
			className='flex flex-col items-start gap w-full px min-h-[100vh]  max-w
    md:h-[100vh] md:max-h-100vh md:py-lg md:mr-[5rem] md:overflow-y-scroll'>
			<MarginBox />
			<PageHeader>all Cryptocurrencies</PageHeader>
			<div className='top-[5rem] flex flex-col gap w-full pt'>
				<Searchbar placeholderText='Search for coin..' />
				<div className=' flex flex-col justify-center w-full overflow-x-scroll'>
					{coins.length < 1 && <p className='absolute font-bold text-xl text-accent'>Loading...</p>}
					{/* <p className='absolute font-bold text-xl text-accent top-[50%]'>Loading...</p> */}
					<Table>
						<colgroup>
							<col className='w-[2%]' />
							<col className='w-[3%]' />
							<col className='w-[25%]' />
							<col className='w-[25%]' />
							<col className='w-[20%]' />
							<col className='w-[25%]' />
						</colgroup>
						<TableHead>
							<TableRow>
								<TableHeader></TableHeader>
								<TableHeader onClickFn={sortCoins} value={'market_cap_rank'}>
									#
								</TableHeader>
								<TableHeader onClickFn={sortCoins} value={'id'} leftAlign={true}>
									Name
								</TableHeader>
								<TableHeader onClickFn={sortCoins} value={'current_price'}>
									Current price
								</TableHeader>
								<TableHeader onClickFn={sortCoins} value={'price_change_percentage_24h'}>
									24h change
								</TableHeader>
								<TableHeader onClickFn={sortCoins} value={'market_cap'}>
									Capitalization
								</TableHeader>
							</TableRow>
						</TableHead>
						<TableBody>
							{coinsList.map((coin: CoinItem, index: number) => {
								return (
									<TableRow key={uuidv4()}>
										<TableData>
											<FavouriteButton funcArg={coin.name} />
										</TableData>
										<TableData hrefRoute={coin.id} isBold={true}>
											{indexingByPage + index + 1}
										</TableData>
										<TableData imgSrc={coin.image} hrefRoute={coin.id} leftAlign={true}>
											{coin.name}
										</TableData>
										<TableData hrefRoute={coin.id} appendAfter={'USD'}>
											{coin.current_price}
										</TableData>
										<TableData hrefRoute={coin.id} appendAfter={'%'}>
											{coin.price_change_percentage_24h}
										</TableData>
										<TableData hrefRoute={coin.id} appendAfter={'USD'}>
											{addSpacesToNumber(coin.market_cap)}
										</TableData>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			</div>
			<Pagination currPage={page} />
			<Footer>
				<p className='text-xs text-fontLight'>
					Crypto data powered by{' '}
					<a
						className='text-accent'
						rel='noreferrer'
						target={'_blank'}
						href='https://www.coingecko.com/'>
						Coingecko API
					</a>
				</p>
			</Footer>
		</main>
	);
};

export const getStaticPaths = async () => {
	return {
		fallback: false,
		paths: [
			{ params: { page: '1' } },
			{ params: { page: '2' } },
			{ params: { page: '3' } },
			{ params: { page: '4' } },
			{ params: { page: '5' } },
			{ params: { page: '6' } },
			{ params: { page: '7' } },
			{ params: { page: '8' } },
			{ params: { page: '9' } },
			{ params: { page: '10' } },
		],
	};
};

export const getStaticProps = async (context: any) => {
	const { page } = context.params;

	try {
		const res = await axios(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=24h`
		);
		return {
			props: {
				coins: res.data,
				page: page,
			},
			revalidate: 60,
		};
	} catch {
		throw new Error('Something went wrong :(');
	}
};
export default SpecifiedPage;
