import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ClothContextProvider from './Components/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClothContextProvider>
        <App />
      </ClothContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
