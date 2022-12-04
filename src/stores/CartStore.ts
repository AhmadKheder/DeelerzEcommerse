import { action, computed, makeAutoObservable, observable } from "mobx";
import { Product } from "../Common/types";

export default class CartStore {
    constructor() {
        makeAutoObservable(this)
    }
    @observable
    cartProducts: Product[] = [];

    @action
    addCartProduct = (product: Product) => {

        this.isProductInCart(product.id) ?
            this.increaseQuantity(product.id) :
            this.cartProducts.push({ ...product, quantity: 1 })
        // console.log("this.cartProducts", this.cartProducts)
    }

    @action
    deleteCartProduct = (id: number) => {
        this.cartProducts = this.cartProducts.filter(product => product.id !== id);
    }
    @action
    increaseQuantity = (id: number) => {
        this.cartProducts = this.cartProducts.map(product => product.id === id ? { ...product, quantity: product.quantity! + 1 } : product);
    }
    @action
    decreaseQuantity = (id: number) => {
        this.cartProducts = this.cartProducts.map(product => product.id === id ? { ...product, quantity: product.quantity! - 1 } : product);
    }

    @action
    setProductQuantity = (id: number, quantity: number) => {
        this.cartProducts = this.cartProducts.map(product => product.id === id ? { ...product, quantity: quantity } : product);
    }
    @computed
    get isProductInCart() {
        return (id: number) => this.cartProducts.some(product => product.id === id);
    }

    @computed
    get getCartProducts() {
        return this.cartProducts
    }
    @computed
    get totalCartProducts() {
        return this.cartProducts.length;
    }
    @computed
    get totalCartPrice() {
        return this.cartProducts.reduce((total, product) => total + (product.price * product.quantity!), 0);
    }
    @computed
    checkoutOrderedProductQuantity(id: number) {
        return this.cartProducts.find(product => product.id === id)?.quantity;
    }
    @computed
    get cartProductsQuantity() {
        return this.cartProducts.reduce((total, product) => total + product.quantity!, 0);
    }
    @computed
    getProductQuantity(id: number | undefined) {
        return id &&
            this.cartProducts.find(product => product.id === id)?.quantity;
    }

}

