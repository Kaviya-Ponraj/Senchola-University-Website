import React from 'react'
// import Container from 'react-bootstrap/Container';
import './Contact.css';
import { AiTwotoneStar } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import GoogleMaps from './GoogleMaps';


const Contact = () => {
  return (
    <>
    <div className="contact">
    <div className='container_wrapper my-5'>
      
      <div className="left_full">
      
   <p className='contact__h1p'>CONTACT FORM</p>
   <p className='contact_h4p'>Get in touch</p>
   <p className='contact__p'>Enter your message to reach out</p>
   
   <form>
    <label for='name'className='form_label'>Name </label> <br />
    <input type='text' placeholder='Enter Your Name' id='name' className='form_input'></input>
    <br />
    <label for='email' className='form_label'>Email address </label> <AiTwotoneStar className='start_icon'/> <br />
    <input type='text' placeholder='Enter Your Email' id='email' required className='form_input'></input>
    <br />
    <label for='phone' className='form_label'>Phone Number </label> <AiTwotoneStar className='start_icon'/> <br />
    <input type='tel' placeholder='Enter Your Phone Number' id='phone' pattern="[0-9]{5}-[0-9]{5}" required className='form_input'></input>
    <br />
    <label for="comment or message" className='form_label'>Comment or Message</label> <br />

<textarea id="comment or message" name="comment or message" rows="4" cols="20" placeholder='Enter Your Message' className='textArea'>

</textarea>
    <br />

    <button type="submit" className='form__send'>SEND</button>
   </form>

   <hr className='text-muted hr'/>

    <div className="contact_details_wrapper">
  <div className="contact__details contact__details1 ">
    <BsTelephone className='contact__downicon'/>
    <div className="details_right">
    <p className='contact__detailsdown'>PHONE</p>
    <p className='contact__downvalue phone'> <a>+91 96677 87882</a> </p>
    </div>
   </div>

   <div className="contact__details">
   <HiOutlineMail className='contact__downicon'/>
    <div className="details_right">
    <p className='contact__detailsdown'>EMAIL</p>
    <p className='contact__downvalue'>info@marcc.au</p>
    </div>
   </div>

  
   </div>
   <div className="contact__details mt-2">
   <FaLocationDot className='contact__downicon'/>
    <div className="details_right">
    <p className='contact__detailsdown'>ADDRESS</p>
    <p className='contact__downvalue'>The Estate, 8th Floor, Dickenson Road, <br /> 
     Bangalore - 560042</p>
    </div>
   </div>
   
   {/* <GoogleMaps className='maps'/> */}
      </div>
      {/* <div className="maps_wrapper">
      <GoogleMaps className='maps'/>
      </div> */}
      <div className="map_bg">
      <img src={require('../Senchola images1/1/maps.jpg')} alt='map' className='map'/>
      </div>
     
      <div className="right_full">
      
      </div>
   
    
   </div>
   </div>
    </>
  )
}
// AIzaSyBTDAP2yv3Z7t5UFVu-cMRBtEEsre8tccQ
export default Contact