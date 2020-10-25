import React from "react";
import './Banner.css';
const banner = () => {
  return (
    <div class="banner-container">
    <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-5 col-lg-6 order-md-2">
          <img class="banner-image" src="/assets/img/banner.png" alt="banner" />
      </div>
      <div class="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">

        <h1 class="display-3 text-center text-md-left">
          Short links, big results
        </h1>

        <p class="lead text-center text-md-left text-muted mb-6 mb-lg-8">
          A URL shortener built with powerful tools to help you grow and protect your brand.
        </p>


        <div class="text-center text-md-left">
          <a href="javascript:void(0);" class="btn btn-primary shadow lift mr-1">
            Get A Quote
          </a>
        </div>

      </div>
    </div>
  </div>
    </div>
  );
};
export default banner;
