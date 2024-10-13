import React, { useState } from "react";
import { Link } from "react-router-dom";
function ProfitLoss() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">PARTY WIN LOSS</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Profit Loss</span>
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
                    <form data-vv-scope="InserUserAccount" method="post">
                      <div className="row row5">
                        <div className="form-group col-md-3">
                          <select className="form-select form-control">
                            <option value="all">All</option>
                            <option value="user">User</option>
                          </select>
                        </div>
                        <div className="form-group d-flex gap-1 col-md-9">
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

                    <div className="table-responsive mt-3">
                      <table className="table b-table table no-footer table-hover table-bordered">
                        <thead role="rowgroup">
                          <tr role="row">
                            <th role="columnheader">
                              <div>No</div>
                            </th>
                            <th role="columnheader">
                              <div>User Name</div>
                            </th>
                            <th role="columnheader">
                              <div>Level</div>
                            </th>
                            <th role="columnheader" className="text-right">
                              <div>Casino pts</div>
                            </th>
                            <th role="columnheader" className="text-right">
                              <div>Sport pts</div>
                            </th>
                            <th role="columnheader" className="text-right">
                              <div>Third Party pts</div>
                            </th>
                            <th role="columnheader" className="text-right">
                              <div>Profit/Loss</div>
                            </th>
                            <th role="columnheader" className="text-left">
                              <div>Ptype</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody role="rowgroup">
                          <tr role="row" className="b-table-empty-row">
                            <td colSpan="8" role="cell">
                              <div role="alert" aria-live="polite">
                                <div className="text-center my-2">
                                  There are no records to show
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot role="rowgroup">
                          <tr role="row">
                            <th role="columnheader">
                              <span></span>
                            </th>
                            <th role="columnheader">
                              <span></span>
                            </th>
                            <th role="columnheader">
                              <span></span>
                            </th>
                            <th role="columnheader" className="text-right">
                              <span>0.00</span>
                            </th>
                            <th role="columnheader" className="text-right">
                              <span>0.00</span>
                            </th>
                            <th role="columnheader" className="text-right">
                              <span>0.00</span>
                            </th>
                            <th role="columnheader" className="text-right">
                              <span>0.00</span>
                            </th>
                            <th role="columnheader" className="text-left">
                              <span></span>
                            </th>
                          </tr>
                        </tfoot>
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

export default ProfitLoss;
