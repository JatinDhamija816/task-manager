import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './contexts/DataProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataProvider>
  </BrowserRouter>
)
