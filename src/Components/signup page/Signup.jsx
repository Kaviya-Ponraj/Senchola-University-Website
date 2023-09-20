import React from 'react'
import img1 from "./signup-img/signup.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from "react-bootstrap"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./signup.css"
import {FcGoogle } from "react-icons/fc";
import {AiFillApple } from "react-icons/ai";
import {FaDiaspora } from "react-icons/fa6";
import Figure from 'react-bootstrap/Figure';
import { BsEyeSlash} from "react-icons/bs";



const Signup = () => {
  
  return (
    <section>
      <div className='container mt-5'> 
        <Row>
          <Col md={5} style={{marginTop:"10px"}} className='text-area'>
            <h1 style={{fontSize:"40px"}}>SIGNUP FORM</h1>
            <p style={{fontSize:"20px"}}><b>Its Quick & Easy</b></p>
            <p style={{color:"grey"}}>Enter Your Credential Details to create a new account</p>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupName" style={{ width:"350px",fontSize:"x-small"}}>
            <Form.Label>First Name    <FaDiaspora className='logo'/></Form.Label>
            <Form.Control type="Name" placeholder="Enter Your First Name" style={{fontSize:"x-small",boxShadow:"5px 5px 6px #E5E5E5"}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail" style={{ width:"350px"}}>
           <Form.Label >Email    <FaDiaspora className='logo'/> </Form.Label>
           <Form.Control type="email" placeholder="Enter Your Email" style={{fontSize:"x-small",boxShadow:"5px 5px 6px #E5E5E5"}}  />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formGroupPassword" style={{ width:"350px"}}>
           <Form.Label>password    <FaDiaspora className='logo'/></Form.Label>
           <Form.Control type="password" placeholder="Enter Your Password " style={{fontSize:"x-small",boxShadow:"5px 5px 6px #E5E5E5"}} className='password-label'  />
           <BsEyeSlash  className='password-icon'/>
           </Form.Group>
           </Form>
           <input type='checkbox' /> <span style={{marginLeft:"8px"}}>   I accept the</span> <span className='text-primary'>Terms of use </span> & <span className='text-primary'>Privacy Policy</span> <br/>
           <Button className='mt-3' variant="success" style={{borderRadius:"0px" , width:"350px"}}>Sign Up</Button>{' '}
           <div className="signup-horizontal-line-container mt-3">
                        <hr className="signup-horizontal-line" />
                        <div className="signup-line-text">Or</div>
                        <hr className="signup-horizontal-line" />
                    </div>
            <div>
              <Row className='button-group mt-3'>
                <Col>
                  {/* <button style={{backgroundColor:"white",borderRadius:"10px",borderColor:"whitesmoke", width:"150px"}}><FcGoogle  className='google-icon'/> Sign in with Google</button> */}
                  <Button variant="light"className='google-btn'><FcGoogle  className='google-icon'/>Sign in  with Google</Button>{' '}
                </Col>
                <Col>
                  {/* <button  style={{backgroundColor:"white",borderRadius:"10px",borderColor:"whitesmoke",marginLeft:"-70px",width:"150px"}}><AiFillApple  className='google-icon'/> Sign in with Apple</button> */}
                  <Button variant="light" className='apple-btn' ><AiFillApple  className='google-icon'/>Sign in  with apple</Button>{' '}

                </Col>

              </Row>
            </div>
            <p className='mt-3 ' style={{marginLeft:"90px"}} ><b> I already have a acount!  <span className='text-primary'>  Login</span></b></p>
         
          </Col>

          <Col md={5}>
          <Figure>
          <Figure.Image
            width={1500}
            height={1500}
            alt="171x180"
            src={img1}
            
            
          /> 
          </Figure>
          </Col>
        </Row>

      </div>
    </section>

   
  )
}

export default Signup