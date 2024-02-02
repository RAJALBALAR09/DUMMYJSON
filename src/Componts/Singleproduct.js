import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";


function Singleproduct() {

     let [single, setSingle] = useState(null);

     let { id } = useParams()


     useEffect(() => {

          axios.get(`https://dummyjson.com/products/${id}`)
               .then(function (response) {
                    // handle success
                    setSingle(response.data)
               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
     }, [])

     return (
          single != null &&
          <>
               <Container>
                    <Row>
                         <Col>
                              <div className="row w-100">
                                   <div className="col-3">
                                        {
                                             single.images.map((item) => {
                                                  return (
                                                       <div className="d-flex flex-column Mul_img">
                                                            <img src={item}></img>
                                                       </div>
                                                  )
                                             })
                                        }
                                   </div>
                                   <div className="col-8">
                                        <img src={single.thumbnail} className="Single_img"></img>
                                   </div>
                              </div>
                         </Col>
                         <Col className="Single_details">
                              <h1 className="Single_text">{single.title}</h1>
                              <p className="Des_tect">{single.description}</p>
                              <h2 className="single_pri">${single.price}</h2>
                              <h1 className="Sin_text">DiscountPercentage: {single.discountPercentage}</h1>
                              <div className="d-flex Single_icon">
                                   <FaStar></FaStar>
                                   <FaStar></FaStar>
                                   <FaStar></FaStar>
                                   <FaStar></FaStar>
                                   <FaStarHalfAlt></FaStarHalfAlt>
                              </div>
                              <p className="Sing_text"><FcApproval></FcApproval> Rating: {single.rating}</p>
                              <p className="Sto_text">Stock:{single.stock}</p>
                              <h2 className="Sing_brand">:- {single.brand}</h2>
                              <h4 className="Sing_cat">{single.category}</h4>
                              
                         </Col>

                    </Row>
               </Container>
          </>
     )
}
export default Singleproduct;