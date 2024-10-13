import React, { useState } from "react";
import { Link } from "react-router-dom";
function CasinoResult() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Casino Results</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Casino Results</span>
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
                          <input type="date" className="form-control" />
                        </div>
                        <div className="form-group col-md-3">
                          <select className="form-control form-select">
                            <option value="">Select Casino</option>
                          </select>
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
                          <th>Market Id</th>
                          <th>Winner</th>
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

export default CasinoResult;
