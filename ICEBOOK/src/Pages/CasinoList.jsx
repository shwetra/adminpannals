import React, { useState } from "react";
import { Link } from "react-router-dom";
import CasinoBanners2 from "../Components/CasinoBanners2";
function CasinoList() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Our Casino</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="" target="_self">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Our Casino</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="casino-tabs-admin">
                <div className="casino-tabs-menu w-100">
                  <Link to="#" className="arrow-tabs arrow-left">
                    <i className="mdi mdi-chevron-left" />
                  </Link>
                  <ul className="nav nav-tabs nav-tabs-custom">
                    <li className="nav-item">
                      <Link to="#" className="nav-link active">
                        All Casino
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        Roulette
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        Teenpatti
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        Poker
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link">
                        Baccarat
                      </Link>
                    </li>
                  </ul>
                  <Link to="#" className="arrow-tabs arrow-right">
                    <i className="mdi mdi-chevron-right" />
                  </Link>
                </div>
              </div>
              <div className="nav-tab">
                <CasinoBanners2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CasinoList;
