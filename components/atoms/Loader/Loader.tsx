import React from 'react';

const Loader = () => {
	return (
		<div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center gap-sm rounded-full bg-support p-xs'>
			<span className='animate-spin inline-block w-[3rem] h-[3rem] border-4 rounded-full border-t-accent border-b-accent border-l-white border-r-white'></span>
			<p className='text-font font-semibold text-md'>Loading..</p>
		</div>
	);
};

export default Loader;
