import React from 'react'
import './Footer.css';
import Form from 'react-bootstrap/Form';
import { SiMinutemailer } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs'; 
import { BsYoutube } from 'react-icons/bs'; 
import { FaSquareFacebook } from 'react-icons/fa6'; 
import { BsInstagram } from 'react-icons/bs'; 
import {  BsTwitter } from 'react-icons/bs';
import {  RiCopyrightLine } from 'react-icons/ri';

function Footer() {
  return (
 <div className='container-fluid footer-total'>
    <div className='container col-ft '>


       <div className='col-ft1'>
            <h4>Senchola</h4>
             <p>We help ambitious companies scale
                through our exclusive global network of
             freelance talent, outsoucing services
                 and market insights. Join Senchola to 
                accelerate and scale your business growth.</p>

       </div>


       <div className='col-ft2'>
              <div className='ft2-a'>
                    <h6>Use Cases</h6>
                    <p className='pt-2'> UI Design</p>
                    <p>UX Design</p>
                    <p>UI Design</p>
                    <p>UX Design</p>
                    <p>UI Design</p>
                    <p>Prototyping</p>
              </div>   
               
              <div className='ft2-b'>
                 <h6>Explore</h6>
                    <p className='pt-2'>Figma</p>
                    <p>Customers</p>
                    <p>Why I Love Figma</p>
                    <p>Figma</p>
                    <p>Customers</p>
                    <p>Why I love Figma</p>
              </div>

              <div className='ft2-c'>
                 <h6>Resources</h6>
                    <p className='pt-2'>Resources Hub</p>
                    <p>Support</p>
                    <p>Education</p>
                    <p>Resources Hub</p>
                    <p>Support</p>
                    <p>Education</p>
              </div>
       </div>


       <div className='col-ft3'>
               <div className='ft3-a'>
                     <p> Connect With Senchola Technologies</p>
                     <Form.Control size="md" type="text" placeholder="Email" />
                     <div className='footer-icon'><SiMinutemailer/></div>
                     <div className='footer-sm-icons mt-4'>
                        <div> <BsLinkedin/></div>  <div><BsYoutube/> </div> <div><FaSquareFacebook/> </div> <div><BsInstagram /> </div> <div><BsTwitter/> </div>
                     </div>
               </div>
       </div>
   
       
    </div>
   

         <div className='container fbottom pb-4' style={{textAlign:'center'}}>
           <hr className='footer-hr'/>
            All Copyrights reserved <RiCopyrightLine/> 2023 Senchola Technologies Solution
         </div>
 </div>
  )
}

export default Footer