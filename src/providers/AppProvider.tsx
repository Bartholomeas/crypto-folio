import React from "react";
import { Provider } from "react-redux";
import store from "../state/store";

interface ProviderProps {
	children: React.ReactNode;
}
export const FirebaseContext = React.createContext({});

function AppProvider({ children }: ProviderProps) {
	return <Provider store={store}>{children}</Provider>;
}

export default AppProvider;
