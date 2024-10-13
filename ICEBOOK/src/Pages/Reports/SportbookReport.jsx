import React, { useState } from "react";
import { Link } from "react-router-dom";
function SportbookReport() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">SportBook Report</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">SportBook Report</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="tabs">
                      <div className="">
                        <ul role="tablist" className="nav nav-tabs dark-border">
                          <li role="presentation" className="nav-item">
                            <Link
                              id="nav-settled-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-settled"
                              type="button"
                              role="tab"
                              aria-controls="nav-settled"
                              aria-selected="true"
                              to="#"
                              className="nav-link active"
                            >
                              Settled Bets
                            </Link>
                          </li>
                          <li role="presentation" className="nav-item">
                            <Link
                              id="nav-unsettled-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-unsettled"
                              type="button"
                              role="tab"
                              aria-controls="nav-unsettled"
                              aria-selected="true"
                              to="#"
                              className="nav-link"
                            >
                              Unsettled Bets
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content p-3 text-muted">
                        <div
                          id="nav-settled"
                          role="tabpanel"
                          aria-labelledby="nav-settled-tab"
                          tabIndex="0"
                          className="tab-pane active"
                        >
                          <form method="post" className="ajaxFormSubmit">
                            <div className="row row5 mb-3">
                              <div className="form-group col-xl-2">
                                <select className="form-select form-control">
                                  <option value="">Select option</option>
                                </select>
                              </div>
                              <div className="col-xl-2 form-group mb-3">
                                <input
                                  name="date"
                                  type="date"
                                  autoComplete="off"
                                  placeholder=""
                                  className="form-control"
                                />
                              </div>
                              <div className="col-xl-2 form-group mb-3">
                                <select
                                  name="gtype"
                                  className="form-control form-select"
                                >
                                  <option value="">Select</option>
                                  <option value="ezugi">Ezugi</option>
                                  <option value="ss">Super Spade</option>
                                  <option value="qt">Slot 3</option>
                                  <option value="evo">Evolution</option>
                                </select>
                              </div>
                              <div className="col-xl-5 mb-3">
                                <button
                                  type="submit"
                                  id="loaddata"
                                  className="btn btn-primary me-2"
                                >
                                  Load
                                </button>
                                <button
                                  type="button"
                                  id="reset"
                                  className="btn btn-light"
                                >
                                  Reset
                                </button>
                                <div className="d-inline-block ms-3">
                                  <div
                                    id="export_1718685212053"
                                    className="d-inline-block disabled"
                                  >
                                    <button
                                      type="button"
                                      disabled="disabled"
                                      className="btn me-1 btn-success disabled"
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
                            </div>
                          </form>
                          <div className="table-responsive">
                            <table className="table b-table table-bordered table-hover">
                              <thead>
                                <tr>
                                  <th>Game Name</th>
                                  <th>Type</th>
                                  <th className="text-end">Amount</th>
                                  <th className="text-end">Total</th>
                                  <th>Date</th>
                                  <th>Round ID</th>
                                  <th> Transaction Id</th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </div>
                        <div
                          id="nav-unsettled"
                          role="tabpanel"
                          aria-labelledby="nav-unsettled-tab"
                          tabIndex="0"
                          className="tab-pane"
                        >
                          <form method="post" className="ajaxFormSubmit">
                            <div className="row row5 mb-3">
                              <div className="form-group col-xl-2">
                                <select className="form-select form-control">
                                  <option value="">Select option</option>
                                </select>
                              </div>
                              <div className="col-xl-2 mb-3">
                                <select
                                  name="gtype"
                                  className="form-control form-select"
                                >
                                  <option value="">Select</option>
                                  <option value="ezugi">Ezugi</option>
                                  <option value="ss">Super Spade</option>
                                  <option value="qt">Slot 3</option>
                                  <option value="evo">Evolution</option>
                                </select>
                              </div>
                              <div className="col-xl-5 mb-3">
                                <button
                                  type="submit"
                                  id="loaddata"
                                  className="btn btn-primary"
                                >
                                  Load
                                </button>
                                <button
                                  type="button"
                                  id="reset"
                                  className="btn btn-light ms-2"
                                >
                                  Reset
                                </button>
                              </div>
                            </div>
                          </form>
                          <div className="table-responsive">
                            <table className="table b-table table-bordered table-hover">
                              <thead>
                                <tr>
                                  <th>Game Name</th>
                                  <th>Type</th>
                                  <th className="text-end">Amount</th>
                                  <th className="text-end">Total</th>
                                  <th>Date</th>
                                  <th>Round ID</th>
                                  <th> Transaction Id</th>
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
      </div>
    </>
  );
}

export default SportbookReport;
