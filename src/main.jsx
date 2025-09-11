import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'   
import './index.css'
import App from './App.jsx'

// Register the service worker (for offline/PWA support)
registerSW({
  onNeedRefresh() {},
  onOfflineReady() {}
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

