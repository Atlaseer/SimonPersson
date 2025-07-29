import { useEffect } from 'react';
import '../Styles/webpage.css';
import BookScript from '../Scripts/BookScript.js';

function WebPage() {
    useEffect(() => {
        BookScript();
    }, []);
    return(
      
        <main className="homepage">
                <img 
                src="assets/face-img.jpg" 
                alt="corner-pic" 
                className="corner-img" 
                />
                <div class="book">
                <div class="page left-page" id="leftPage">Left-page</div>
                <div class="page right-page" id="rightPage">Right-page</div>
                </div>
        </main>
       
    )
}

export default WebPage;
