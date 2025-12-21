import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import MembershipPage from './pages/MembershipPage';
import VolunteerPage from './pages/VolunteerPage';
import AboutPage from './pages/AboutPage';
import LeadershipPage from './pages/LeadershipPage';
import FellowshipMinistriesPage from './pages/FellowshipMinistriesPage';
import ProgramsActivitiesPage from './pages/ProgramsActivitiesPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/fellowship-ministries" element={<FellowshipMinistriesPage />} />
            <Route path="/programs-activities" element={<ProgramsActivitiesPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <BackToTop />
          <ChatWidget />
        </div>
      </Router>
    </FluentProvider>
  );
}

export default App;
