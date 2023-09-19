
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { Component } from 'react';
import Footer from './Components/Footer';
// import Container from 'react-bootstrap/Container';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";


class App extends Component {
  state = {clicked : false };

  handleClick = ()  =>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
  return (
    <div>
      
      <nav className='nav'>
    
      <Link to={'/'} className='navbar_logo' id='home'>Senchola University.</Link>

      
      <div className='navbar_div'>
        <ul id='navbar' className= {this.state.clicked ? "#navbar active" : "#navbar"}>
          <li className='navbar_li'><Link to={'/'} className='navbar_link active' id='home'>Home</Link></li>
          <li className='navbar_li'><Link to={'/'} className='navbar_link' id='home'>About Us</Link></li>
          <li className='navbar_li'><Link to={'/'} className='navbar_link' id='home'>Services</Link></li>
          <li className='navbar_li'><Link to={'/'} className='navbar_link' id='home'>Why Senchola</Link></li>
          <li className='navbar_li'><Link to={'/'} className='navbar_link' id='home'>Form</Link></li>
          <li className='navbar_li'><Link to={'/contact'} className='navbar_link' id='home'>Contact Us</Link></li>

          {/* <button className='navbar_li navbar_link navabar_btn navabar_btn1'>Login</button>
          <button className='navbar_li navbar_link navabar_btn navabar_btn2'>Sign up</button> */}
        </ul>
      </div>

      <div id='mobile' onClick={this.handleClick}>
            {/* <i className='fas fa-bars menu'></i>
            <i className='fas fa-times menu'></i> */}
            <i id='bars' 
            className={this.state.clicked  ? 'fas fa-times' : 'fas fa-bars' }
            ></i>
      </div>
     
      </nav>
     

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
     
      {/* <Home /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
}

export default App;
