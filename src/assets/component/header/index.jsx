import { Link, useLocation } from "react-router-dom";
import logo from "../../logo/HRnet.png";
import "./styles.scss";


function Header() {

    const location = useLocation();

    let link = "";
    let label = "";

    if (location.pathname === "/") {
        link = "/employees";
        label = "View Employees";
    } else {
        link = "/";
        label = "Create Employee";
    }

        return (
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo HRnet" />
                    <p>WEALTH HEALTH</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to={link} className="link">{label}</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }

export default Header;