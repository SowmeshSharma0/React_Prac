import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'
import { CardProvider } from './context/CardContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <GlobalProvider>
      <CardProvider>
        <StrictMode>
        <App />
        </StrictMode>
      </CardProvider>
    </GlobalProvider>
  </ThemeProvider>
)
