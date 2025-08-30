import { Link, BrowserRouter } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>
                <ul className='menu-items'>
                    <li className='button'><Link to="/">Story</Link></li>
                    <li className='button'><Link to="/projects">Projects</Link></li>
                    <li className='button'><Link to="/about">About Me</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
