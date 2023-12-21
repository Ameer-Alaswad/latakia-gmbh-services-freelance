import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonAppBar from "./components/header";
import LandingPage from "./components/landing-page";
import Footer from "./components/footer";
import ContactUsComponent from "./components/form-page";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/contact-us" element={ <ContactUsComponent /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
