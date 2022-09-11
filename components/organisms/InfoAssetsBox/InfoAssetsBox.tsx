import React from 'react';
import ChangeInValue from '../../atoms/ChangeInValue/ChangeInValue';

const InfoAssetsBox = () => {
	return (
		<div className='flex flex-col gap-sm p py-sm bg-accentDark text-white rounded '>
			<p>Biggest winner</p>
			<div className='flex items-center gap-sm'>
				<p className='font-semibold text-md'>Atom</p>
				<ChangeInValue>20</ChangeInValue>
			</div>
		</div>
	);
};

export default InfoAssetsBox;
