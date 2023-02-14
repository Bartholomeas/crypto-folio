import { GoogleAuthProvider } from "firebase/auth";
import React, { useMemo } from "react";
import { Provider } from "react-redux";
import { db, auth } from "../../firebaseConfig";
import store from "../state/store";

interface ProviderProps {
	children: React.ReactNode;
}
const googleProvider = new GoogleAuthProvider();

export const FirebaseContext = React.createContext({
	db,
	auth,
	googleProvider,
});

function AppProvider({ children }: ProviderProps) {
	const firebaseCtx = useMemo(
		() => ({ db, auth, googleProvider }),
		[db, auth, googleProvider],
	);

	return (
		<Provider store={store}>
			<FirebaseContext.Provider value={firebaseCtx}>
				{children}
			</FirebaseContext.Provider>
		</Provider>
	);
}

export default AppProvider;
