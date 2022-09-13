import React from 'react';
import useReduxDispatch from '../../../hooks/useReduxDispatch';
import ArrowButton from '../../atoms/ArrowButton/ArrowButton';

const InfoPanel = () => {
	const { isInfoPanelOpen, toggleInfoPanel } = useReduxDispatch();

	return (
		<div
			className={`fixed bottom-0 left-0 h-full w-full bg-baseLight z-500 drop-shadow-sm transition-transform 
            ${isInfoPanelOpen ? 'translate-y-[10rem]' : 'translate-y-[95%]'}
            md:max-w-[300px] md:left-auto md:right-0 md:h-full md:translate-y-0 ${
							isInfoPanelOpen ? 'md:translate-x-0' : 'md:translate-x-[25rem]'
						} xxl:translate-x-0`}>
			<ArrowButton onClickFn={toggleInfoPanel} arrowDirection={isInfoPanelOpen} />

			<div className='content-wrapper'></div>
		</div>
	);
};

export default InfoPanel;
