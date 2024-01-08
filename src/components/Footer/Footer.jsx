import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div className="ecom-footer-body container-fluid d-flex flex-column justify-content-center align-items-center m-0 p-lg-5 p-2 ">
      <div className="ecom-footer-container row container row-gap-4 justify-content-lg-between justify-content-between column-gap-2  w-100 m-0">
        <div className="col-5 col-lg-2 col-sm-5 col-md-3 col-xl-2">
          <div className="fw-bolder fs-10 text-light">For Bussiness</div>
          <div className="fw-light fs-10 ecom-footer-list-item">Employer</div>
          <div className="fw-light text-light fs-10 ecom-footer-list-item">Partner</div>
          <div className="fw-light text-light fs-10 ecom-footer-list-item">Invest</div>
        </div>
        <div className=" col-5 col-lg-2 col-sm-5 col-md-3 col-xl-2">
          <div className="fw-bolder fs-10 text-light">Resources</div>
          <div className="fw-light fs-10  ecom-footer-list-item">Resource center</div>
          <div className="fw-light  fs-10 ecom-footer-list-item">Testimonials</div>
          <div className="fw-light  fs-10 ecom-footer-list-item">STV</div>
        </div>
        <div className=" col-5 col-lg-2 col-sm-5 col-md-3 col-xl-2">
          <div className="fw-bolder fs-10 text-light">Partners</div>
          <div className="fw-light fs-10  ecom-footer-list-item">Myntra</div>
          <div className="fw-light fs-10  ecom-footer-list-item">Meeshow</div>
          <div className="fw-light fs-10  ecom-footer-list-item">Amazon</div>
          <div className="fw-light fs-10  ecom-footer-list-item">FlipKart</div>
        </div>
        <div className=" col-5 col-lg-2 col-sm-5 col-md-3 col-xl-2">
          <div className="fw-bolder fs-10 text-light">Company</div>
          <div className="fw-light fs-10  ecom-footer-list-item">Swing Tech</div>
          <div className="fw-light fs-10  ecom-footer-list-item">Amazon</div>
          <div className="fw-light fs-10  ecom-footer-list-item">FlipKart</div>
        </div>
        <div className=" col-12 col-lg-4 col-sm-6 col-md-4 col-xl-3">
          <div className="fw-bolder fs-10 text-light ">Follow Us On</div>
          <div className="row flex-row d-flex pt-1">
            <IconButton
              color="secondary"
              aria-label="add to shopping cart"
              className=" rounded-circle col-2"
            >
              <FacebookIcon size="small" color="secondary" />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="add to shopping cart"
              className=" rounded-circle col-2"
            >
              <InstagramIcon size="small" color="secondary" />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="add to shopping cart"
              className=" rounded-circle col-2"
            >
              <TwitterIcon size="small" color="secondary" />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="add to shopping cart"
              className=" rounded-circle col-2"
            >
              <YouTubeIcon size="small" color="red" />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="add to shopping cart"
              className=" rounded-circle col-2"
            >
              <GitHubIcon size="small" color="secondary" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className=" container border-bottom-1 border text-light col-xl-11 m-3"></div>
      <div className=" container row col-xl-12 row-gap-2 justify-content-between">
        <div className=" text-light col-xl-6 col-md-4">
          &copy;2023 All rights reserved.
        </div>
        <div className=" d-flex row-gap-2 flex-wrap column-gap-4 col-md-8 col-xl-6 justify-content-lg-end justify-content-md-end ">
          <div className=" text-white">Terms & Conditions</div>
          <div className=" text-white">Privacy</div>
          <div className=" text-white">Security</div>
          <div className=" text-white">Cookie Declaration</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
