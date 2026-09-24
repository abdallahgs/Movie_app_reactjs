import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
// browser router is a component that allows you to use the react router library in your application. It provides the routing functionality and allows you to navigate between different pages in your application. It should be wrapped around the entire application, so that all components have access to the routing functionality.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <App />   
    </BrowserRouter>
  </StrictMode>,
)
