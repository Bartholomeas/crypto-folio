import { MdStarBorder } from "react-icons/md";
import useUserRequest from "../../../hooks/useUserRequest";

interface Props {
	isBox?: boolean;
	funcArg: string;
}

function FavouriteButton({ isBox = false, funcArg = "" }: Props) {
	const { addToFavourites } = useUserRequest();

	return (
		<button
			type="button"
			onClick={() => addToFavourites(funcArg)}
			className={`group fav-btn flex items-center justify-end w-full py-xs
		${
			isBox &&
			"dark:bg-dmBaseElement w-[3rem] h-[3rem] rounded-xl justify-center bg-baseLight text-fontLight"
		} w-full ${!isBox && "px-xs"}`}
		>
			<MdStarBorder className="fav-btn group-hover:text-yellow-500" />
		</button>
	);
}

export default FavouriteButton;
