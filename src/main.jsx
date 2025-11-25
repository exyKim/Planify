import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './styles/main.css'
import Calendar from './pages/cal.jsx'

// 🔥 로고 import
import logo from "./images/logo.svg";

function Main() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/calendar');
  };

  return (
    <div className="main-container">
      <img src={logo} className="logo" />

      <div className="title-wrapper">
        <h1 className="title">PLANIFY</h1>
        <h1 className="title-mirror">PLANIFY</h1>
      </div>

      <div className="subtitle">
        나를 계획하는 시간의 또 다른 이름, PLANIFY.<br />
        Another name for the time to plan myself, PLANIFY.
      </div>

      <button className="start-button" onClick={handleStart}>
        START
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Planify">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  </BrowserRouter>
)
