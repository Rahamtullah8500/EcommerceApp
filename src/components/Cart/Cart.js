import React, { useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, TextField } from "@mui/material";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { removeCartItem } from "../../redux/actions/actions";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import visa from "../../svgs/visaIcon.svg";
import mastercard from "../../svgs/mastercardIcon.svg";
import paypal from "../../svgs/paypalIcon.svg";
import upi from "../../svgs/upiIcon.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import emptyCart from "../../svgs/emptyCart.svg";
import CloseIcon from '@mui/icons-material/Close';

const Cart = () => {
  const cart = useSelector((state) => state.products.cartItems);

  const objectCounts = cart.reduce((acc, obj) => {
    const { id } = obj;
    if (!acc[id]) {
      acc[id] = { count: 1, item: obj };
    } else {
      acc[id].count++;
    }
    return acc;
  }, []);

  let totalAmount = 0;

  objectCounts.map((eachItem) => {
    return (totalAmount += eachItem.item.price * eachItem.count);
  });

  const shippingFee = 5;

  const discount = 10;

  const finalPrice = totalAmount + shippingFee - (totalAmount / 100) * discount;

  return cart && cart.length < 1 ? (
    <div className="ecom-cart-empty-page">
      <img alt="Empty Cart" src={emptyCart} className="ecom-empty-cart-svg" />
    </div>
  ) : (
    <div className="container-fluid ecom-cart-container m-0 ">
      <div className="ecom-cart-body container d-flex">
        <div className=" col-lg-8 ecom-cart-products-list">
          <div className="ecom-cart-heading-container">
            <div>Shopping Cart</div>
            {/* <div>No. of items: {cart.length}</div> */}
          </div>
          <div className="ecom-cart-items-heading ">
            <div className="ecom-item-heading-product">Product Details</div>
            <div className="ecom-item-heading-quantity">Quantity</div>
            <div className="ecom-item-heading-price">Price</div>
            <div className="ecom-item-heading-total">Total</div>
          </div>
          <div>
            {objectCounts.map((eachItem) => {
              return <CartItem data={eachItem} />;
            })}
          </div>
        </div>

        {/* right */}
        <div className="ecom-cart-summary-container m-0">
          <div className="ecom-cart-price-details-container">
            <div className="ecom-cart-summary-heading">Payment Details</div>
            <div className="ecom-cart-summary-items-heading">
              <div>Info</div>
              <div>Price</div>
            </div>
            <div className="ecom-cart-payment-section">
              <div>amount</div>
              <div className="ecom-cart-total-price">
                ${totalAmount.toFixed(2)}
              </div>
            </div>
            <div className="ecom-cart-payment-section">
              <div>discount</div>
              <div className="ecom-cart-total-price">10%</div>
            </div>
            <div className="ecom-cart-payment-section">
              <div>shipping fee</div>
              <div className="ecom-cart-total-price">$5</div>
            </div>
            <div className="ecom-cart-payment-section-total">
              <div>Total</div>
              <div className="ecom-cart-total-price-final">
                ${finalPrice.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="ecom-cart-payment-details-container">
            <div className="ecom-cart-payment-icons-container">
              <img className="ecom-cart-payment-icon" src={visa} alt="visa" />
              <img
                className="ecom-cart-payment-icon"
                src={mastercard}
                alt="master_card"
              />
              <img
                className="ecom-cart-payment-icon"
                src={paypal}
                alt="master_card"
              />
              <img
                className="ecom-cart-payment-icon"
                src={upi}
                alt="master_card"
              />
            </div>
            <Card sx={{ minWidth: 150 }}>
              <CardContent>
                <div className=" gap-3 d-flex flex-column">
                  <TextField
                    label="Cardholder's Name"
                    placeholder=""
                    variant="standard"
                    color="secondary"
                    sx={{ width: "100%", height: 40 }}
                    focused
                  />
                  <TextField
                    label="Card Number"
                    placeholder=""
                    variant="standard"
                    sx={{ width: "100%" }}
                    color="secondary"
                    focused
                  />
                  <div className=" d-flex gap-3">
                    <TextField
                      label="Expiry Date"
                      placeholder=""
                      variant="standard"
                      type="date"
                      sx={{ width: "50%" }}
                      color="secondary"
                      focused
                    />
                    <TextField
                      label="CVV"
                      placeholder=""
                      variant="standard"
                      sx={{ width: "50%" }}
                      color="secondary"
                      focused
                    />
                  </div>
                </div>
              </CardContent>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "100%",
                  borderRadius: "0 0 4px 4px",
                  height: 40,
                  fontWeight: 500,
                }}
                size="small"
              >
                Order Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CartItem = (props) => {
  const data = props.data.item;
  const itemCount = props.data.count;
  const [itemPrice, setItemPrice] = useState(data.price);
  const [quantity, setQuantity] = useState(itemCount);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleIncrement = () => {
    setItemPrice(itemPrice + data.price);
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setItemPrice(itemPrice - data.price);
      setQuantity(quantity - 1);
    }
  };

  const buttons = [
    <Button key="one" onClick={handleDecrement}>
      <RemoveIcon sx={{ color: "#888888" }} fontSize="inherit" />
    </Button>,
    <Button key="two" sx={{ color: "#888888" }}>
      {quantity}
    </Button>,
    <Button key="three" onClick={handleIncrement}>
      <AddIcon sx={{ color: "#888888" }} fontSize="inherit" />
    </Button>,
  ];

  const handleDelete = (itemId) => {
    dispatch(removeCartItem(itemId));
  };

  return (
    <div
      key={data.id}
      className="ecom-cart-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ecom-cart-item-details">
        <img
          className="ecom-cart-item-image"
          src={data.image}
          alt={"product-img"}
        />
        <div className="ecom-cart-item-details-sub">
          <div className="ecom-cart-item-title">{data.title}</div>
          <div className="ecom-cart-item-category">{data.category}</div>
          <div className="ecom-cart-item-">
            <ButtonGroup
              sx={{ height: 24 }}
              color="secondary"
              size="small"
              aria-label="small button group"
            >
              {buttons}
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div className="ecom-cart-item-buttons">
        <ButtonGroup
          sx={{ height: 30 }}
          color="secondary"
          size="small"
          aria-label="small button group"
        >
          {buttons}
        </ButtonGroup>
      </div>
      <div className="ecom-cart-item-price ">{data.price}</div>
      <div className="ecom-cart-item-price-total">
        ${quantity > 0 ? itemPrice.toFixed(2) : data.price}
      </div>
      {isHovered && (
        <div className=" d-flex justify-content-end ecom-cart-item-delete">
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleDelete(data.id)}
          > 
            <CloseIcon
              size='small'
              fontSize="inherit"
            />
          </IconButton>
        </div>
      )}
    </div>
  );
};
