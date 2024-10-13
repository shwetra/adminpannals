import React, { useState } from "react";
import { Link } from "react-router-dom";
function GeneralLock() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">General Lock</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">General Lock</span>
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
                          <input
                            type="search"
                            placeholder="Search By Client Name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group col-md-2">
                          <input
                            type="passowrd"
                            placeholder="Transaction Code"
                            className="form-control"
                          />
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
                        </div>
                      </div>
                    </form>
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

export default GeneralLock;
