import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/HRnet.png";
import "./styles.scss";


function Header() {

    //useLocation hook react pour obtenir l'URL actuelle
    const location = useLocation();

    //Définir le lien et le label en fonction de l'URL actuelle
    let link = "";
    let label = "";

    //si l'URL actuelle est "/", le lien doit être "/employees" et le label "View Employees", sinon le lien doit être "/" et le label "Create Employee"
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