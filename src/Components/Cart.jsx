import React, { useState, useContext } from "react";
import { mycontext } from "../App";

const Cart = () => {
  const [list,setList] = useContext(mycontext);

  const [openAccordion1, setOpenAccordion1] = useState(null);
  const [openAccordion2, setOpenAccordion2] = useState(null);

  const toggleAccordion1 = (index) => {
    setOpenAccordion1(openAccordion1 === index ? null : index);
  };

  const toggleAccordion2 = (index) => {
    setOpenAccordion2(openAccordion2 === index ? null : index);
  };
//Sub total and total
  const subtotal = list.reduce((acc, product) => {
    return acc + (product.price * (product.quantity || 1));
  }, 0);
  const handleClickAdd =(id,quantity)=>{
    setList((l)=>{
        return l.map((element)=>{
            if(element.id === id){
                return {...element,quantity:(element.quantity || 0 )+ 1};
            }
            return element;
        });
    })
  }
  const handleClickSub =(id,quantity)=>{
    setList((l)=>{
      return l.map((element)=>{
        if(element.id === id){
          return {...element,quantity:(element.quantity - 1 || 1)}
        }
        return element
      })
    })
  }
  const handleClickRemove = (id)=>{
    setList(list.filter((item)=>(item.id !== id)))
  }
  return (
    <>
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div>
          {list.map((product, index) => (
            <div key={product.id}>
              <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                  <div className="product-details">
                    <div className="image">
                      <img src={product.images[0]} alt="product image" />
                    </div>
                    <div className="details">
                      <p className="title">{product.title}</p>
                      <div className="accordion" id={`accordion${index}`}>
                        {/* Accordion 1 */}
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              onClick={() => toggleAccordion1(index)}
                              aria-expanded={openAccordion1 === index}
                              aria-controls={`panelsStayOpen-collapseOne${index}`}
                            >
                              Details and Care
                            </button>
                          </h2>
                          <div
                            id={`panelsStayOpen-collapseOne${index}`}
                            className={`accordion-collapse collapse ${
                              openAccordion1 === index ? "show" : ""
                            }`}
                          >
                            <div className="accordion-body">
                              <p>{product.description}</p>
                            </div>
                          </div>
                        </div>
                        {/* Accordion 2 */}
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              onClick={() => toggleAccordion2(index)}
                              aria-expanded={openAccordion2 === index}
                              aria-controls={`panelsStayOpen-collapseTwo${index}`}
                            >
                              Sustainability
                            </button>
                          </h2>
                          <div
                            id={`panelsStayOpen-collapseTwo${index}`}
                            className={`accordion-collapse collapse ${
                              openAccordion2 === index ? "show" : ""
                            }`}
                          >
                            <div className="accordion-body">
                              <p>Rating: {product.rating}</p>
                              <p>Brand : {product.brand}</p>
                              <p>Category: {product.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="left-container1 d-flex">
                    <div className="quantity-price">
                      <div className="price">
                        <div className="Qp">
                          <div>
                            <button className="add-btn" onClick={()=>handleClickAdd(product.id,product.quantity || 1)}>+</button>
                            <span className="quantity"> {product.quantity || 0} </span>
                            <button className="sub-btn" onClick={()=>handleClickSub(product.id,product.quantity || 1)}>-</button>
                          </div>
                          <p>${(product.price * product.quantity).toFixed(2)}</p>{" "}
                          {/* Use product price */}
                        </div>
                      </div>
                      <button className="remove" onClick={()=>handleClickRemove(product.id)}>Remove</button>
                    </div>
                  </div>
                  <div className="left-container2">
                    <button className="remove-btn btn btn-warning" onClick={()=>handleClickRemove(product.id)}>
                      Remove
                    </button>
                    <div className="Qp">
                      <div>
                        <button className="add-btn" onClick={()=>handleClickAdd(product.id,product.quantity || 1)}>+</button>
                        <span className="quantity"> {product.quantity || 0} </span>
                        <button className="sub-btn" onClick={()=>handleClickSub(product.id,product.quantity || 1)}>-</button>
                      </div>
                      <p>${(product.price * product.quantity).toFixed(2)}</p>{" "}
                      {/* Use product price */}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
          {/*End of Card  */}
          {/* total Start */}
          {subtotal !==0?
          <div className="total-container">
          <div className="sub-total ">
            <p style={{ marginLeft: "75px", color: "gray" }}>SUBTOTAL :</p>
            <p> </p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="shipping">
            <p style={{ marginLeft: "80px", color: "gray" }}>SHIPPING :</p>
            <p> </p>
            <p>FREE</p>
          </div>
          <hr />
          <div className="total">
            <p style={{ marginLeft: "105px" }}>TOTAL :</p>
            <p> </p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="Card-bonus">
            <p style={{ marginLeft: "105px" }}></p>
            <p> </p>
            <p>Get Daily Cash With Nespola Card</p>
          </div>
        </div>:
        <div className="empty-Cart">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.adasglobal.com%2Fimg%2Fempty-cart.png&f=1&nofb=1&ipt=5c82697bec9e3f5f4a516076618628b2c876070e943296f44dd2b8c0df14ba86&ipo=images" alt="" srcset="" />
         </div>
         }
          
          {/* total end */}
        </div>
      </div>
    </>
  );
};

export default Cart;
