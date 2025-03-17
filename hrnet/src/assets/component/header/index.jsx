import { Link } from "react-router-dom";
import logo from "../../logo/HRnet.png";
import "./styles.scss";


function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo HRnet" />
                <p>WEALTH HEALTH</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" className="homeLink">Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;