import Image from 'next/image';
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
			className='flex flex-col items-start gap w-full px min-h-[100vh] overflow-y-scroll 
    md:h-[100vh] md:py-lg md:mr-[5rem]'>
			<MarginBox />
			<Table>
				<colgroup>
					<col className='w-[2%]' />
					<col className='w-[3%]' />
					<col className='w-[25%]' />
					<col className='w-[20%]' />
					<col className='w-[15%]' />
					<col className='w-[20%]' />
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
					<TableRow>
						<TableData>
							<FavouriteButton />
						</TableData>
						<TableData isBold={true}>1</TableData>
						<TableData leftAlign={true}>
							<Image src='/testIcon.svg' height={30} width={30} alt='Test crypto icon' />
							Bitcoin
						</TableData>
						<TableData appendAfter={'USD'}>21213</TableData>
						<TableData appendBefore={'+'} appendAfter={'%'}>
							3.2
						</TableData>
						<TableData appendAfter={'USD'}>432 453 432 320</TableData>
						<TableData>[]</TableData>
					</TableRow>
				</TableBody>
			</Table>
		</main>
	);
};

export default explore;
