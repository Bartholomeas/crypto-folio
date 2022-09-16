import React from 'react';
import { useRouter } from 'next/router';

const CoinDetail = () => {
	const router = useRouter();
	const { pid } = router.query;

	console.log(pid);

	return <div>CoinDetail {pid}</div>;
};

export default CoinDetail;
