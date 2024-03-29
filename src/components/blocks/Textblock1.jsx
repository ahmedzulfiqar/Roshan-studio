import React from "react";
import { Link } from "react-router-dom";

function Textblock1() {
  return (
    <div
      className="row m-0 py-md-5 py-4 justify-content-center px-2"
 
    >
      <div className="col-lg-7 col-12 py-2 text-lg-center text-start">
        <div
          className="fs-1  text-uppercase d-lg-block d-none text-dark fw-bolder"
        >
          Roshan studio
        </div>
        <div className="fs-3 text-uppercase d-lg-none d-block text-dark fw-bolder">
          Roshan studio
        </div>
        <hr
          className="bg-main opacity-100 border-0  mx-lg-auto  w-25"
          style={{ height: ".1px" }}
        />
        <p className="text-dark mt-md-4 mt-3 d-lg-block d-none opacity-75">
          Roshan studio is a digital marketing agency based in Islamabad. Our
          vision is to provide our clients with the best solutions within the
          services we provide and a huge impact on the sales of their products
          and services. Read more if you are interested to know more about
          Roshan studio.
        </p>
        <p className="text-dark mt-md-4 mt-0 d-lg-none d-block small opacity-75">
          Roshan studio is a digital marketing agency based in Islamabad. Our
          vision is to provide our clients with the best solutions within the
          services we provide and a huge impact on the sales of their products
          and services. Read more if you are interested to know more about
          Roshan studio.
        </p>
        <button className=" btn mbtn btn-lg fw-bold fs-6 mt-4 px-4 py-2 mx-auto  rounded-1 text-uppercase d-lg-block d-none ">
          <Link to={"/about"}>
            About Us<i class="fa-solid fa-location-arrow ps-2"></i>{" "}
          </Link>
        </button>
        <button className=" btn mbtn2 btn-sm fw-bold small mt-3 text-uppercase rounded-1 d-lg-none d-block ">
          <Link to={"/about"}>
            About Us
            <i class="fa-solid fa-location-arrow ps-2 d-md-block d-none"></i>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Textblock1;
