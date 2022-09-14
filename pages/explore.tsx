import Image from 'next/image';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
import useFetch from '../hooks/useFetch';

const Explore = () => {
	const { coinsList } = useFetch(
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'
	);

	return (
		<main
			className='flex flex-col items-start gap w-full px min-h-[100vh] overflow-y-scroll 
    md:h-[100vh] md:py-lg md:mr-[5rem]'>
			<MarginBox />
			<PageHeader>all Cryptocurrencies</PageHeader>
			<div className='flex flex-col gap w-full pt'>
				<Searchbar placeholderText='Search for..' />

				<Table>
					<colgroup>
						<col className='w-[2%]' />
						<col className='w-[3%]' />
						<col className='w-[20%]' />
						<col className='w-[20%]' />
						<col className='w-[15%]' />
						<col className='w-[25%]' />
						<col className='w-[15%]' />
					</colgroup>
					<TableHead>
						<TableRow>
							<TableHeader></TableHeader>
							<TableHeader>#</TableHeader>
							<TableHeader leftAlign={true}>Name</TableHeader>
							<TableHeader>Current price</TableHeader>
							<TableHeader>24h change</TableHeader>
							<TableHeader>Capitalization</TableHeader>
							<TableHeader>Price change</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{coinsList.map((coin, index) => {
							return (
								<TableRow key={uuidv4()}>
									<TableData>
										<FavouriteButton />
									</TableData>
									<TableData isBold={true}>{index + 1}</TableData>
									<TableData leftAlign={true}>
										<Image src='/testIcon.svg' height={30} width={30} alt='Test crypto icon' />
										{coin.name}
									</TableData>
									<TableData appendAfter={'USD'}>{coin.current_price.toFixed(2)}</TableData>
									<TableData appendAfter={'%'}>{coin.price_change_percentage_24h}</TableData>
									<TableData appendAfter={'USD'}>{coin.market_cap}</TableData>
									<TableData>[]</TableData>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</main>
	);
};

export default Explore;
