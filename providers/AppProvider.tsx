import { Provider } from "react-redux";
import store from "../state/store";

interface ProviderProps {
	children: React.ReactNode;
}

function AppProvider({ children }: ProviderProps) {
	return <Provider store={store}>{children}</Provider>;
}

export default AppProvider;
