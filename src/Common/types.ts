import CartStore from "../stores/CartStore";
import ProductsStore from "../stores/ProductsStore";
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number },
    quantity?: number
}
export type RootStateContextValue = {
    productsStore: ProductsStore,
    cartStore: CartStore
};