import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MarketUpdates from "./pages/MarketUpdates";
import ChoosUs from "./pages/ChoosUs";
import JoinUs from "./pages/JoinUs";
import Footer from "./pages/Footer";
import { UseCryptoContextProvider } from "./contexts/UseCryptoContextProvider";
function App() {
  return (
    <UseCryptoContextProvider>
      <HomePage />
      <MarketUpdates />
      <ChoosUs />
      <JoinUs />
      <Footer />
    </UseCryptoContextProvider>
  );
}

export default App;
