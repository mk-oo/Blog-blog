const Navbar = () => {
    const facebook = "https://www.facebook.com/";
    const gmail = "https://mail.google.com/mail/u/0/";
    const google = "https://www.google.com/"
    return ( 
        <nav className="navbar">
            <h1>Mk Blog</h1>
            <div className="content">
                <a href={facebook}>facebook</a>
                <a href={gmail}>gmail</a>
                <a href={google}>google</a>
            </div>
        </nav>
     );
}
 
export default Navbar;