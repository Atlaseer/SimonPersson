import { useState } from 'react'
import './Styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Book from './Pages/Book.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import Projects from './Pages/Projects.jsx';


function App() {

  return (
    <BrowserRouter basename='/SimonPersson'>
      <Header/>

      <Routes>

        <Route path="/" element={<Book/>} />

      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App
