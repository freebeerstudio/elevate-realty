import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'  // Tailwind 4 with design tokens
import './index.css'     // Global styles (kept for compatibility)
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
