import React, { useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchItem,
  selectedProduct,
} from "../../redux/actions/actions";
import { Button, Rating } from "@mui/material";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selectedProduct);

  useEffect(() => {
    window.scrollTo(0,0)
    productId && productId.length && dispatch(fetchItem(productId));
    return () => {
      dispatch(selectedProduct(""));
    };
  }, [productId, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { id, title, price, rating, category, image, description } = product;

  return (
    <div className="container-fluid ecom-product-details-container">
      {product.length < 1 ? (
        <div className=" w-100 h-100 d-flex justify-content-center align-items-center">Loading</div> ) : (
        <div key={id} className=" d-flex flex-lg-nowrap flex-sm-wrap container py-5 ecom-product-details-body">
          <div className="ecom-product-details-img-container bg-white justify-content-center align-items-center d-flex p-4">
            <img
              className="ecom-product-details-image " src={image} alt={title}/>
          </div>
          <div className="ecom-product-details-body-right p-4">
            <div className="ecom-product-details-category">
              {category.toUpperCase()}
            </div>
            <div className="ecom-product-details-title">{title}</div>
            <div className="ecom-product-details-rating">
              <Rating
                    name="read-only"
                    size="medium"
                    value={rating.rate}
                    readOnly
                  />
              {rating.rate}
            </div>
            <div className="ecom-product-details-price">${price}</div>
            <div className="">In Stock : <span>{rating.count}</span></div>
            <div className="ecom-product-details-description">
              {description}
            </div>
            <div className="ecom-product-details-buttons-container">
                  <Button
                    size="small"
                    sx={{ width: "100%" }}
                    variant="outlined"
                    color="secondary"
                    onClick={handleAddToCart}
                  >
                    Add Cart
                  </Button>
                  <Button
                    size="small"
                    sx={{ width: "100%" }}
                    variant="contained"
                    color="secondary"
                  >
                    Buy
                  </Button>
                </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
