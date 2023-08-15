import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WelcomeView from './components/WelcomeView';

import NotFound from './components/NotFound';
import RotatingImageGallery from './components/rotating_image_gallery';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeView />} />
        
        <Route path="/galeria" element={<RotatingImageGallery />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;