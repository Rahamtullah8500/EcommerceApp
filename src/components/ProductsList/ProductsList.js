import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../../redux/actions/actions";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import SortIcon from "@mui/icons-material/Sort";

const ProductsList = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products.productItems);
  const [sortBy, setSortBy] = React.useState();
  const [productsList, setProductsList] = useState();
  const [sortOpen, setSortOpen] = useState(false);

  const history = useNavigate()

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  const handleChange = (event) => {
    const selectedValue = event.target.innerHTML;
    setSortBy(selectedValue);
    if (selectedValue !== "default") {
      let sorted = products.filter((item) => item.category === selectedValue);
      setProductsList(sorted);
    } else {
      setProductsList(products);
    }
    handleSort();
  };

  const handleSearch = (e) => {
    const searchElement = e.target.value;
    if (searchElement) {
      let sorted = productsList.filter((item) =>
        item.title.toLowerCase().includes(searchElement)
      );
      console.log(sorted);
      setProductsList(sorted);
    } else {
      if (sortBy) {
        let sorted = products.filter((item) => item.category === sortBy);
        setProductsList(sorted);
      } else {
        setProductsList(products);
      }
    }
  };

  const handleSort = () => {
    setSortOpen(!sortOpen);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleBuy=(product)=>{
    dispatch(addToCart(product));
    history('/cart')
  }

  return (
    <div className="products-list-container">
      <div className="products-list-heading container">
        <div className="product-list-heading-title">Latest Products</div>
        <div className="product-list-heading-right">
          <Paper
            component="form"
            className="products-list-search"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              height: 35,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              onChange={handleSearch}
            />
            <IconButton
              size="small"
              type="button"
              sx={{ p: "5px" }}
              aria-label="search"
            >
              <SearchIcon size="small" />
            </IconButton>
          </Paper>
          <div className="products-list-sort-container">
            <IconButton
              color="secondary"
              onClick={handleSort}
              aria-label="add to shopping cart"
            >
              <SortIcon size="small" color="secondary" />
            </IconButton>
            {sortOpen && (
              <div className="product-list-sort-list">
                <div
                  onClick={handleChange}
                  className="product-list-sort-list-item"
                >
                  default
                </div>
                <div
                  onClick={handleChange}
                  className="product-list-sort-list-item"
                >
                  jewelery
                </div>
                <div
                  onClick={handleChange}
                  className="product-list-sort-list-item"
                >
                  electronics
                </div>
                <div
                  onClick={handleChange}
                  className="product-list-sort-list-item"
                >
                  men's clothing
                </div>
                <div
                  onClick={handleChange}
                  className="product-list-sort-list-item"
                >
                  women's clothing
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="products-list-body container p-0 pb-5">
        {productsList === undefined || productsList.length < 1 ? (
          <div>Empty</div>
        ) : (
          productsList.map((eachItem) => {
            return (
              <div key={eachItem.id} className="products-list-item-card">
                <Link
                  to={`product/${eachItem.id}`}
                  className="products-list-item-img-container"
                >
                  <img
                    className="products-list-item-image"
                    src={eachItem.image}
                    alt={eachItem.title}
                  />
                </Link>
                <div className="products-list-item-title">{eachItem.title}</div>
                <div className="products-list-item-category">
                  {eachItem.category}
                </div>
                <div className="products-list-item-category">
                  <Rating
                    name="read-only"
                    size="small"
                    value={eachItem.rating.rate}
                    readOnly
                  />
                </div>
                <div className="products-list-item-price">
                  ${eachItem.price}
                </div>
                <div className="products-list-card-buttons">
                  <Button
                    size="small"
                    sx={{ width: "100%" }}
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleAddToCart(eachItem)}
                  >
                    Add Cart
                  </Button>
                  <Button
                    size="small"
                    sx={{ width: "100%" }}
                    variant="contained"
                    color="secondary"
                    onClick={() => handleBuy(eachItem)}
                  >
                    Buy
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductsList;
