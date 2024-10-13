import React, { useState } from "react";
import { Link } from "react-router-dom";
function CurrentBets() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Current Bets</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Current Bets</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="casino-report-tabs">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link
                    id="sports-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#sports-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="sports-tab-pane"
                    aria-selected="true"
                    to="#"
                    className="nav-link active"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    id="casino-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#casino-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="casino-tab-pane"
                    aria-selected="true"
                    to="#"
                    className="nav-link"
                  >
                    Casino
                  </Link>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="sports-tab-pane"
                        role="tabpanel"
                        aria-labelledby="sports-tab"
                        tabindex="0"
                      >
                        <div className="report-form mb-3 row align-items-center">
                          <div className="col-md-4 col-lg-3">
                            <div className="form-check d-inline-flex align-items-center gap-1 me-2">
                              <input
                                className="form-check-input p-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="matched"
                              />
                              <label
                                className="form-check-label mb-0"
                                for="matched"
                              >
                                Matched
                              </label>
                            </div>

                            <div className="form-check d-inline-flex align-items-center gap-1">
                              <input
                                className="form-check-input p-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="deleted"
                              />
                              <label
                                className="form-check-label mb-0"
                                for="deleted"
                              >
                                Deleted
                              </label>
                            </div>
                          </div>
                          <div className="col-md-8 col-lg-4">
                            <div className="">
                              <div className="form-check me-2 d-inline-flex align-items-center gap-1">
                                <input
                                  className="form-check-input p-2"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="all"
                                />
                                <label
                                  className="form-check-label mb-0"
                                  for="all"
                                >
                                  All
                                </label>
                              </div>
                              <div className="form-check me-2 d-inline-flex align-items-center gap-1">
                                <input
                                  className="form-check-input p-2"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="back"
                                />
                                <label
                                  className="form-check-label mb-0"
                                  for="back"
                                >
                                  Back
                                </label>
                              </div>
                              <div className="form-check me-2 d-inline-flex align-items-center gap-1">
                                <input
                                  className="form-check-input p-2"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="lay"
                                />
                                <label
                                  className="form-check-label mb-0"
                                  for="lay"
                                >
                                  Lay
                                </label>
                              </div>
                            </div>
                            <div className="custom-control-inline d-flex gap-2">
                              <button
                                title="Refresh Data"
                                type="button"
                                className="btn mr-2 btn-primary"
                              >
                                Load
                              </button>
                              <div
                                id="export_1718451848662"
                                className="d-inline-block disabled"
                              >
                                <button
                                  type="button"
                                  disabled="disabled"
                                  className="btn mr-1 btn-success disabled"
                                >
                                  <i className="fas fa-file-excel" />
                                </button>
                              </div>
                              <button
                                type="button"
                                disabled="disabled"
                                className="btn btn-danger disabled"
                              >
                                <i className="fas fa-file-pdf" />
                              </button>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-5 text-right">
                            <div className="custom-control-inlinemr-0 mt-1">
                              <h5>
                                Total Soda: <span className="mr-2">0</span>
                                Total Amount: <span>0.00</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Event Type</th>
                                <th>Event Name</th>
                                <th>User Name</th>
                                <th>M Name</th>
                                <th>Nation</th>
                                <th>U Rate</th>
                                <th>Amount</th>
                                <th>Place Date</th>
                                <th>Browser</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="casino-tab-pane"
                        role="tabpanel"
                        aria-labelledby="casino-tab"
                        tabindex="0"
                      >
                        <div className="report-form mb-3 row align-items-center">
                          <div className="col-md-4 col-lg-3"></div>
                          <div className="col-md-8 col-lg-4">
                            <div className="">
                              <div className="form-check me-2 d-inline-flex align-items-center gap-1">
                                <input
                                  className="form-check-input p-2"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="all"
                                />
                                <label
                                  className="form-check-label mb-0"
                                  for="all"
                                >
                                  All
                                </label>
                              </div>
                              <div className="form-check me-2 d-inline-flex align-items-center gap-1">
                                <input
                                  className="form-check-input p-2"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="back"
                                />
                                <label
                                  className="form-check-label mb-0"
                                  for="back"
                                >
                                  Back
                                </label>
                              </div>
                              <div className="form-check me-2 d-inline-flex align-items-center gap-1">
                                <input
                                  className="form-check-input p-2"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="lay"
                                />
                                <label
                                  className="form-check-label mb-0"
                                  for="lay"
                                >
                                  Lay
                                </label>
                              </div>
                            </div>
                            <div className="custom-control-inline d-flex gap-2">
                              <button
                                title="Refresh Data"
                                type="button"
                                className="btn mr-2 btn-primary"
                              >
                                Load
                              </button>
                              <div
                                id="export_1718451848662"
                                className="d-inline-block disabled"
                              >
                                <button
                                  type="button"
                                  disabled="disabled"
                                  className="btn mr-1 btn-success disabled"
                                >
                                  <i className="fas fa-file-excel" />
                                </button>
                              </div>
                              <button
                                type="button"
                                disabled="disabled"
                                className="btn btn-danger disabled"
                              >
                                <i className="fas fa-file-pdf" />
                              </button>
                            </div>
                          </div>
                          <div className="col-md-12 col-lg-5 text-right">
                            <div className="custom-control-inlinemr-0 mt-1">
                              <h5>
                                Total Soda: <span className="mr-2">0</span>
                                Total Amount: <span>0.00</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Event Type</th>
                                <th>Event Name</th>
                                <th>User Name</th>
                                <th>M Name</th>
                                <th>Nation</th>
                                <th>U Rate</th>
                                <th>Amount</th>
                                <th>Place Date</th>
                                <th>Browser</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
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

export default CurrentBets;
