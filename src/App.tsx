import { useObserver } from "mobx-react-lite";
import { useRef } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { LandGround } from "./Components/HomeLandGround/LandGround";
import { PremiumCollection } from "./Components/Main/PremiumCollection";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./Components/ScrollToTop";
import { Cart } from "./pages/shoppingCart/Cart";
import { useRootState } from "./stores/RootStateContextValue";

interface Props {}
interface State {}
function App() {
  return useObserver(() => {
    const cart = useRef(null);

    const productsStore = useRootState().productsStore;
    productsStore.fetchProducts();

    return (
      <div className="App">
        <Header />
        <NavBar reference={cart} />
        <LandGround />
        <PremiumCollection />
        <section ref={cart}>
          <Cart />
        </section>
        <div style={{ border: "1px solid red" }}>
          <ScrollToTop />
        </div>
      </div>
    );
  });
}

export default App;
