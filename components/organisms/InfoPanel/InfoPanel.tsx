import { useAppDispatch, useAppSelector } from "../../../state/reduxHooks";
import { uiActions } from "../../../state/uiSlice";
import ArrowButton from "../../atoms/ArrowButton/ArrowButton";

function InfoPanel() {
	const { isInfoPanelOpen } = useAppSelector((state) => state.ui);
	const dispatch = useAppDispatch();

	return (
		<div
			className={`dark:bg-dmBase dark:md:border-l-2 dark:border-dmBorderColor dark:border-t-2 dark:md:border-t-0
			 fixed bottom-0 left-0 h-full w-full bg-baseLight z-500 drop-shadow-sm transition-transform
			z-[100]

            ${isInfoPanelOpen ? "translate-y-[10rem]" : "translate-y-[95%]"}
            md:max-w-[300px] md:left-auto md:right-0 md:h-full md:translate-y-0 ${
							isInfoPanelOpen ? "md:translate-x-0" : "md:translate-x-[27rem]"
						} xxl:translate-x-0`}
		>
			<ArrowButton
				onClickFn={() => dispatch(uiActions.toggleInfoPanel())}
				arrowDirection={isInfoPanelOpen}
			/>

			<div className="content-wrapper" />
		</div>
	);
}

export default InfoPanel;
