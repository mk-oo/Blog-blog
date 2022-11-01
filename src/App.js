import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import BlogDetails from './BlogDetails';  

function App() {

  
  // Any Js code can be written here ...


  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
        <Routes >
          <Route path="/" element={<Home/>} />  
          <Route path="/contact" element={<Contact/>} />  
          <Route path="/about" element={<About/>} />  
          <Route path="/blogs/:id" element={<BlogDetails/>} />  


        </Routes >
      </div>
      </div>
    </Router>

  );
}

export default App;
