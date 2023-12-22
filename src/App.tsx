import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonAppBar from "./components/header";
import LandingPage from "./components/landing-page";
import Footer from "./components/footer";
import ContactUsComponent from "./components/form-page";
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer position="bottom-center" limit={ 1 } />
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
