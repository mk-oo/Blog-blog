import { Link } from "react-router-dom";

const Navbar = () => {
    const home = "/";
    const contact = "/contact";
    const about = "/about";

    return ( 
        <nav className="navbar">
            <h1>Mk Blog</h1>
            <div className="content">

                {/* Router Link To not request a new page every time */}
                
                <Link to={home}>Home</Link>
                <Link to={contact}>Contact Us</Link>
                <Link to={about}>About Me</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;