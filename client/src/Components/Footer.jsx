import { useLocation } from 'react-router-dom';

function Footer() {

    const location = useLocation();
    if (location.pathname === '/flashcards') return null;
    return (
        <footer> 
            <p>&copy; {new Date().getFullYear()} Simon Persson</p>
        </footer>
    )
}

export default Footer;
