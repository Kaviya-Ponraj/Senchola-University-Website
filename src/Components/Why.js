import React from 'react'
import './why.css'
import { BsBookHalf} from "react-icons/bs";
import {PiPlayCircleBold} from "react-icons/pi";
import { RiTeamFill } from 'react-icons/ri';
import { FaHandshakeAngle } from 'react-icons/fa6';
// import im3 from './Images/im3.png'
// import im2 from './Images/im2.png'
// import im6 from './Images/im6.png'

// import im8 from './Images/im8.png'
// import im9 from './Images/im9.png'
// import im10 from './Images/im10.png'
// import im11 from './Images/im11.png'
// import im5 from './Images/im5.png'
// import im7 from './Images/im7.png'

const Whysenchola = () => {
    return (
        <div className='whysenchola'>
            <div className="whysenchola-back-color row d-flex align-items-center">
                <div className="col-lg-6 ">
                    <h2 className='mb-3'>Best Learning </h2>
                    <h2 className='mb-3'>Education Platform</h2>
                    <h2 className='mb-3'>is Senchola.</h2>
                    <p className='me-sm-4 pe-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque non deleniti aspernatur quidem ernatur quidem doloribus modi adsses libero inventore
                    </p>

                    
                    <div className="btn-groups d-flex align-items-center mb-0">
                        <button className='btn1 btn btn-success rounded-pill'>Learn More</button>

                        <button className=' bg-transparent rounded-pill btn2' style={{ fontSize: 15, fontWeight: '600' }}>
                            <span style={{ fontSize: 20 }}><PiPlayCircleBold /></span> Watch video</button>
                    </div>


                </div>
                
                <div className="col-lg-6 main-images">
                    <div className="im2">
                        <img src={require('../Senchola images1/1/Rectangle 4.png')} className='img-fluid' alt="im2" />
                    </div>
                    <div className="im3">
                        <img src={require('../Senchola images1/1/Rectangle 5.png')} className="img-fluid" alt="im3" />
                    </div>


                </div>
                <div className='box-content'>
                    
                     <span style={{ padding: "2%", fontWeight: "600" }}>
                  <i class='bx bx-check' style={{color:'#302e2e', fontSize:"18px",  fontWeight:"800", }} ></i>
                  </span>
                  Build remote teams &nbsp;faster with
                  senchola <br /> 
                  <span style={{ padding: "2%", fontWeight: "600" }}>
                  <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", }} ></i>
                  </span>
                  Expert Trainee
                </div>
                
                <div className="book1">
                    <span className='fs-3'><BsBookHalf/></span>
                </div>
                
                <div className="radius1">
                    <h1>&nbsp;</h1>
                </div>
                <div className="radius2">
                    <h1>&nbsp;</h1>
                </div>
               
         
            </div>
            <div className="why">
                <h1 className='fw-bolder'>Why Senchola <br /> University?</h1>
                <div className="row text-secondary">
                    <div className="col-lg-6 col-sm-12 pe-4">
                        
                        <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    
                  }}
                >
                 <i class='bx bx-check-double check-icon'></i>
                </span>
                What we teach is much more relevant for real software careers.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                 <i class='bx bx-check-double check-icon'></i>
                </span>
                At Senchola, we look for skillsets and abilities more than for
                paper credentials.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                 <i class='bx bx-check-double check-icon'></i>
                </span>
                We do not charge our students any fees.
              </p>
              <p>
                <span
                  style={{
                    color: "rgba(114, 135, 255, 0.8)",
                    fontWeight: "600",
                    paddingRight: "1%",
                  }}
                >
                 <i class='bx bx-check-double check-icon'></i>
                </span>
                After the successful completion of the Intership, you are
                automatically inducted as an employee into Senchola Technologies
                Solution.
              </p>
                    </div>
                    <div className="col-lg-6 col-sm-12 col2">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia modi ea exercitationem rerum dignissimos autem!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores iusto eum similique, fugit cum aliquid placeat doloremque magnam quos cupiditate explicabo doloribus sapiente officia ipsa suscipit voluptate. Expedita, quidem quas veniam minus, in, modi officiis sequi ea perspiciatis at vel!</p>
                    </div>
                </div>
                <div className="radius3">
                    <h1>&nbsp;</h1>
                </div>
                <div className="book4">
                    <span className='fs-3'><BsBookHalf/></span>
                </div>
                <div className="book5">
                    <span className='fs-3'><BsBookHalf/></span>
                </div>
            </div>
            <div className="cards">
                <div className="flex-card">
                    <div className="medium">
                        <div className='card-1'>
                      <  i class='bx bxs-file-blank' style={{ color: '#ee3737', fontSize: "30px", 
                         backgroundColor:"#FA8072", borderRadius:"8px", width:"30px", height:"30px"}}  ></i>
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>breadth and depth for immediate scale</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                        <div className='card-1'>
                        <div >
              <FaHandshakeAngle style={{ color: 'green', fontSize: "30px", 
                 backgroundColor:"#90EE90", borderRadius:"8px"}} />
              </div>
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>global pricing model</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card2 medium">
                        <div className='card-1'>
                        <div >
              <i class='bx bx-git-repo-forked' style={{ color: '#2538e3', fontSize: "30px",  width:"30px",
               height:"30px",  backgroundColor:"	#B0E0E6", borderRadius:"8px" }}  ></i>
              </div>
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>scalable managed outsourcing</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                        <div className='card-1'>
                        <div>
              < RiTeamFill style={{ color: '#BA55D3', fontSize: "30px",  
                        backgroundColor:"	#E6E6FA", borderRadius:'8px'}} />
              </div>
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>jumpstart your business</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                    </div>
                    <div className=" medium">
                        <div className='card-1'>
                        <div>
              <i class='bx bx-message-detail msg-icon ' style={{ color: '#f17a4b', fontSize: "30px", 
                 width:"30px", height:"30px",  backgroundColor:"#FFE4B5", borderRadius:"8px" }}  ></i>
              </div>
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>Elastic Freelancing model</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                        <div className='card-1'>
                        <div >
              <i class='bx bx-desktop' style={{ color: ' #e38d25', fontSize: "30px",  width:"30px",
                   backgroundColor:"#F0E68C", borderRadius:"8px" }}  ></i>
              </div>
                            <div className=" pt-4">
                                <h6 className='text-capitalize'>exclusive professional marketing place</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam nobis nulla facere ipsum adipisci voluptatibus, error veritatis atque consectetur ab earum pariatur. Sint laudantium maiores, placeat nulla assumenda magni. lorem ipus id the mmes Expedita, tempore?</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="dummy-content row">
                
                <div className="col-lg-6 col-sm-12 ps-5">

                    <img src={require('../Senchola images1/1/Rectangle 4611.png')} height={470} width={470} className='img-fluid' alt="" />
                </div>
                
                <div className="col-lg-6 col-sm-12 dummy-text text-justify">
                    <h2 className='fw-bolder '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum nostrum beatae sequi similique deserunt obcaecati soluta dolor nisi ipsam quo voluptatem officiis optio totam, dignissimos dolorem ea vitae. Omnis quisquam inventore   error Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ad nam fugiat saepe, reiciendis id recusandae sint commodi amet fugit ut incidunt assumenda quam neque nostrum animi nihil repellendus magni. nulla consequuntur. Facere minima animi dolorem labore?</p>

                </div>
                <div className='box-content2'>
                   
                    <span style={{ padding: "2%", fontWeight: "600" }}>
                  <i class='bx bx-check' style={{color:'#302e2e', fontSize:"18px",  fontWeight:"800", }} ></i>
                  </span>
                  Build remote teams &nbsp;faster with
                  senchola <br /> 
                  <span style={{ padding: "2%", fontWeight: "600" }}>
                  <i class='bx bx-check' style={{color:'#302e2e', fontSize:"22px",  fontWeight:"800", }} ></i>
                  </span>
                  Expert Trainee
                

                    </div>
            </div>
            <div className="my-5 recruit">
                <h2 className='text-uppercase text-center fw-bolder'>recruiting top talents</h2>
                <p className='text-center fw-bold'>recruiting top talent</p>
            </div>

            <div className="grid-gallery">
                     <div className="wide">
                        <img src={require('../Senchola images1/2/Rectangle 4605.png')} alt="" />
                     </div>
                     <div className="tall">
                        <img src={require('../Senchola images1/1/Rectangle 4609.png')} alt="" />
                     </div>
                     <div className="tall">
                        <img src={require('../Senchola images1/1/Rectangle 4607.png')} alt="" />
                     </div>
                     <div className="wide2">
                        <img src={require('../Senchola images1/3/Rectangle 4629.png')} alt="" />
                     </div>
                     <div className="wide3">
                        <img src={require('../Senchola images1/1/Rectangle 4608.png')} alt="" />
                     </div>
                     <div className="wide4">
                        <img src={require('../Senchola images1/1/Rectangle 4610.png')} alt="" />
                        {/* Senchola images1/1/Rectangle 4610.png */}
                     </div>
            </div>

        </div>
    )
}

export default Whysenchola