import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.tsx';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const rootElement = document.getElementById('root')!;

if (!PUBLISHABLE_KEY || !PUBLISHABLE_KEY.startsWith('pk_')) {
  rootElement.innerHTML = `
    <div style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; background-color: hsl(var(--background)); color: hsl(var(--foreground)); padding: 1rem;">
      <div style="text-align: center; max-width: 600px; padding: 2rem; border-radius: 0.5rem; border: 1px solid hsl(var(--border)); background-color: hsl(var(--card));">
        <h1 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--destructive)); margin-bottom: 1rem;">Configuration Error</h1>
        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">The Clerk Publishable Key is missing or invalid.</p>
        <p style="color: hsl(var(--foreground));">Please add your <code style="background-color: hsl(var(--muted)); padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: monospace;">VITE_CLERK_PUBLISHABLE_KEY</code> to the <code style="background-color: hsl(var(--muted)); padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: monospace;">.env</code> file in your project root.</p>
        <p style="margin-top: 1rem; color: hsl(var(--muted-foreground)); font-size: 0.9rem;">You can get your key from the <a href="https://dashboard.clerk.com/last-active?path=api-keys" target="_blank" rel="noopener noreferrer" style="color: hsl(var(--primary)); text-decoration: none;">Clerk Dashboard</a>.</p>
      </div>
    </div>
  `;
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </Router>
    </React.StrictMode>,
  );
}
