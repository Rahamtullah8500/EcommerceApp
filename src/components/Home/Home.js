import "./Home.css";
import ProductsList from "../ProductsList/ProductsList";
import shopping2 from "../../images/shopping2.webp";
import shopping3 from "../../images/shopping3.jpeg";
import shopping4 from "../../images/shopping4.jpg";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export const list = {
  prop: "bars",
  name: "Bars",
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLoading();
  }, []);

  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="ecom-home-page-container">
      {loading ? (
        <div className="ecom-home-page-loading">
          <ReactLoading type={list.prop} color="#910291" />
        </div>
      ) : (
        <>
          <div className="cart-purple-image">
            <div
              id="carouselExampleCaptions"
              class="carousel slide container-fluid m-0 p-0 "
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={shopping2} class="curosel-image" alt="..." />
                  <div class="carousel-caption top-0 mt-5 d-none d-md-block">
                    <p className="mt-5 fs-3 text-uppercase">
                      CHECK OUT ALL THE TRENDS.
                    </p>
                    <h5 className="display-1 fw-bolder text-capitalize">
                      NEW SEASON ARRIVALS
                    </h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={shopping3}
                    class="d-block w-100 curosel-image"
                    alt="..."
                  />
                  <div class="carousel-caption top-0 mt-5 d-none d-md-block">
                    <p className="mt-5 fs-3 text-uppercase">Get upto 20% Off</p>
                    <h5 className="display-1 fw-bolder text-capitalize">
                      On Everything
                    </h5>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={shopping4}
                    class="d-block w-100 curosel-image"
                    alt="..."
                  />
                  <div class="carousel-caption top-0 mt-5 d-none d-md-block">
                    <p className="mt-5 fs-3 text-uppercase">What's New!</p>
                    <h5 className="display-1 fw-bolder text-capitalize">
                      View the latest styles
                    </h5>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <ProductsList />
        </>
      )}
    </div>
  );
};

export default Home;
