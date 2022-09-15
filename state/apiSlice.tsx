import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coinsApi = createApi({
	reducerPath: 'coinsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.coingecko.com/api/v3/',
	}),
	endpoints: builder => ({
		getCoins: builder.query({
			query: () =>
				'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h',
		}),
	}),
});

export const { useGetCoinsQuery } = coinsApi;
