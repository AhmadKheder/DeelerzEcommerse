import { Product } from "./types";


export const getProducts = (): Promise<Product[]> => {
    return fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => data);
}
