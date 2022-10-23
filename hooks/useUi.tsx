import { useDispatch } from 'react-redux';
import { useAppSelector } from '../state/reduxHooks';
import { uiActions } from '../state/uiSlice';

const useUiHandling = () => {
  const dispatch = useDispatch();
  const { lightMode } = useAppSelector(state => state.ui);

  const checkTheme = () => {
    const theme = JSON.parse(localStorage.getItem('lightMode') || 'true');
    dispatch(uiActions.setTheme(!theme));
  };

  const toggleTheme = () => {
    dispatch(uiActions.toggleTheme());
    localStorage.setItem('lightMode', JSON.stringify(lightMode));
  };

  const setNotificationPopup = (isOpen: boolean, isSuccess: boolean = true, content: string) => {
    dispatch(
      uiActions.toggleNotificationPopup({
        open: isOpen,
        success: isSuccess,
        content: content,
      })
    );
  };

  return { setNotificationPopup, toggleTheme, checkTheme };
};

export default useUiHandling;
