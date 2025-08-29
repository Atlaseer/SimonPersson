import { Link, BrowserRouter } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>
                <ul className='menu-items'>
                    <li><Link to="/">Story</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
