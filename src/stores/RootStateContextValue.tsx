import React, { createContext } from "react";
import { Product, RootStateContextValue } from "../Common/types";
import ProductsStore from "./ProductsStore";

const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);
const productsStore = new ProductsStore();
type Props = {
  children: React.ReactNode;
  products: Product[];
};

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
// export const withStore = (Component) => (props) => {
//   return <Component {...props} store={useRootState()} />;
// };
