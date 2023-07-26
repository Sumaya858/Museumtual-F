// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//     MDBBtn,
//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody,
//     MDBModalFooter,
// } from 'mdb-react-ui-kit';

// function Cart(props) {
//     const { cartItems, onAdd, onRemove, handleClear } = props

//     const [basicModal, setBasicModal] = useState(true);
//     const toggleShow = () => setBasicModal(!basicModal);

//     const itemsPrice = cartItems.map((a, c) => a + c.itemPrice * c.qty, 0);
//     const taxPrice = itemsPrice * 0.14;
//     const museumPrice = itemsPrice > 2000 ? 0 : 20;
//     const totalPrice = itemsPrice + taxPrice + museumPrice;

//     return (
//         <>
//             {/* <div className="emptyTop"></div> */}
//             <h2 className="cartpage">Your Cart</h2>
//             <div className="cartCard">
//                 <div>  {cartItems.length === 0 && <div className="emptyCart" style={{textAlign : "center", marginTop:'208px' ,marginBottom:'200px'}}>Cart Is Empty</div>}</div>
//                 {cartItems.map((item) => (
//                     <div className="cartCard-item" key={item._id}>

//                         <div className="cartpage">
//                             &nbsp; <div>{item.itemName}</div> &nbsp; {item.qty} &nbsp; x ${item.itemPrice}
//                         </div>
//                         <div className="cartpage">
//                             <button onClick={() => onRemove(item)} className="remove">-</button>
//                             &nbsp; <button onClick={() => onAdd(item)} className="add">+</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {cartItems.length !== 0 && (
//                 <div className="cartCard-Ship">
//                     <hr></hr>
//                     <div className="row">
//                         <div className="col-2">Items Price</div>
//                         <div className="col-1 text-right">${itemsPrice}</div>
//                     </div>
//                     <div className="row">
//                         <div className="col-2">Tax Price</div>
//                         <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
//                     </div>
//                     <div className="row">
//                         <div className="col-2">Museum Price</div>
//                         <div className="col-1 text-right">
//                             ${museumPrice}
//                         </div>
//                     </div>

//                     <div className="row">
//                         <div className="col-2">
//                             <strong>Total Price</strong>
//                         </div>
//                         <div className="col-1 text-right">
//                             <strong>${totalPrice.toFixed(2)}</strong>
//                         </div>
//                     </div>
//                     <hr />
//                     <div className="row">

//                         {/* <button className="checkoutBtn" onClick={() => alert('Order being processed!')}>
//                             Checkout
//                         </button> */}
//                         <button className="checkoutBtn" onClick={toggleShow}>Checkout</button>
//                         <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
//                             <MDBModalDialog centered>
//                                 <MDBModalContent >
//                                     <MDBModalHeader>
//                                         <MDBModalTitle>Success! 🎉 Your Mueum Ticket is being processed.</MDBModalTitle>
//                                         <MDBBtn className='btn-close' color='none' onClick={()=>{toggleShow(); handleClear();}}></MDBBtn>
//                                     </MDBModalHeader>
//                                     <MDBModalBody>*NOTE:  Don't forget to take a pigure as a gift.*</MDBModalBody>
//                                     <MDBModalFooter>
//                                         <img className="popupImg" src=" "/>
//                                     </MDBModalFooter>
//                                 </MDBModalContent>
//                             </MDBModalDialog>
//                         </MDBModal>
//                     </div>
//                 </div>
//             )}


//         </>
//     )
// }

// export default Cart