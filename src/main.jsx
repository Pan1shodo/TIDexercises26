import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './parseInit.js'
import App from './App.jsx'

// surface failed Parse calls (handlers have no try/catch); remove once there's real error UI
window.addEventListener('unhandledrejection', (e) => alert(e.reason?.message ?? e.reason))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
