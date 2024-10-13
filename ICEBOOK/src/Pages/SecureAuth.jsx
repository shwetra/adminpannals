import React, { useState } from "react";
import { Link } from "react-router-dom";
function SecureAuth() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="security-auth">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">
                    Secure Auth Verification
                  </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/admin/home" className="" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Secure Auth</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card-body">
                <div className="text-center">
                  <b>Secure Auth Verification Status:</b>
                  <span className="badge ms-1 text-bg-danger">Disabled</span>
                </div>
                <div className="mt-2 text-center">
                  Please select below option to enable secure auth verification
                </div>
                <div className="casino-report-tabs mt-3">
                  <ul className="nav justify-content-center nav-tabs">
                    <li className="nav-item pointer">
                      <Link
                        to="#"
                        className="nav-link active"
                        id="mobileApp-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#mobileApp-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="mobileApp-tab-pane"
                        aria-selected="true"
                      >
                        Enable Using Mobile App
                      </Link>
                    </li>
                    <li className="nav-item pointer">
                      <Link
                        to="#"
                        className="nav-link"
                        id="telegram-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#telegram-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="telegram-tab-pane"
                        aria-selected="true"
                      >
                        Enable Using Telegram
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content mt-4">
                  <div
                    className="tab-pane mobile-app tab-pane fade show active"
                    id="mobileApp-tab-pane"
                    role="tabpanel"
                    aria-labelledby="mobileApp-tab"
                    tabIndex="0"
                  >
                    <div className="text-center">
                      <div className="mt-3">
                        Please enter below auth code in your 'Secure Auth
                        Verification App'.
                      </div>
                      <div className="mt-3">
                        <div className="verify-code">646249</div>
                      </div>
                      <div className="mt-3">
                        <b>
                          If you haven't downloaded,
                          <br />
                          please download 'Secure Auth Verification App' from
                          below link.
                        </b>
                      </div>
                      <div className="mt-3">
                        Using this app you will receive auth code during login
                        authentication
                      </div>
                      <div className="mt-3">
                        <Link to="https://sitethemedata.com/auth_apk/SecureAuthApp-2.0.apk">
                          <button className="btn btn-primary">
                            <i className="fab fa-android" />
                            <span>&nbsp;Download on the Android</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane telegram tab-pane fade"
                    id="telegram-tab-pane"
                    role="tabpanel"
                    aria-labelledby="telegram-tab"
                    tabIndex="0"
                  >
                    <div className="text-center">
                      <b>Please enter your login password to continue</b>
                      <div className="form-group mt-3 secure-password">
                        <input
                          type="password"
                          placeholder="Enter your login password"
                          className="form-control"
                        />
                        <button className="btn btn-primary ms-2 vt">
                          Get Connection ID
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecureAuth;
