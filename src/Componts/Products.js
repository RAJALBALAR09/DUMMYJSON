import { Col, Container, Row, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";


function Products() {


     let [data, setdata] = useState([]);


     useEffect(() => {

          axios.get('https://dummyjson.com/products/categories')
               .then(function (response) {
                    // handle success
                    setdata(response.data)
               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
     }, [])

     let [pro, setpro] = useState([]);

     useEffect(() => {

          axios.get('https://dummyjson.com/products')
               .then(function (response) {
                    // handle success
                    setpro(response.data.products)
               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
     }, [])

     return (
          <>
               <Container fluid>
                    <Row>
                         <Col lg={3}>
                              <div className="cat_bg">
                                   {
                                        data.map((ele, ind) => {
                                             return (
                                                  <div className="Bg_cat">
                                                       <li className="Text_cat">{ele}</li>
                                                  </div>
                                             )
                                        })
                                   }
                              </div>
                         </Col>
                         <Col lg={9}>
                              <Row>
                                   {
                                        pro.map((ele, ind) => {
                                             return (
                                                  <Col lg={4} className="my-3">
                                                       <div>
                                                            <Link className="nav-link" to={`/product/${ele.id}`}>
                                                                 <Card style={{ width: '100%' }} className="Post">
                                                                      <Card.Img variant="top" src={ele.thumbnail} className="Post_img" />
                                                                      <Card.Body>
                                                                           <p className="Pro_text">{ele.title}</p>
                                                                           <h6 className="Des_tect">{ele.description}</h6>
                                                                           <div className="d-flex rent">
                                                                                <h2 className="prize">${ele.price}</h2>
                                                                                <span className="Dis_text">DiscountPercentage:{ele.discountPercentage}</span>
                                                                           </div>
                                                                           <div className="d-flex Star_icon">
                                                                                <FaStar></FaStar>
                                                                                <FaStar></FaStar>
                                                                                <FaStar></FaStar>
                                                                                <FaStar></FaStar>
                                                                                <FaStarHalfAlt></FaStarHalfAlt>
                                                                                <p className="Rat_text"><FcApproval></FcApproval> Rating:{ele.rating}</p>
                                                                           </div>
                                                                           <p className="Sto_text">Stock:{ele.stock}</p>
                                                                           <h4 className="Last_cat">{ele.category}</h4>
                                                                           <Card.Text>
                                                                           </Card.Text>
                                                                      </Card.Body>
                                                                 </Card>
                                                            </Link>
                                                       </div>
                                                  </Col>
                                             )
                                        })
                                   }
                              </Row>
                         </Col>
                    </Row>
               </Container>
          </>
     )
}
export default Products;