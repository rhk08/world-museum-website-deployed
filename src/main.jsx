import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './gsap-brand.css';
import './index.css';
import './styles/personlized-stylesheet.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/world-museum-website-deployed/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
