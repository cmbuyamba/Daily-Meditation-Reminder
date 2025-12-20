import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Conference from './components/Conference';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Conference />
        <Contact />
        <Footer />
      </div>
    </FluentProvider>
  );
}

export default App;
