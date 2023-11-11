import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import SignUp from './pages/signup.jsx'
import NavBar from './components/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <NavBar />
        <Routes>
          
          <Route path="" element={<App />} />     
          <Route path="/SignUp" element={<SignUp />} />
          
          
        </Routes>
      </Router>
  </React.StrictMode>,
)
