import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Fakestoreapi from './UserData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fakestoreapi />
  </StrictMode>,
)
