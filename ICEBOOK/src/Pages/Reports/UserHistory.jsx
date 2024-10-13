import React, { useState } from "react";
import { Link } from "react-router-dom";
function UserHistory() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">USER HISTORY</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">User History</span>
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
                    id="loginHistory-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#loginHistory-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="loginHistory-tab-pane"
                    aria-selected="true"
                    to="#"
                    className="nav-link active"
                  >
                    Login History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    id="changepasswordH-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#changepasswordH-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="changepasswordH-tab-pane"
                    aria-selected="true"
                    to="#"
                    className="nav-link"
                  >
                    Change Password History
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
                        id="loginHistory-tab-pane"
                        role="tabpanel"
                        aria-labelledby="loginHistory-tab"
                        tabindex="0"
                      >
                        <form data-vv-scope="InserUserAccount" method="post">
                          <div className="row row5">
                            <div className="form-group col-md-3">
                              <select className="form-select form-control">
                                <option value="all">All</option>
                                <option value="user">User</option>
                              </select>
                            </div>
                            <div className="form-group col-md-3">
                              <input type="date" className="form-control" />
                            </div>
                            <div className="form-group d-flex gap-1 col-md-6">
                              <button type="button" className="btn btn-primary">
                                Load
                              </button>
                              <button
                                type="button"
                                id="reset"
                                className="btn btn-light"
                              >
                                Reset
                              </button>
                              <div
                                id="export_1718451102987"
                                className="d-inline-block disabled"
                              >
                                <button
                                  type="button"
                                  disabled="disabled"
                                  className="btn btn-success disabled"
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
                        </form>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Username</th>
                                <th>Date</th>
                                <th>IP</th>
                                <th>Detail</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="changepasswordH-tab-pane"
                        role="tabpanel"
                        aria-labelledby="changepasswordH-tab"
                        tabindex="0"
                      >
                        <form data-vv-scope="InserUserAccount" method="post">
                          <div className="row row5">
                            <div className="form-group col-md-3">
                              <select className="form-select form-control">
                                <option value="all">All</option>
                                <option value="user">User</option>
                              </select>
                            </div>
                            <div className="form-group col-md-3">
                              <input type="date" className="form-control" />
                            </div>
                            <div className="form-group d-flex gap-1 col-md-6">
                              <button type="button" className="btn btn-primary">
                                Load
                              </button>
                              <button
                                type="button"
                                id="reset"
                                className="btn btn-light"
                              >
                                Reset
                              </button>
                              <div
                                id="export_1718451102987"
                                className="d-inline-block disabled"
                              >
                                <button
                                  type="button"
                                  disabled="disabled"
                                  className="btn btn-success disabled"
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
                        </form>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Username</th>
                                <th>Date</th>
                                <th>IP</th>
                                <th>Detail</th>
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

export default UserHistory;
