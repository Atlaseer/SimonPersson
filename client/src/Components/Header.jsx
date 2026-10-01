import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    if (location.pathname === '/flashcards' || location.pathname === '/reflections' || location.pathname === '/isthisai' || location.pathname === '/plants') return null;


    return (
        <header>
            <div>
                <ul className='menu-items'>
                    <li><Link className='button' to="/projects">Projects</Link></li>
                    <li><Link className='button' to="/">About Me</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
