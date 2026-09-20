import { useState } from 'react'
import './Styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import Projects from './Pages/Projects.jsx';
import NotFound from './Pages/NotFound.jsx';
import FlipcardsPage from './Pages/Flipcards/FlashcardsPage.jsx';
import IsThisAiPage from './Pages/IsThisAi/IsThisAiPage.jsx';


function App() {

  return (
    <BrowserRouter basename='/SimonPersson'>
      <Header/>

        <main>
          <Routes>

            <Route path="/" element={<AboutMe/>} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/flashcards" element={<FlipcardsPage/>}/>
            <Route path="/isthisai" element={<IsThisAiPage/>}/>
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      <Footer/>

    </BrowserRouter>
  )
}

export default App
