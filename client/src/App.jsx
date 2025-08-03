import { useState } from 'react'
import './Styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import WebPage from './Pages/Webpage.jsx';


function App() {

  return (
    <BrowserRouter basename='/SimonPersson'>
      <Header/>

      <Routes>

        <Route path="/" element={<WebPage/>} />

      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App
