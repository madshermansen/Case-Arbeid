import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitleScreen from "./pages/TitleScreen";
import "./styles/App.css";
import PainoMeter from "./pages/PainoMeter";
import InfoScreen from "./pages/InfoScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TitleScreen />} />
        <Route path="/PainoMeter" element={<PainoMeter />} />
        <Route path="/InfoScreen" element={<InfoScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
