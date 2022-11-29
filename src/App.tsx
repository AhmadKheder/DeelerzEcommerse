import { useObserver } from "mobx-react-lite";
import "./App.css";
import Header from "./Components/Header/Header";
import { PremiumCollection } from "./Components/Main/PremiumCollection";
import NavBar from "./Components/NavBar/NavBar";
import { Cart } from "./pages/shoppingCart/Cart";
import { useRootState } from "./stores/RootStateContextValue";

interface Props {}
interface State {}
function App() {
  return useObserver(() => {
    const productsStore = useRootState().productsStore;
    productsStore.fetchProducts();

    return (
      <div className="App">
        <Header />
        <NavBar />
        <PremiumCollection />
        <Cart />
      </div>
    );
  });
}

export default App;
