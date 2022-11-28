import { ProductsStore } from "../stores/ProductsStore";
export interface Product {
    id: number;
    title: string;
    category: string;
    image: string;
    rating: { rate: number; count: number }
}
export type RootStateContextValue = {
    productsStore: ProductsStore
};