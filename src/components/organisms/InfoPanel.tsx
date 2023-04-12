import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../state/reduxHooks";
import { uiActions } from "../../state/uiSlice";
import ArrowButton from "../atoms/ArrowButton";

function InfoPanel() {
	const { isInfoPanelOpen } = useAppSelector((state) => state.ui);
	const dispatch = useAppDispatch();

	return (
		<div
			className={classNames(
				"dark:bg-base-100",
				"dark:md:border-l-2",
				"dark:border-dmBorderColor",
				"dark:border-t-2",
				"dark:md:border-t-0",
				"fixed",
				"bottom-0",
				"left-0",
				"h-full",
				"w-full",
				"bg-base-100",
				"z-500",
				"drop-shadow-sm",
				"transition-transform",
				"z-[100]",
				"md:max-w-[300px]",
				"md:left-auto",
				"md:right-0",
				"md:h-full",
				"md:translate-y-0",
				"xxl:translate-x-0",
				isInfoPanelOpen
					? "translate-y-[10rem] md:translate-x-0"
					: "translate-y-[95%] md:translate-x-[27rem]",
			)}
		>
			<ArrowButton
				onClick={() => dispatch(uiActions.toggleInfoPanel())}
				arrowDirection={isInfoPanelOpen}
			/>

			<div className="content-wrapper" />
		</div>
	);
}

export default InfoPanel;
