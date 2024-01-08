import React, { useEffect, useRef } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { IconButton} from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import ARlogo from '../../images/Group.svg'

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Header = () => {
  const cartItemsCount = useSelector(
    (state) => state.products.cartItems.length
  );

  const activePath = useLocation().pathname;


  return (
      (activePath === "/login" || activePath === "/signUp") ? null : <div className="ecom-header-container container-fluid m-0 p-0 sticky-top">
        <nav className="navbar navbar-expand-lg  m-0 p-0">
          <div className="container">
            {/* <Link class="navbar-brand p-0 m-0  rounded-circle" to="/" >
              <img className="rounded-circle " src="https://c8.alamy.com/comp/2AKJ5DM/initial-ar-letter-logo-with-creative-modern-business-typography-vector-template-creative-abstract-letter-ar-logo-vector-2AKJ5DM.jpg" alt="AR_logo" width="40" height="44" />
            </Link> */}
            <a className="navbar-brand" href="#dd">
              <img src={ARlogo} alt="AR_Collections" /> 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ border: "none", outline: "none" }}
            >
              <span className="navbar-toggler-icon  border-0"></span>
            </button>
            <div className="collapse navbar-collapse m-0 p-0" id="navbarText">
              <ul className="navbar-nav m-auto p-0 gap-xl-4 gap-m-1 mb-lg-0 mt-0">
                <li className="nav-item">
                  <Link to="/" className={`nav-link ${activePath === '/' ? 'fw-bold' : ''}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className={`nav-link ${activePath === '/product' ? 'fw-bold' : ''}`}>
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className={`nav-link ${activePath === '/about' ? 'fw-bold' : ''}`}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link ${activePath === '/contact' ? 'fw-bold' : ''}`}>
                    Contact
                  </Link>
                </li>
              </ul>
              <span className="navbar-text">
                <Link to="./login" className="header-nav-item-login">
                  <IconButton aria-label="cart" color="#00000">
                    <StyledBadge fontSize="small" color="secondary">
                      <LogoutIcon color="secondary" fontSize="small" />
                    </StyledBadge>
                  </IconButton>
                  {/* <IconButton aria-label="cart" color='#00000'>
                      <StyledBadge color="secondary">
                        <LoginIcon color='action' fontSize='medium'/>
                      </StyledBadge>
                    </IconButton> */}
                </Link>
                <Link to="./cart" className="header-nav-item-cart">
                  <IconButton aria-label="cart" color="secondary">
                    <StyledBadge
                      badgeContent={cartItemsCount}
                      color="secondary"
                    >
                      <ShoppingCartIcon color="secondary" fontSize="small" />
                    </StyledBadge>
                  </IconButton>
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </div>
  )
};
