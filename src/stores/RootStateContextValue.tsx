import React, { createContext } from "react";
import { RootStateContextValue } from "../Common/types";
import ProductsStore from "./ProductsStore";

const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const productsStore = new ProductsStore();
  return (
    <RootStateContext.Provider value={{ productsStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootState = () => React.useContext(RootStateContext);
