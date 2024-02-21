import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App_1value from './App_1value.jsx'
import App_2count from './App_2count.jsx'
import App_3obj from './App_3obj.jsx'
import Props from './Props.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
{/*     <App_1value />
    <App_2count />
    <App_3obj />
    <Props /> */}
    </BrowserRouter>

  </React.StrictMode>,
)
