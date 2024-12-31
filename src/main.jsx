import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Praveen from './Praveen.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Praveen />
    <App />
  </StrictMode>,
)
