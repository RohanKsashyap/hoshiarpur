import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import BusinessPage from './pages/BusinessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdvertisingPage from './pages/AdvertisingPage';
import BusinessSectorsPage from './pages/BusinessSectorsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/advertising" element={<AdvertisingPage />} />
            <Route path="/sectors" element={<BusinessSectorsPage />} />
            <Route path="/city/:cityName" element={<CityPage />} />
            <Route path="/business/:businessId" element={<BusinessPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;