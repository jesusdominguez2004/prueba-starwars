import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contador from './components/Contador.jsx'
import Variable from './components/Variable.jsx'
import PeticionApi from './components/PeticionApi.jsx'
import PruebaSW from './components/PruebaSW.jsx'
import PruebaSW2 from './components/PruebaSW2.jsx'
import PruebaSW3 from './components/PruebaSW3.jsx'
import PruebaSH from './components/PruebaSH.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PruebaSW3 />
  </React.StrictMode>,
)
