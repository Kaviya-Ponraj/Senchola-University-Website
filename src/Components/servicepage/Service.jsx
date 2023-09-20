import React from 'react'
import Card from 'react-bootstrap/Card';
import {Row,Col} from "react-bootstrap"
import img1 from "./service-img/card1.png"
import img2 from "./service-img/card2.png"
import img3 from "./service-img/card3.png"
import img4 from "./service-img/card4.png"
import img5 from "./service-img/card5.png"
import img6 from "./service-img/card6.png"
import { IoIosArrowForward} from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import page2 from "./service-img/page2.png"
import "./service.css"
import bg from "./service-img/bg.png"
import {FaHeadset} from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import {FaHandPointRight} from "react-icons/fa6";
import { FcBarChart } from "react-icons/fc";
import { BiDollarCircle } from "react-icons/bi";
import {PiHexagonBold } from "react-icons/pi";
import { IoCopySharp } from "react-icons/io5";
import {LuAlignStartVertical } from "react-icons/lu";
import { BsShop} from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "./service-img/carousel1.png"
import carousel2 from "./service-img/carousel2.png"
import carousel3 from "./service-img/carousel3.png"
    


const Service = () => {
  return (

    
   <section  className='mt-5'>
     <Carousel>
      <Carousel.Item>
        <Figure>
       
          <Figure.Image
          
           
            height={800}
            alt="171x180"
            src={carousel1}
            style={{position:"abolute"}}
            
          /> 

        </Figure>
        
      </Carousel.Item>
      <Carousel.Item>
      <Figure>
       
       <Figure.Image

      
         height={800}
         alt="171x180"
         src={carousel2}
         style={{position:"abolute"}}
         
       /> 

     </Figure>
       
      </Carousel.Item>
      <Figure>
       
       <Figure.Image
     
        height={800}
        
         alt="171x180"
         src={carousel3}
         style={{position:"abolute"}}
         
       /> 

     </Figure>
     
    </Carousel>






    <div className='container mt-5'>
      <h3 className='text-center text-success' style={{fontWeight:"bolder"}}>OUR SERVICES</h3>
      <p className='text-center'> Lorem ipsum dolor sit amet consectetur. Semper hendrerit in <br/>
maecenas feugiat habitasse scelerisque. Sit egestas nec</p>

    </div>
    <div className='container mt-5'>
      <Row>
        <Col>
        <Card style={{height:"400px",width:"300px",border:"0px"}} >
        <Card.Img variant="top" src={img1} style={{width:"300px"}} />
        <Card.Body>
        <Card.Title style={{fontSize:"medium",marginLeft:"-20px",fontWeight:"bolder"}}>Website Design & Development</Card.Title>
        <Card.Text style={{fontSize:"small",marginLeft:"-20px"}}>
        Lorem ipsum dolor sit amet consectetur. In cra nisi aliquam phasellus blandit. Erat veli maecenas consectetur eu. Ornare arcu nibh libero vulputate at morbi risus.
        </Card.Text>
        <p className='text-end text-success' style={{fontSize:"small"}}> VIEW MORE <IoIosArrowForward/></p>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{height:"400px",width:"300px",border:"0px"}} >
        <Card.Img variant="top" src={img2} style={{width:"300px"}} />
        <Card.Body>
        <Card.Title style={{fontSize:"medium",marginLeft:"-20px",fontWeight:"bolder"}}>Logo & Banner Designing</Card.Title>
        <Card.Text style={{fontSize:"small",marginLeft:"-20px"}}>
        Lorem ipsum dolor sit amet consectetur. In cra nisi aliquam phasellus blandit. Erat veli maecenas consectetur eu. Ornare arcu nibh libero vulputate at morbi risus.
        </Card.Text>
        <p className='text-end text-success' style={{fontSize:"small"}}> VIEW MORE <IoIosArrowForward/></p>
        </Card.Body>
        </Card>
        
        </Col>
        <Col>
        <Card style={{height:"400px",width:"300px",border:"0px"}} >
        <Card.Img variant="top" src={img3} style={{width:"300px"}} />
        <Card.Body>
        <Card.Title style={{fontSize:"medium",marginLeft:"-20px",fontWeight:"bolder"}}>Android App Development</Card.Title>
        <Card.Text style={{fontSize:"small",marginLeft:"-20px"}}>
        Lorem ipsum dolor sit amet consectetur. In cra nisi aliquam phasellus blandit. Erat veli maecenas consectetur eu. Ornare arcu nibh libero vulputate at morbi risus.
        </Card.Text>
        <p className='text-end text-success' style={{fontSize:"small"}}> VIEW MORE <IoIosArrowForward/></p>
        </Card.Body>
        </Card>
       
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
        <Card style={{height:"400px",width:"300px",border:"0px"}} >
        <Card.Img variant="top" src={img4} style={{width:"300px"}} />
        <Card.Body>
        <Card.Title style={{fontSize:"medium",marginLeft:"-20px",fontWeight:"bolder"}}>Wordprerss Development</Card.Title>
        <Card.Text style={{fontSize:"small",marginLeft:"-20px"}}>
        Lorem ipsum dolor sit amet consectetur. In cra nisi aliquam phasellus blandit. Erat veli maecenas consectetur eu. Ornare arcu nibh libero vulputate at morbi risus.
        </Card.Text>
        <p className='text-end text-success' style={{fontSize:"small"}}> VIEW MORE <IoIosArrowForward/></p>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{height:"400px",width:"300px",border:"0px"}} >
        <Card.Img variant="top" src={img5} style={{width:"300px"}} />
        <Card.Body>
        <Card.Title style={{fontSize:"medium",marginLeft:"-20px",fontWeight:"bolder"}}>Content Marketing</Card.Title>
        <Card.Text style={{fontSize:"small",marginLeft:"-20px"}}>
        Lorem ipsum dolor sit amet consectetur. In cra nisi aliquam phasellus blandit. Erat veli maecenas consectetur eu. Ornare arcu nibh libero vulputate at morbi risus.
        </Card.Text>
        <p className='text-end text-success' style={{fontSize:"small"}}> VIEW MORE <IoIosArrowForward/></p>
        </Card.Body>
        </Card>
        
        </Col>
        <Col>
        <Card style={{height:"400px",width:"300px",border:"0px"}} >
        <Card.Img variant="top" src={img6} style={{width:"300px"}} />
        <Card.Body>
        <Card.Title style={{fontSize:"medium",marginLeft:"-20px",fontWeight:"bolder"}}>10S App Developmentt</Card.Title>
        <Card.Text style={{fontSize:"small",marginLeft:"-20px"}}>
        Lorem ipsum dolor sit amet consectetur. In cra nisi aliquam phasellus blandit. Erat veli maecenas consectetur eu. Ornare arcu nibh libero vulputate at morbi risus.
        </Card.Text>
        <p className='text-end text-success' style={{fontSize:"small"}}> VIEW MORE <IoIosArrowForward/></p>
        </Card.Body>
        </Card>
       
        </Col>
      </Row>
      <Button className='mt-5 text-center justify-content-center align-items-center' variant="success" style={{borderRadius:"50px" ,fontSize:"small",marginLeft:"40%"}}>Veiw More Services <IoIosArrowForward/></Button>{' '}
     
    </div>
    <section className='container mt-5 whatwe'>
      <Row  >
        <Col md={7} className='img-section'>
          <Figure>
          <Figure.Image
            width={500}
            height={800}
            alt="171x180"
            src={page2}
            style={{position:"abolute"}}
            
          /> 
         
           <div className="row ">
                    <div className="col  "> 
                    <div className="logo-card1 ">
                    
                            <p><span className="logo1"><LuAlignStartVertical /></span>Logo Design</p>
                            <p><span className="logo2"><IoCopySharp /></span>Poster Design</p>
                            <p><span className="logo3"><BsShop /></span>Business Card</p>
                            
                    
                    </div>
                    
                        
                    
                    </div>
                    <div className="col">
                    <div className=" logo-card2 ">
                
                            <p><span className="logo1"><PiHexagonBold/></span> Product Marketing</p>
                            <p> <span className="logo2"><BiDollarCircle/> </span>Influencer Marketting</p>
                            <p> <span className="logo3"><FcBarChart/></span>Content Marketting</p>
                            
                    
                      </div>
                      </div>
            </div>
                    
         
          </Figure>
        </Col>
        <Col md={5} >
        <h5 className=' mt-5 text-success' style={{fontWeight:"bolder"}}>WHAT WE DO</h5>
        <h1 style={{fontWeight:"bold",fontSize:"250%"}}>We Help Companies Scale with Vetted, Expert Talent & Resources</h1>
        <p style={{fontSize:"medium",width:"65%"}}>Lorem ipsum dolor sit amet consectetur. In cras nisi aliquam phasellus blandit. Erat velit maecenas consectetur eu. Ornare arcu nibh libero vulputate at morbi risus.</p>
        <Button className='mt-3 ' variant="success" style={{borderRadius:"50px" ,fontSize:"medium",padding:"10px",width:"100px"}}>Contact Us </Button>{' '}
        </Col>
      </Row>
    </section>
    <section >
    <div className=' container better-text mt-5' >
      <h3 className=' text-center text-success' style={{fontWeight:"bolder"}}>A BETTER WAY TO SCALE YOUR TEAM</h3>
      <p className='text-center'> Lorem ipsum dolor sit amet consectetur. In cras nisi aligsjuam phasellus blandit.<br/>
