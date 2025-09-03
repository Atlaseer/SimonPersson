import { Link, BrowserRouter } from 'react-router-dom';

function Header() {
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
