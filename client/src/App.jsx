import { useState } from 'react'
import './Styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import Projects from './Pages/Projects.jsx';
import NotFound from './Pages/NotFound.jsx';


function App() {

  return (
    <BrowserRouter basename='/SimonPersson'>
      <Header/>

        <main>
          <Routes>

            <Route path="/" element={<AboutMe/>} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      <Footer/>

    </BrowserRouter>
  )
}

export default App
