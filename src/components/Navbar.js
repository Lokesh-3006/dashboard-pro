import { BsBell } from "react-icons/bs"
import './navbar.css'

const Navbar = () => {
    return (<nav className="navbar">
        <ul className="navbar-nav">
            <li classname="nav-item">
                <BsBell color="black" size={30} />
            </li >
            <li className="nav-item">
                <img className="profile-picture" src='https://res.cloudinary.com/dwlcqmdpm/image/upload/v1687089759/beb758a3-b947-4976-9ba0-5c7b89f49cb3_csh10r.png' alt=".." />
            </li>
            <li className="nav-item">
                <button className="button">xyz</button>
            </li>
        </ul>
    </nav>)
}

export default Navbar