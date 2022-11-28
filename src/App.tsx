import { useObserver } from "mobx-react-lite";
import "./App.css";
import Header from "./Components/Header/Header";
import PremiumCollection from "./Components/Main/PremiumCollection";
import NavBar from "./Components/NavBar/NavBar";

interface Props {}
interface State {}
function App() {
  return useObserver(() => {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <PremiumCollection />
      </div>
    );
  });
}

export default App;
