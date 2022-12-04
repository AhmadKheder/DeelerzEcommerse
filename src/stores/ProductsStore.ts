import { action, computed, makeAutoObservable, observable } from "mobx";
import { getProducts } from "../Common/api";
import { Product } from "../Common/types";

export default class ProductsStore {
    constructor() {
        makeAutoObservable(this)
    }
    @observable
    products: Product[] = []

    @action
    fetchProducts = async () => {
        getProducts().then(products => this.products = products);

    }

    @action
    addProduct = (product: Product) => {
        this.products.push(product);
    }
    @action
    deleteProduct = (id: number) => {
        this.products = this.products.filter(product => product.id !== id);
    }
    @computed
    get total() {
        return this.products.length;
    }

    @computed
    get getProducts() {
        return this.products;
    }






}

