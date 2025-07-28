import { BrowserRouter } from 'react-router-dom';
import '../Styles/header.css';

function Header() {
    return (
        <BrowserRouter>
        <header className="header">
            <h1>Simon Persson</h1>
        </header>
        </BrowserRouter>
    );
}

export default Header;