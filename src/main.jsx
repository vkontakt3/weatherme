import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.jsx'
import Header from './Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <App />
  </StrictMode>,
)
