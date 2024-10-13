import React, { useState } from "react";
import { Link } from "react-router-dom";
function UserAuthentication() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">User Authentication</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">User Authentication</span>
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
                    <div className="d-flex gap-2 mb-3">
                      <button
                        type="button"
                        className="btn mr-1 btn-success"
                      >
                        <i className="fas fa-file-excel" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                      >
                        <i className="fas fa-file-pdf" />
                      </button>
                    </div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Username</th>
                          <th>Authentication</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>icepr777</td>
                          <td>no authentication</td>
                        </tr>
                        <tr>
                          <td>iceajit777</td>
                          <td>no authentication</td>
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
    </>
  );
}

export default UserAuthentication;
