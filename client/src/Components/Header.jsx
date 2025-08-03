import { BrowserRouter } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>
                <ul className='menu-items'>
                    <li>Story</li>
                    <li>Projects</li>
                    <li>About me</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
