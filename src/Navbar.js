import { Link } from "react-router-dom";

const Navbar = () => {
    const Home = "/";
    const Contact = "/contact";
    const about = "/about";
    return ( 
        <nav className="navbar">
            <h1>Mk Blog</h1>
            <div className="content">

                {/* Router Link To not request a new page every time */}
                
                <Link to={Home}>Home</Link>
                <Link to={Contact}>Contact Us</Link>
                <Link to={about}>About Me</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;