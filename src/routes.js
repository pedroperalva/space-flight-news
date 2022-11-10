import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Header from "./components/Header";
import Error from "./views/Error";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
