import { BrowserRouter } from 'react-router-dom';

function Footer() {
    return (
        <footer> 
            <p>&copy; {new Date().getFullYear()} Simon Persson</p>
        </footer>
    )
}

export default Footer;
