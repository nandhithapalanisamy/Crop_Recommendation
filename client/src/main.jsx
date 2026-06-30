import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout.jsx"
import { Navigate } from 'react-router-dom'
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
      <App/>  
    
  </BrowserRouter>
  
);