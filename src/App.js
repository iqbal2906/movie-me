import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import RoutesConfig from "./config/RoutesConfig";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <RoutesConfig />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
