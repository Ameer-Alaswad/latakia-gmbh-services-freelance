import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonAppBar from "./components/header";
import LandingPage from "./components/landing-page";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
