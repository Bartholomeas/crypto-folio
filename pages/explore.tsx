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
import { useGetCoinsQuery } from '../state/apiSlice';
import { CoinItem } from '../state/coinsSlice';

const Explore = ({ coins }: InferGetStaticPropsType<typeof getStaticProps>) => {
	coins;
	return (
		<main
			className='flex flex-col items-start gap w-full px min-h-[100vh] overflow-auto max-w
    md:h-[100vh] md:max-h-100vh md:py-lg md:mr-[5rem]'>
			<MarginBox />
			<PageHeader>all Cryptocurrencies</PageHeader>
			<div className='top-[5rem] flex flex-col gap w-full pt'>
				<Searchbar placeholderText='Search for..' />
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
							{coins.map((coin: CoinItem, index: number) => {
								return (
									<TableRow key={uuidv4()}>
										<TableData hrefRoute={coin.name}>
											<FavouriteButton />
										</TableData>
										<TableData hrefRoute={coin.name} isBold={true}>
											{index + 1}
										</TableData>
										<TableData imgSrc={coin.image} hrefRoute={coin.name} leftAlign={true}>
											{coin.name}
										</TableData>
										<TableData hrefRoute={coin.name} appendAfter={'USD'}>
											{coin.current_price.toFixed(2)}
										</TableData>
										<TableData hrefRoute={coin.name} appendAfter={'%'}>
											{coin.price_change_percentage_24h}
										</TableData>
										<TableData hrefRoute={coin.name} appendAfter={'USD'}>
											{coin.market_cap}
										</TableData>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			</div>
		</main>
	);
};

// export async function getServerSideProps() {
// 	try {
// 		const res = await axios(
// 			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'
// 		);
// 		return {
// 			props: {
// 				coins: res.data,
// 			},
// 			revalidate: 60,
// 		};
// 	} catch {
// 		throw new Error('Something went wrong in staticProps :(');
// 	}
// }

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
