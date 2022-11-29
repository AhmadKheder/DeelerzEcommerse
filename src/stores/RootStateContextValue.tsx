import React, { createContext } from "react";
import { RootStateContextValue } from "../Common/types";
import CartStore from "./CartStore";
import ProductsStore from "./ProductsStore";

const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const productsStore = new ProductsStore();
  const cartStore = new CartStore();

  return (
    <RootStateContext.Provider value={{ productsStore, cartStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootState = () => React.useContext(RootStateContext);
