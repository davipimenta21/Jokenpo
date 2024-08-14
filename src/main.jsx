import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Jogo from './Jogo.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jogo />
  </StrictMode>,
)
