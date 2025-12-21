import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import MembershipPage from './pages/MembershipPage';
import VolunteerPage from './pages/VolunteerPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import JoinNowButton from './components/JoinNowButton';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
          </Routes>
          <Footer />
          <BackToTop />
          <JoinNowButton />
        </div>
      </Router>
    </FluentProvider>
  );
}

export default App;
