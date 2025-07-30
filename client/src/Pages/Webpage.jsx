import { useEffect } from 'react';
import '../Styles/webpage.css';
import {BookScript} from '../Scripts/BookScript.js';
import faceImg  from '../assets/face-img.jpg';

function WebPage() {
    useEffect(() => {
        console.log("WebPage component mounted");
        BookScript();
    }, []);

    return(
     
        <main className="homepage">
                <img 
                    src={faceImg} 
                    alt="corner-pic" 
                    className="corner-img" 
                />
                <div className="book">
                    <div className="page left-page" id="leftPage">Left-page</div>
                    <div className="page right-page" id="rightPage">Right-page</div>
                </div>
        </main>
        
    );
}

export default WebPage;
