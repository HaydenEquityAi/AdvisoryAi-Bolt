import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import AITechStack from './pages/AITechStack';
import AIAutomation from './pages/AIAutomation';
import StrategicAI from './pages/StrategicAI';
import CustomSoftware from './pages/CustomSoftware';
import EmailMarketing from './pages/EmailMarketing';
import BusinessIntelligence from './pages/BusinessIntelligence';
import AdvisoryTraining from './pages/AdvisoryTraining';
import About from './pages/About';
import ClientStories from './pages/ClientStories';
import Contact from './pages/Contact';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-tech-stack" element={<AITechStack />} />
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/strategic-ai-implementation" element={<StrategicAI />} />
            <Route path="/custom-software-development" element={<CustomSoftware />} />
            <Route path="/intelligent-email-marketing" element={<EmailMarketing />} />
            <Route path="/business-intelligence-analytics" element={<BusinessIntelligence />} />
            <Route path="/advisory-training" element={<AdvisoryTraining />} />
            <Route path="/about" element={<About />} />
            <Route path="/client-stories" element={<ClientStories />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;