import React from 'react';
interface Props {
	children: string;
	pageName?: string;
}
const HeaderGreeting = ({ children, pageName }: Props) => {
	return (
		<div className='flex flex-col items-start gap-2 text-font'>
			<p className='text-lg'>
				Hi <span className='font-bold'>{children}</span>
			</p>
			{pageName && <p className='text-md'>Thats your {pageName}</p>}
		</div>
	);
};

export default HeaderGreeting;
