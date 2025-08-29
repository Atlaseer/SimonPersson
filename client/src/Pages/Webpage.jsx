import { useEffect, useState } from 'react';
import '../Styles/webpage.css';
//import {BookScript} from '../Scripts/BookScript.js';
import faceImg  from '../assets/face-img.jpg';

function WebPage() {
    
    const[currentPage, setCurrentPage] = useState(0)

    const pages= [
        { left: "", right: "Hello! I´m Simon"},
        { left: "I´ve worked on these projeccts", right: "Which has taught me"},
        { left: "Fin", right: ""}
    ];

    const nextPage = () => currentPage < pages.length -1 && setCurrentPage(currentPage +1);
    const prevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1);

    return(
        <main className="homepage">
            <img src={faceImg} alt="corner-pic" className="corner-img"/>
            <div className="book">
                <div className="page left-page" onClick={prevPage}>
                    {pages[currentPage].left}
                </div>
                <div className="page right-page" onClick={nextPage}>
                    {pages[currentPage].right}
                </div>
            </div>
        </main>
        
    );
}

export default WebPage;
