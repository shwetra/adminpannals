import React, { useState } from "react";
import { Link } from "react-router-dom";
function CreateAccount() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div data-v-b00d14ae="">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Create Account</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" className="" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link
                          to="/admin/activeusers"
                          className=""
                          target="_self"
                        >
                          Users
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Create Account</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <form data-vv-scope="InserUserAccount" method="post">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">General Information</h4>
                      <div className="form-group">
                        <label>
                          User name: <span className="text-danger">*</span>
                        </label>
                        <input
                          placeholder="User Name"
                          type="text"
                          name="username"
                          data-vv-as="User Name"
                          autoComplete="new-password"
                          className="form-control animation is-invalid"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Full Name: <span className="text-danger">*</span>
                        </label>
                        <input
                          placeholder="Full Name"
                          data-vv-as="Full Name"
                          type="text"
                          name="fullname"
                          className="form-control animation"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Password: <span className="text-danger">*</span>
                        </label>
                        <input
                          placeholder="Password"
                          type="password"
                          data-vv-as="Password"
                          name="password"
                          className="form-control animation"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Confirm Password:
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          placeholder="Confirm Password"
                          type="password"
                          data-vv-as="Confirm Password"
                          name="cpassword"
                          className="form-control animation"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>
                      <div className="form-group">
                        <label>City:</label>
                        <input
                          placeholder="City"
                          type="text"
                          data-vv-as="City"
                          name="city"
                          className="form-control animation"
                          aria-required="false"
                          aria-invalid="false"
                        />
                      </div>
                      <div className="form-group">
                        <label>Mobile Number:</label>
                        <input
                          placeholder="Mobile Number"
                          type="text"
                          data-vv-as="Mobile Number"
                          name="mono"
                          maxLength={15}
                          className="form-control animation"
                          aria-required="false"
                          aria-invalid="false"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="form-group">
                        <label>Credit Amount:</label>
                        <input
                          placeholder="Credit Amount"
                          type="number"
                          data-vv-as="Credit Amount"
                          name="camt"
                          className="form-control"
                          aria-required="false"
                          aria-invalid="false"
                        />
                      </div>
                      <div className="form-group tag-select">
                        <label>
                          User Type: <span className="text-danger">*</span>
                        </label>
                        <select
                          name="newlvlno"
                          label="label"
                          data-vv-as="User Type"
                          className="form-control"
                          aria-required="true"
                          aria-invalid="false"
                        >
                          <option value={0}>Select User Type</option>
                          <option value={4}>Super Master</option>
                          <option value={5}>Master</option>
                          <option value={6}>Agent</option>
                          <option value={7}>User</option>
                        </select>
                      </div>
                      <h4 className="card-title">Partnership Information</h4>
                      <div>
                        <div className="form-group">
                          <label>Partnership With No Return:</label>
                          <input
                            placeholder="Partnership With No Return"
                            type="text"
                            name="spart1"
                            data-vv-as="Partnership With No Return"
                            maxLength={4}
                            className="form-control animation"
                            aria-required="true"
                            aria-invalid="false"
                          />
                          <p className="help is-success m-0 d-inline-block">
                            Our : 84.5 | Down Line: 0
                          </p>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Remark:</label>
                        <textarea
                          placeholder="Remark"
                          data-vv-as="Remark"
                          name="remark"
                          className="form-control"
                          aria-required="false"
                          aria-invalid="false"
                          defaultValue={""}
                        />
                      </div>
                      <div className="d-flex justify-content-end align-items-center">
                        <input
                          placeholder="Transaction Code"
                          type="password"
                          name="mpassword"
                          className="form-control"
                          aria-required="true"
                          aria-invalid="false"
                        />
                        <button
                          type="submit"
                          id="spinner-dark-8"
                          className="btn btn-primary ms-2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