Erat velit maecenas consectetur eu.
</p>

    </div>
    {/* <div className='last-page'  >
       <Card className=' pg1 bg-white ' style={{width:"300px",height:}}>
        <h3>Talk with Our Specialists</h3>
        <p>Lorem ipsum dolor sit amet
consectetur. In cras nisi aliquam
phasellus blandit. Erat velit
maecenas consectetur eu.
Ornare arcu nibh libero vulputate
at morbi risus.</p>
       </Card>
    </div> */}
    
    </section>
   <section>
   
    <div className='container-fluid last-page mt-5' >
    <Row>
      <div className='col-12 col-sm-12 col-md-4 col-lg-4 p-4 mt-5'>
        <div className='card card-style mt-5 p-4' style={{width:"320px",height:"450px",borderRadius:"30px",opacity:"0.8"}}>
          <div className='card-body w-100'>
            <p className=' text-icon icona'><FaHeadset/></p>
            <h2>Talk with Our Specialists</h2>
            <p>Lorem ipsum dolor sit amet consectetur. In cras nisi aliquam phasellus blandit. Erat velit
maecenas consectetur eu.
Ornare arcu nibh libero vulputate
at morbi risus.</p>
          </div>
        </div>
      </div>
      <div className='col-12  col-md-4 col-lg-4 p-4'>
        <div className='card card-style mt-3 p-4' style={{width:"320px",height:"450px",borderRadius:"30px",opacity:"0.8"}}>
          <div className='card-body w-100'>
            <p className=' text-icon iconb'><BsFillPersonFill/></p>
            <h2>Talk with Our Specialists</h2>
            <p>Lorem ipsum dolor sit amet consectetur. In cras nisi aliquam phasellus blandit. Erat velit
maecenas consectetur eu.
Ornare arcu nibh libero vulputate
at morbi risus.</p>
          </div>
        </div>
      </div>
      <div className='col-12 col-sm-12 col-md-4 col-lg-4 p-4 mt-5'>
        <div className='card card-style  mt-5 p-4' style={{width:"320px",height:"450px",borderRadius:"30px",opacity:"0.8"}}>
          <div className='card-body w-100'>
            <p className=' text-icon iconc'><FaHandPointRight/></p>
            <h2>Talk with Our Specialists</h2>
            <p>Lorem ipsum dolor sit amet consectetur. In cras nisi aliquam phasellus blandit. Erat velit
maecenas consectetur eu.
Ornare arcu nibh libero vulputate
at morbi risus.</p>
          </div>
        </div>
      </div>
      </Row>
 

    </div>

   </section>

   </section>
   
  
)
}

export default Service