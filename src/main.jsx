import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header'
import Footer from './Footer'
import Data from './Data'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Data />
    <Footer />
  </StrictMode>
)
