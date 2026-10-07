// Part 1 setup — TODO:
// 1. Import `BrowserRouter` from 'react-router-dom'
// 2. Wrap <App /> in <BrowserRouter> ... </BrowserRouter> (inside StrictMode)
//    Every router hook/component (Link, Routes, useParams...) must live inside a router,
//    or you'll get an error like "useHref() may be used only in the context of a <Router>"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
