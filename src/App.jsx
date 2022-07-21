import "./styles.scss";

import { GlobalContextProvider } from "./Context/GlobalContext";
import NavBar from "./Components/NavBar";
import PhotoList from "./Components/PhotoList";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <NavBar />
        <PhotoList />
        <Footer />
      </div>
    </GlobalContextProvider>
  );
}
