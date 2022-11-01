const Contact = () => {
    return ( 
        <div className="contact">
            <h1>Contact</h1>
            <div className="contact-form">
                <h3>Contact Us On 01004315060</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                </form>
            </div>

        </div>            
     );
}
 
export default Contact;