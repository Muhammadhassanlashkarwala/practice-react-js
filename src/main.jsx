import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Profile } from './components/Profile'
import App from './App.jsx'
import './index.css'
import EventHandling from './components/EventHandling.jsx'
// import Practice from './Practice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <EventHandling /> */}
    {/* <Profile /> */}
    {/* <Practice /> */}
  </StrictMode>,
)
