import { useEffect, useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import FavouriteButton from '../components/atoms/FavouriteButton/FavouriteButton';
import MarginBox from '../components/atoms/MarginBox/MarginBox';
import PageHeader from '../components/atoms/PageHeader/PageHeader';

import TableBody from '../components/molecules/TableBody/TableBody';
import TableData from '../components/molecules/TableData/TableData';
import TableHead from '../components/molecules/TableHead/TableHead';
import TableHeader from '../components/molecules/TableHeader/TableHeader';
import TableRow from '../components/molecules/TableRow/TableRow';
import Searchbar from '../components/organisms/Searchbar/Searchbar';
import Table from '../components/organisms/Table/Table';
import { CoinItem } from '../state/coinsSlice';

const Explore = ({ coins }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [currentCoins, setCurrentCoins] = useState([]);
	const [filteredCoins, setFilteredCoins] = useState<CoinItem | CoinItem[]>([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		setCurrentCoins(coins);
		console.log(currentCoins);
	}, []);

	const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	return (
		<main
			className='flex flex-col items-start gap w-full px min-h-[100vh] overflow-auto max-w
    md:h-[100vh] md:max-h-100vh md:py-lg md:mr-[5rem]'>
			<MarginBox />
			<PageHeader>all Cryptocurrencies</PageHeader>
			<div className='top-[5rem] flex flex-col gap w-full pt'>
				<Searchbar onChangeFunc={getInputValue} placeholderText='Search for..' />
				<div className='flex flex-col justify-center w-full'>
					{/* {isLoading && <p className='font-bold text-xl text-font'>Loading...</p>} */}

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
								<TableHeader>#</TableHeader>
								<TableHeader leftAlign={true}>Name</TableHeader>
								<TableHeader>Current price</TableHeader>
								<TableHeader>24h change</TableHeader>
								<TableHeader>Capitalization</TableHeader>
							</TableRow>
						</TableHead>
						<TableBody>
							{currentCoins.map((coin: CoinItem, index: number) => {
								return (
									<TableRow key={uuidv4()}>
										<TableData hrefRoute={coin.name}>
											<FavouriteButton />
										</TableData>
										<TableData hrefRoute={coin.id} isBold={true}>
											{index + 1}
										</TableData>
										<TableData imgSrc={coin.image} hrefRoute={coin.id} leftAlign={true}>
											{coin.name}
										</TableData>
										<TableData hrefRoute={coin.id} appendAfter={'USD'}>
											{coin.current_price.toFixed(2)}
										</TableData>
										<TableData hrefRoute={coin.id} appendAfter={'%'}>
											{coin.price_change_percentage_24h}
										</TableData>
										<TableData hrefRoute={coin.id} appendAfter={'USD'}>
											{coin.market_cap}
										</TableData>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			</div>
			<p className='text-xs text-fontLight'>
				Crypto data powered by{' '}
				<a className='text-accent' rel='noreferrer' target={'_blank'} href='https://www.coingecko.com/'>
					Coingecko API
				</a>
			</p>
		</main>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const res = await axios(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'
		);
		return {
			props: {
				coins: res.data,
			},
			revalidate: 60,
		};
	} catch {
		throw new Error('Something went wrong in staticProps :(');
	}
};

export default Explore;
