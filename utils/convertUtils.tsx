export const convertDate = (dateArg: string, format: string) => {
	const date = new Date(dateArg);
	let newFormat = format;

	const day = date.getDate();
	const month = date.getDate() + 1;
	const year = date.getFullYear();

	newFormat = newFormat.replace("MM", month.toString()).padStart(2, "0");

	if (newFormat.indexOf("yyyy") > -1) {
		newFormat = newFormat.replace("yyyy", year.toString());
	} else if (newFormat.indexOf("yy") > -1) {
		newFormat = newFormat.replace("yy", year.toString().substr(2, 2));
	}

	newFormat = newFormat.replace("dd", day.toString().padStart(2, "0"));
	return newFormat;
};

export const addSpacesToNumber = (numberData: number) =>
	numberData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
