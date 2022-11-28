import { action, computed, observable } from "mobx";
import { getProducts } from "../Common/api";
import { Product } from "../Common/types";
// import { DataContext } from "./context";

// import uuidv4 from "uuid/v4"


export class ProductsStore {
    // const {context} = useContext(DataContext)
    @observable products: Product[] = []

    @action
    fetchProducts = async () => {
        getProducts().then(products => this.products = products);

    }
    // componentDidMount() {
    //     this.fetchProducts();
    // }
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
    // useEffect() {
    //     this.fetchProducts();
    // }






    
    // @action addProduct = (product: Product) => {
    //     this.products.push({ ...product, id: uuidv4() })
    // }
    // @action removeProduct = (id: string) => {
    //     this.products.filter(product => product.id !== id)
    // }
    // @computed get info() {
    //     return {
    //         total: this.products.length
    //     }
    // }

}
// export default createContext(new ProductsStore())