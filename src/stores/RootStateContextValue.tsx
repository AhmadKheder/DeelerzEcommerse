import React, { createContext } from "react";
import { RootStateContextValue } from "../Common/types";
import { ProductsStore } from "./ProductsStore";

const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);
const productsStore = new ProductsStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <RootStateContext.Provider value={{ productsStore }}>
      {children}
    </RootStateContext.Provider>
  );
};
export const useRootState = () => React.useContext(RootStateContext);
