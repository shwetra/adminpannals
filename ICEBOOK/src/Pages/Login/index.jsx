import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import TopWinners from "../../Components/TopWinner";
function Login() {
  return (
    <>
      <section className="login-page">
        <div className="container">
          <div className="home-new-header">
            <div className="home-new-logo">
              <img
                data-src="https://sitethemedata.com/sitethemes/icebook777.com/front/logo.png"
                src="https://sitethemedata.com/sitethemes/icebook777.com/front/logo.png"
                lazy="loaded"
              />
            </div>
            <div className="home-new-header-bottom">
              <div className="header-sport-list d-none-mobile">
                <marquee>
                  <div className="all-sports-list" />
                </marquee>
              </div>
            </div>
            <div className="header-right">
              <button
                className="btn btn-primary login-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#loginOffcanvas"
                aria-controls="loginOffcanvas"
              >
                Login
              </button>
            </div>
          </div>
          <div className="upcoming-fixure">
            <div className="fixure-title">Upcoming Fixtures</div>
            <marquee>
              <div className="fixure-box-container" />
            </marquee>
          </div>
          <div
            id="loginCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#loginCarousel"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#loginCarousel"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#loginCarousel"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#loginCarousel"
                data-bs-slide-to={3}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#loginCarousel"
                data-bs-slide-to={4}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div data-bs-interval="1500" className="carousel-item active">
                <img
                  src="https://sitethemedata.com/sitethemes/common/front/banners/1719176732137.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div data-bs-interval="1500" className="carousel-item">
                <img
                  src="https://sitethemedata.com/sitethemes/common/front/banners/1717705597754.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div data-bs-interval="1500" className="carousel-item">
                <img
                  src="https://sitethemedata.com/sitethemes/common/front/banners/1719260107190.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div data-bs-interval="1500" className="carousel-item">
                <img
                  src="https://sitethemedata.com/sitethemes/common/front/banners/1719036715269.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div data-bs-interval="1500" className="carousel-item">
                <img
                  src="https://sitethemedata.com/sitethemes/common/front/banners/1719260931042.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div data-bs-interval="1500" className="carousel-item">
                <img
                  src="https://sitethemedata.com/sitethemes/common/front/banners/1719260931042.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="container-fluid container-fluid-5">
            <div className="row row5">
              <div className="col-12 col-md">
                <h4 className="sport-list-title">Live Casinos</h4>
                <div className="casino-banners-list live-casinos mt-2" />
              </div>
              <div className="col-12 col-md">
                <h4 className="sport-list-title">Fantasy Games</h4>
                <div className="casino-banners-list live-casinos mt-2" />
              </div>
            </div>
          </div>
          <div className="container-fluid pb-5">
            <h4 className="sport-list-title">Top Winners</h4>
            <div className="top-winners-list-container mt-2">
              <TopWinners />
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid container-fluid-5">
              <div className="row row5">
                <div className="col-lg-12 text-center">
                  <div className="mt-2 gt">
                    <a href="javascript:void(0)" role="button">
                      <img
                        data-src="https://wver.sprintstaticdata.com/v50/static/front/img/18plus.png"
                        src="https://wver.sprintstaticdata.com/v50/static/front/img/18plus.png"
                        lazy="loaded"
                      />
                    </a>
                    <a href="https://www.gamcare.org.uk/" target="_blank">
                      <img
                        data-src="https://wver.sprintstaticdata.com/v50/static/front/img/gamecare.png"
                        src="https://wver.sprintstaticdata.com/v50/static/front/img/gamecare.png"
                        lazy="loaded"
                      />
                    </a>
                    <a
                      href="https://www.gamblingtherapy.org/en"
                      target="_blank"
                    >
                      <img
                        data-src="https://wver.sprintstaticdata.com/v50/static/front/img/gt.png"
                        src="https://wver.sprintstaticdata.com/v50/static/front/img/gt.png"
                        lazy="loaded"
                      />
                    </a>
                  </div>
                  <div className="mt-3">
                    © Copyright 2021. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        data-bs-backdrop="static"
        tabIndex={-1}
        id="loginOffcanvas"
        aria-labelledby="loginOffcanvasLabel"
      >
        <div className="offcanvas-header border-bottom px-3 py-4">
          <h3 className="text-light mb-0" id="loginOffcanvasLabel">
            ADMIN LOGIN
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body p-4 mt-5">
          <div className="overflow-hidden">
            <div>
              <h3 className="text-center mt-2 mb-0 text-secondary">
                Welcome to Admin Panel
              </h3>
              <p className="text-center text-secondary">
                Enter your Username and Password
              </p>

              <form className="p-2 mt-4">
                <div id="input-group-1" role="group" className="form-group">
                  <div>
                    <input
                      id="input-1"
                      name="username"
                      type="text"
                      placeholder="Enter Username"
                      className="form-control"
                    />
                  </div>
                </div>
                <div id="input-group-2" role="group" className="form-group">
                  <div>
                    <input
                      id="input-2"
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-block btn-theme1 btn-lg btn-submit btn-secondary"
                  >
                    Sign In
                  </button>
                </div>
                <small className="recaptchaTerms">
                  This site is protected by reCAPTCHA and the Google
                  <a href="https://policies.google.com/privacy">
                    &nbsp;Privacy Policy
                  </a>
                  &nbsp;and&nbsp;
                  <a href="https://policies.google.com/terms">
                    Terms of Service
                  </a>
                  &nbsp;apply.
                </small>
              </form>
            </div>
            <div className="text-center text-secondary mt-2">
              <div className="mb-2">© Copyright 2021. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
