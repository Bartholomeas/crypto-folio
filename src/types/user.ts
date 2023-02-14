export interface PurchaseDetails {
	name: string;
	symbol: string;
	image: string;
	shoppings: {
		date: string;
		amount: number;
		price: number;
	}[];
}
