import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;
const prerenderPath = rootElement.getAttribute('data-prerender-path');
const currentPath =
  window.location.pathname === '/'
    ? '/'
    : window.location.pathname.replace(/\/+$/, '');

if (rootElement.hasChildNodes() && prerenderPath === currentPath) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  if (rootElement.hasChildNodes()) {
    rootElement.innerHTML = '';
  }
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
