import React, { useState } from "react";
import { Link } from "react-router-dom";
function TurnOver() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Turn Over</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Turn Over</span>
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
                        <div className="form-group col-md-2">
                          <select className="form-control form-select">
                            <option value="">Select Option</option>
                          </select>
                        </div>
                        <div className="form-group col-md-2">
                          <input type="date" className="form-control" />
                        </div>
                        <div className="form-group col-md-2">
                          <input type="date" className="form-control" />
                        </div>
                        <div className="form-group col-md-2">
                          <select className="form-control form-select">
                            <option value="">Select Type</option>
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
                            id="export_1718454005585"
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
                    </form>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="text-end">Loss Turn Over</th>
                          <th className="text-end">Loss</th>
                          <th className="text-end">Win Turn Over</th>
                          <th className="text-end">Win</th>
                          <th className="text-end">Total Turn Over </th>
                          <th className="text-end">Total P/L</th>
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
    </>
  );
}

export default TurnOver;
