import React from 'react';
import FavouriteButton from '../components/atoms/FavouriteButton/FavouriteButton';
import MarginBox from '../components/atoms/MarginBox/MarginBox';
import TableBody from '../components/molecules/TableBody/TableBody';
import TableData from '../components/molecules/TableData/TableData';
import TableHead from '../components/molecules/TableHead/TableHead';
import TableHeader from '../components/molecules/TableHeader/TableHeader';
import TableRow from '../components/molecules/TableRow/TableRow';
import Table from '../components/organisms/Table/Table';

const explore = () => {
	return (
		<main
			className='flex flex-col max-w-[1400px] items-start gap w-full px min-h-[100vh] overflow-y-scroll
    md:h-[100vh] md:py-lg md:mr-[5rem]'>
			<MarginBox />
			<Table>
				<colgroup>
					<col className='' />
					<col className='' />
					<col className='' />
					<col className='' />
					<col className='' />
					<col className='' />
				</colgroup>
				<TableHead>
					<TableRow>
						<TableHeader>#</TableHeader>
						<TableHeader>Name</TableHeader>
						<TableHeader>Current price</TableHeader>
						<TableHeader>24h change</TableHeader>
						<TableHeader>Capitalization</TableHeader>
						<TableHeader>Price change</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableData>
							<FavouriteButton />
						</TableData>
						<TableData>Bitcoin</TableData>
						<TableData>21213</TableData>
						<TableData>+3.2%</TableData>
						<TableData>432 453 432 320</TableData>
						<TableData>[]</TableData>
					</TableRow>
				</TableBody>
			</Table>
		</main>
	);
};

export default explore;
