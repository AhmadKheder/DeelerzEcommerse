import { action, computed, observable, reaction } from "mobx";
import { createContext } from "react";

// import uuidv4 from "uuid/v4"
import { v4 as uuidv4 } from 'uuid';

export interface Product {
    id: string;
    title: string;
    category: string;
    image: string;
    rating: { rate: number; count: number }
}
class ProductsStore {
    constructor() {
        reaction(() => this.products, _ => console.log(this.products.length))
    }
    @observable products: Product[] = [
        {
            id: "45mp;msopke0-",
            title: "Dummy Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptopse",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: {
                rate: 3.9,
                count: 120
            }

        },

    ]
    @action addProduct = (product: Product) => {
        this.products.push({ ...product, id: uuidv4() })
    }
    @action removeProduct = (id: string) => {
        this.products.filter(product => product.id !== id)
    }
    @computed get info() {
        return {
            total: this.products.length
        }
    }
}
export default createContext(new ProductsStore)