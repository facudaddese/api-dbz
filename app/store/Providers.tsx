"use client";

import { Provider } from "react-redux";
import { store } from "./store";

const initialState = store.getState();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store} serverState={initialState}>
      {children}
    </Provider>
  );
};
