import React, { createContext, ReactNode, useContext } from 'react';
import RootStore from './store';

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = 'StoreContext';

export const initializeStore = (): RootStore => {
	const _store = store ?? new RootStore();

	if (!store) store = _store;

	return _store;
};

export const useRootStore = () => {
	const context = useContext(StoreContext);

	if (context === undefined) {
		throw new Error('useRootStore must be used within RootStoreProvider');
	}

	return context;
};

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
	const _store = initializeStore();

	return <StoreContext.Provider value={_store}>{children}</StoreContext.Provider>;
};
