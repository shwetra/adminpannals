import React, { useState } from "react";
import { Link } from "react-router-dom";
import CasinoBanners2 from "../Components/CasinoBanners2";
function VirtualCasino() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Virtual Casino</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="" target="_self">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Virtual Casino</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body pt-2">
              <CasinoBanners2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VirtualCasino;
