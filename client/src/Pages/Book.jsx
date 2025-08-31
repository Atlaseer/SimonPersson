import { useEffect, useState } from 'react';
import '../Styles/book.css';
import faceImg  from '../assets/face-img.jpg';

function Book() {
    
    const[currentPage, setCurrentPage] = useState(0)

    const pages= [
        { left: "", right: "Hello! I'm Simon"},
        { left: "I've worked on a few projects on github!", right: "Which has taught me"},
        { left: "Fin", right: ""}
    ];

    const nextPage = () => currentPage < pages.length -1 && setCurrentPage(currentPage +1);
    const prevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1);

    const left = (pages[currentPage].left || "").trim()
    const right = (pages[currentPage].right || "").trim()
    let mode = "";

    if ( currentPage === 0 ) mode = "first"
    else if ( currentPage === pages.length -1) mode = "last"
    else if ( !left || !right) mode = "single"
    else mode="spread"

    return(
        <main className="homepage">
            <img src={faceImg} alt="portrait-of-simon" className="corner-img"/>
            <div className={`book ${
                (!pages[currentPage].left || !pages[currentPage].right) ? "single" : ""
            }`}>
                {/*This checks if the page is empty before rendering */}
                {pages[currentPage].left && (
                    <div className="page left-page" onClick={prevPage}>
                        {pages[currentPage].left}
                    </div>
                )}
       
                {pages[currentPage].right && (
                    <div className="page right-page" onClick={nextPage}>
                        {pages[currentPage].right}
                    </div>
            )}
        
            </div>
        </main>
        
    );
}

export default Book;
