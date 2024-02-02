import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './image/logo.svg';
import { FaCartShopping } from "react-icons/fa6";

function Header() {

     //      axios.get('/user?ID=12345')
     //     .then(function (response) {
     //       // handle success
     //       console.log(response);
     //     })
     //     .catch(function (error) {
     //       // handle error
     //       console.log(error);
     //     })
     return (
          <>
               <div className='Main_header'>
                    <Container>
                         <Row>
                              <Col>
                                   <div className=''>
                                        <div className='logo_img'>
                                             <img src={logo}></img>
                                        </div>
                                        {/* <input type='search'></input> */}
                                   </div>
                              </Col>
                              <Col className='d-flex'>
                                   <input type='serach' className='serach_box' placeholder='Search for products, brands and more'></input>
                              </Col>
                              <Col>
                                   <div className='btn'>
                                        <button>Search</button>
                                   </div>
                              </Col>
                              <Col>
                                   <div className='icon d-flex'>
                                        <i><FaCartShopping></FaCartShopping></i>
                                        <button className='i_name'>Add Cart</button>
                                        <button className='login_btn'>Login</button>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </div>
          </>
     )
}
export default Header;




