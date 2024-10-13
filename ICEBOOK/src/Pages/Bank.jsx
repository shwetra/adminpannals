import React, { useState } from "react";
import { Link } from "react-router-dom";
function Bank() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div>
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Bank</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" className="" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Bank</span>
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
                    <div className="row row5">
                      <div className="col-md-6 mb-2 search-form">
                        <form
                          method="post"
                          className="ajaxFormSubmit d-flex gap-2 align-items-center"
                        >
                          <div className="d-inline-block form-group form-group-feedback form-group-feedback-right mb-0">
                            <input
                              type="text"
                              name="searchKey"
                              placeholder="Search User"
                              className="form-control"
                            />
                          </div>
                          <div className="d-inline-block d-flex gap-2 align-items-center">
                            <button
                              type="submit"
                              id="submit"
                              className="btn btn-primary"
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
                          </div>
                        </form>
                      </div>
                      <div className="col-md-6 text-right">
                        <div className="d-inline-block mb-md-0 mb-2">
                          <div
                            id="export_1718448031654"
                            className="d-inline-block"
                          >
                            <button
                              type="button"
                              className="btn me-1 btn-success"
                            >
                              <i className="fas fa-file-excel" />
                            </button>
                          </div>
                          <button type="button" className="btn btn-danger me-1">
                            <i className="fas fa-file-pdf" />
                          </button>
                        </div>
                        <form
                          data-vv-scope="transferAll"
                          method="post"
                          className="d-inline-block"
                        >
                          <div className="d-inline-block form-group form-group-feedback form-group-feedback-right me-1">
                            <input
                              type="password"
                              name="masterPassword"
                              placeholder="Transaction Code"
                              data-vv-as="Transaction Code"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="false"
                            />
                          </div>
                          <div className="d-inline-block">
                            <button
                              type="submit"
                              id="transferSubmit"
                              className="btn btn-primary"
                            >
                              Transfer All
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="table-responsive mt-3">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>User Name</th>
                            <th className="text-end">CR</th>
                            <th className="text-end">PTS</th>
                            <th className="text-end">Client(P/L)</th>
                            <th className="text-end">Exposure</th>
                            <th className="text-end">Available pts</th>
                            <th>Account Type</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row">
                            <td>
                              <span>icepr777</span>
                            </td>
                            <td>
                              <p className="text-end mb-0">0</p>
                            </td>
                            <td>
                              <p className="text-end mb-0">0</p>
                            </td>
                            <td>
                              <p className="text-end mb-0">0</p>
                            </td>
                            <td>
                              <p className="text-end mb-0">0</p>
                            </td>
                            <td>
                              <p className="text-end mb-0">0</p>
                            </td>
                            <td>
                              <>
                                <Link to="#" className="text-success">
                                  All <i className="fas fa-arrow-right" />
                                </Link>
                                <input
                                  type="number"
                                  name="amount"
                                  placeholder={0}
                                  className="form-control form-control-sm transfer-amt"
                                />
                                <button className="btn btn-info btn-sm">
                                  Submit
                                </button>
                              </>
                            </td>
                            <td>
                              <p className="mb-0"></p>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
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

export default Bank;
