import React, { useState } from "react";
import { Link } from "react-router-dom";
function AccountStatement() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">ACCOUNT STATEMENT</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" className="" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Account Statement</span>
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
                    <div className="report-form mb-3">
                      <form method="post" className="ajaxFormSubmit">
                        <div className="row row5">
                          <div className="col-lg-3">
                            <div className="form-group">
                              <label htmlFor="client_name">
                                Search By Client Name
                              </label>
                              <select
                                className="form-select form-control"
                                id="client_name"
                              >
                                <option value="">Select</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="form-group">
                              <label>Select Date Range</label>
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="form-group">
                              <label>Type</label>
                              <select className="form-control form-select">
                                <option value={1}>
                                  Deposit/Withdraw Report
                                </option>
                                <option value={2}>Sports Report</option>
                                <option value={3}>Casino Report</option>
                                <option value={4}>
                                  Third Party Casino Report
                                </option>
                                <option value={5}>Sportbook</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="form-group">
                              <label>Statement</label>
                              <select className="form-control form-select">
                                <option value="all">All</option>
                                <option value="allcredit">Credit - All</option>
                                <option value="creditupper">
                                  Credit - Upper
                                </option>
                                <option value="creditdown">
                                  Credit - Down
                                </option>
                                <option value="allbalance">pts - All</option>
                                <option value="balanceupper">
                                  pts - Upper
                                </option>
                                <option value="balancedown">pts - Down</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row row5">
                          <div className="col-lg-3 d-flex gap-1">
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
                              className="btn btn-light"
                            >
                              Reset
                            </button>
                            <div
                              id="export_1718449911598"
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
                    </div>

                    <div className="table-responsive mt-3">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th className="text-end">Sr No</th>
                            <th className="text-end">Credit</th>
                            <th className="text-end">Debit</th>
                            <th className="text-end">pts</th>
                            <th width={300}>Remark</th>
                            <th>Fromto</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row">
                            <td>08/06/2024 00:00:00</td>
                            <td>
                              <p className="text-end mb-0">1</p>
                            </td>
                            <td>
                              <p className="text-end mb-0 text-success">
                                60,731.89
                              </p>
                            </td>
                            <td>
                              <p className="text-end mb-0"></p>
                            </td>
                            <td>
                              <p className="text-end mb-0 text-success">
                                60,731.89
                              </p>
                            </td>
                            <td>
                              <p className="mb-0">Opening pts</p>
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

export default AccountStatement;
