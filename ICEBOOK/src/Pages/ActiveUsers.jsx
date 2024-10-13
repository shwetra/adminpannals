import React, { useState } from "react";
import { Link } from "react-router-dom";
function ActiveUsers() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div>
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">
                    ACCOUNT LIST FOR ACTIVE USERS
                  </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/" target="_self">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <span aria-current="location">Active Users</span>
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
                      <div className="col-md-6 text-end mb-2">
                        <div className="d-inline-block d-flex justify-content-end gap-2">
                          <button type="button" className="btn btn-success">
                            <i className="bi bi-file-earmark-excel" />
                          </button>
                          <button type="button" className="btn btn-danger">
                            <i className="bi bi-file-earmark-pdf" />
                          </button>
                          <Link
                            to="/admin/users/insertuser"
                            className="btn btn-success"
                          >
                            <i aria-hidden="true" className="fa fa-plus me-1" />
                            CREATE ACCOUNT
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive mt-3">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>User Name</th>
                            <th>CR</th>
                            <th>PTS</th>
                            <th>Client(P/L)</th>
                            <th>Client(P/L)%</th>
                            <th>Exposure</th>
                            <th>Available pts</th>
                            <th>B st</th>
                            <th>U st</th>
                            <th>PName</th>
                            <th>Account Type</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row">
                            <td>
                              <span>Gokull777</span>
                            </td>
                            <td>
                              <Link
                                to="#"
                                className="text-end mb-0 cp text-warning"
                                data-bs-toggle="modal"
                                data-bs-target="#CreditModal"
                              >
                                0
                              </Link>
                            </td>
                            <td>
                              <p className="text-end mb-0">0</p>
                            </td>
                            <td>
                              <p className="text-end mb-0">0</p>
                            </td>
                            <td>
                              <p className="text-end mb-0">0.00</p>
                            </td>
                            <td className="text-end">
                              <p className="mb-0 text-end">0</p>
                            </td>
                            <td>
                              <p className="text-end mb-0">0</p>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input px-3 py-2"
                                  type="checkbox"
                                  role="switch"
                                  id="b-st"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input px-3 py-2"
                                  type="checkbox"
                                  role="switch"
                                  id="u-st"
                                />
                              </div>
                            </td>
                            <td>
                              <p className="text-start mb-0">0 PNR</p>
                            </td>
                            <td>Agent</td>
                            <td>
                              <div role="group" className="btn-group">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#DepositModal"
                                  className="btn btn-success"
                                >
                                  D
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#WithdrawModal"
                                  className="btn btn-danger"
                                >
                                  W
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ProfileModal"
                                  className="btn btn-info"
                                >
                                  More
                                </button>
                              </div>
                            </td>
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

      {/* popups */}

      {/* deposit modal */}
      <div
        className="modal fade"
        id="DepositModal"
        tabIndex="-1"
        aria-labelledby="DepositModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-success">
              <h5
                className="modal-title text-uppercase text-white"
                id="DepositModalLabel"
              >
                Deposit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="tabs">
                <div className="">
                  <ul role="tablist" className="nav nav-tabs">
                    <li role="presentation" className="nav-item">
                      <Link
                        role="tab"
                        aria-selected="true"
                        aria-setsize={1}
                        aria-posinset={1}
                        to="#"
                        target="_self"
                        className="nav-link active tab-bg-success"
                        aria-controls="__BVID__3476"
                      >
                        Deposit
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content text-muted">
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className="tab-pane active"
                    aria-labelledby="__BVID__3476___BV_tab_button__"
                  >
                    <form data-vv-scope="userdepositeMDL" method="post">
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          David7776
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeloginusramount"
                                className="form-control txt-right"
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeloginusrNamount"
                                className="form-control txt-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Gokull777
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeusrnameamount"
                                className="form-control txt-right"
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeusrnameNamount"
                                className="form-control txt-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Profit/Loss
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="P/L"
                                type="text"
                                readOnly="readonly"
                                name="userDipositepl"
                                className="form-control txt-right"
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="P/L"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeplnew"
                                className="form-control txt-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">Amount</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            placeholder="Amount"
                            type="number"
                            name="userDipositeamount"
                            className="form-control txt-right"
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">Remark</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <textarea
                            placeholder="Remark"
                            name="userDipositeremark"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Transaction Code
                        </label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            placeholder="Transaction Code"
                            name="userDipositempassword"
                            type="password"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 text-right">
                          <button type="submit" className="btn btn-success">
                            submit
                            <i className="fas fa-sign-in-alt ml-1" />
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

      {/* Withdraw modal */}
      <div
        className="modal fade"
        id="WithdrawModal"
        tabIndex="-1"
        aria-labelledby="WithdrawModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-danger">
              <h5
                className="modal-title text-uppercase text-white"
                id="WithdrawModalLabel"
              >
                Withdraw
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="tabs">
                <div className="">
                  <ul role="tablist" className="nav nav-tabs">
                    <li role="presentation" className="nav-item">
                      <Link
                        role="tab"
                        aria-selected="true"
                        aria-setsize={1}
                        aria-posinset={1}
                        to="#"
                        target="_self"
                        className="nav-link active tab-bg-success"
                        aria-controls="__BVID__2832"
                      >
                        Withdraw
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content text-muted">
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className="tab-pane active"
                    aria-labelledby="__BVID__2832___BV_tab_button__"
                  >
                    <form data-vv-scope="userWithdrawFrm" method="post">
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          David7776
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userWithdrawFrmloginusramount"
                                className="form-control txt-right"
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userWithdrawFrmloginusrNamount"
                                className="form-control txt-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Gokull777
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userWithdrawFrmusrnameamount"
                                className="form-control txt-right"
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userWithdrawFrmusrnameNamount"
                                className="form-control txt-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Profit/Loss
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="P/L"
                                type="text"
                                readOnly="readonly"
                                name="userDipositepl"
                                className="form-control txt-right"
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="P/L"
                                type="text"
                                readOnly="readonly"
                                name="userDipositeplnew"
                                className="form-control txt-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">Amount</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            placeholder="Amount"
                            type="number"
                            name="userWithdrawFrmamount"
                            className="form-control txt-right"
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">Remark</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <textarea
                            placeholder="Remark"
                            name="userWithdrawFrmremark"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Transaction Code
                        </label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            placeholder="Transaction Code"
                            name="userWithdrawFrmmpassword"
                            type="password"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 text-right">
                          <button type="submit" className="btn btn-danger">
                            submit
                            <i className="fas fa-sign-in-alt ml-1" />
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

      {/* Profile modal */}
      <div
        className="modal fade"
        id="ProfileModal"
        tabIndex="-1"
        aria-labelledby="ProfileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h5
                className="modal-title text-uppercase text-white"
                id="ProfileModalLabel"
              >
                GOKULL777
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="tabs" id="__BVID__2841">
                
                <div className="">
                  <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    
                    <li role="presentation" className="nav-item">
                      <Link
                        to="#"
                        className="nav-link active tab-bg-primary"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="true"
                      >
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li role="presentation" className="nav-item">
                      <Link
                        role="tab"
                        aria-selected="false"
                        aria-setsize={5}
                        aria-posinset={2}
                        to="#"
                        target="_self"
                        className="nav-link"
                        id="__BVID__2844___BV_tab_button__"
                        aria-controls="__BVID__2844"
                        tabIndex={-1}
                      >
                        <span className="d-inline-block d-sm-none">C Pass</span>
                        <span className="d-none d-sm-inline-block">
                          Change Password
                        </span>
                      </Link>
                    </li>
                    <li role="presentation" className="nav-item">
                      <Link
                        role="tab"
                        aria-selected="false"
                        aria-setsize={5}
                        aria-posinset={3}
                        to="#"
                        target="_self"
                        className="nav-link"
                        id="__BVID__2846___BV_tab_button__"
                        aria-controls="__BVID__2846"
                        tabIndex={-1}
                      >
                        <span className="d-inline-block d-sm-none">Lock</span>
                        <span className="d-none d-sm-inline-block">
                          User lock
                        </span>
                      </Link>
                    </li>
                    <li role="presentation" className="nav-item">
                      <Link
                        role="tab"
                        aria-selected="false"
                        aria-setsize={5}
                        aria-posinset={4}
                        to="#"
                        target="_self"
                        className="nav-link"
                        id="__BVID__2850___BV_tab_button__"
                        aria-controls="__BVID__2850"
                        tabIndex={-1}
                      >
                        <span className="d-inline-block d-sm-none">
                          Acc history
                        </span>
                        <span className="d-none d-sm-inline-block">
                          Account history
                        </span>
                      </Link>
                    </li>
                    <li role="presentation" className="nav-item">
                      <Link
                        role="tab"
                        aria-selected="false"
                        aria-setsize={5}
                        aria-posinset={5}
                        to="#"
                        target="_self"
                        className="nav-link"
                        id="__BVID__2863___BV_tab_button__"
                        aria-controls="__BVID__2863"
                        tabIndex={-1}
                      >
                        <span className="d-inline-block d-sm-none">
                          Edit Profile
                        </span>
                        <span className="d-none d-sm-inline-block">
                          Edit Profile
                        </span>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
                <div
                  className="tab-content text-muted"
                  id="__BVID__2841__BV_tab_container_"
                >
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className="tab-pane active"
                    id="__BVID__2842"
                    aria-labelledby="__BVID__2842___BV_tab_button__"
                    style={{}}
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="card text-center">
                          <div className="card-body p-2">
                            <div className="avatar-sm mx-auto mb-1">
                              <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16 text-uppercase">
                                G
                              </span>
                            </div>
                            <h5 className="font-size-15">
                              <Link
                                to="#"
                                className="text-dark"
                              >
                                Gokull777
                              </Link>
                            </h5>
                            <p className="text-muted mb-1">Gokull777</p>
                          </div>
                          <div className="card-footer bg-transparent border-top">
                            <div className="contact-links d-flex font-size-20">
                              <div className="flex-fill">
                                <Link title="" to="#">
                                  <i className="bx bx-phone-call fs-5" />
                                </Link>
                              </div>
                              <div className="flex-fill">
                                <Link title="City: " to="#">
                                  <i className="bx bxs-city fs-5" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card personalinfo-card">
                          <div className="card-body">
                            <h4 className="card-title mb-4">
                              Partnership Information
                            </h4>
                            <div className="table-responsive mb-0">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Partnership Name:
                                    </th>
                                    <td className="br-0">
                                      Partnership With No Return
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      User Part:
                                    </th>
                                    <td className="br-0">0</td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Our Part:
                                    </th>
                                    <td className="br-0">84.5</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title mb-4">
                              Additional Information
                            </h4>
                            <div className="table-responsive mb-0">
                              <table className="table">
                                <tbody>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      User Name:
                                    </th>
                                    <td className="br-0">Gokull777</td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Full Name:
                                    </th>
                                    <td className="br-0">Gokull777</td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Mobile Number:
                                    </th>
                                    <td className="br-0" />
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      City:
                                    </th>
                                    <td className="br-0" />
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Credit pts:
                                    </th>
                                    <td className="br-0">0.00</td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      pts:
                                    </th>
                                    <td className="br-0">
                                      <span>0.00</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Client P/L:
                                    </th>
                                    <td className="br-0">0.00</td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Exposure:
                                    </th>
                                    <td className="br-0">0.00</td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Casino pts:
                                    </th>
                                    <td className="br-0">0.00</td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Sports pts:
                                    </th>
                                    <td className="br-0">0.00</td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Third Party pts:
                                    </th>
                                    <td className="br-0">0.00</td>
                                  </tr>
                                  <tr>
                                    <th scope="row" className="br-0">
                                      Created Date :
                                    </th>
                                    <td className="br-0">
                                      <span>09/01/2024 19:37:00</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="true"
                    className="tab-pane"
                    id="__BVID__2844"
                    aria-labelledby="__BVID__2844___BV_tab_button__"
                    style={{ display: "none" }}
                  >
                    <form data-vv-scope="UserChangePassword" method="post">
                      <div className="form-group row">
                        <label className="col-form-label col-4">Password</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            placeholder="Password"
                            type="password"
                            name="userchangepasswordpassword"
                            data-vv-as="Password"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                          />
                          
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Confirm Password
                        </label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            placeholder="Confirm Password"
                            type="password"
                            name="userchangepasswordcpassword"
                            data-vv-as="Confirm Password"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                          />
                          
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Transaction Code
                        </label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            placeholder="Transaction Code"
                            type="password"
                            name="userchangepasswordmpassword"
                            data-vv-as="Transaction Code"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                          />
                          
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 text-right">
                          <button type="submit" className="btn btn-primary">
                            submit
                            <i className="fas fa-sign-in-alt ml-1" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="true"
                    className="tab-pane"
                    id="__BVID__2846"
                    aria-labelledby="__BVID__2846___BV_tab_button__"
                    style={{ display: "none" }}
                  >
                    <form data-vv-scope="UserLock" method="post">
                      <div className="form-group row">
                        <label className="col-form-label col-4">Bet lock</label>
                        <div className="mb-1 custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultValue="true"
                            id="__BVID__2848"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__2848"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          User lock
                        </label>
                        <div className="mb-1 custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultValue="true"
                            id="__BVID__2849"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__2849"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Transaction Code
                        </label>
                        <div className="col-8 form-group-feedback-right pl-0">
                          <input
                            placeholder="Transaction Code"
                            type="password"
                            name="UserLockMpassword"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 text-right">
                          <button type="submit" className="btn btn-primary">
                            submit
                            <i className="fas fa-sign-in-alt ml-1" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="true"
                    className="tab-pane"
                    id="__BVID__2850"
                    aria-labelledby="__BVID__2850___BV_tab_button__"
                    style={{ display: "none" }}
                  >
                    <div className="table-responsive">
                      <div className="table no-footer table-responsive-sm">
                        <table
                          id="eventsListTbl"
                          role="table"
                          aria-busy="false"
                          aria-colcount={5}
                          className="table b-table"
                        >
                          
                          
                          <thead role="rowgroup" className="">
                            
                            <tr role="row" className="">
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={1}
                                className=""
                              >
                                <div>Super User</div>
                              </th>
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={2}
                                className=""
                              >
                                <div>User</div>
                              </th>
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={3}
                                className=""
                              >
                                <div>Transfer From</div>
                              </th>
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={4}
                                className="text-right"
                              >
                                <div>Amount</div>
                              </th>
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={5}
                                className=""
                              >
                                <div>Date</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody role="rowgroup">
                            
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">-1,08,050</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <div>27/03/2024 10:58:45</div>
                              </td>
                            </tr>
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">3,99,951</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <div>19/01/2024 08:56:34</div>
                              </td>
                            </tr>
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">16,000</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <div>17/01/2024 10:29:07</div>
                              </td>
                            </tr>
                            
                            
                          </tbody>
                          
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="true"
                    className="tab-pane"
                    id="__BVID__2863"
                    aria-labelledby="__BVID__2863___BV_tab_button__"
                    style={{ display: "none" }}
                  >
                    <form data-vv-scope="editprofile" method="post">
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Full Name
                        </label>
                        <div className="col-8 form-group-feedback-right pl-0">
                          <input
                            placeholder="Full Name"
                            type="text"
                            name="fname"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="col-form-label col-4">
                          Change Password Lock
                        </label>
                        <div className="mb-1 custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultValue="true"
                            id="__BVID__2865"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__2865"
                          />
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="col-form-label col-4">
                          Favorite Master
                        </label>
                        <div className="mb-1 custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultValue="true"
                            id="__BVID__2885"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__2885"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Transaction Code
                        </label>
                        <div className="col-8 form-group-feedback-right pl-0">
                          <input
                            placeholder="Transaction Code"
                            type="password"
                            name="mpass"
                            className="form-control is-invalid"
                            aria-required="true"
                            aria-invalid="true"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 text-right">
                          <button type="submit" className="btn btn-primary">
                            submit
                            <i className="fas fa-sign-in-alt ml-1" />
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

      {/* Credit modal */}
      <div
        className="modal fade"
        id="CreditModal"
        tabIndex="-1"
        aria-labelledby="CreditModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog credit-mdl modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-warning">
              <h5
                className="modal-title text-uppercase text-white"
                id="CreditModalLabel"
              >
                CREDIT ACTIVITY
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="tabs" id="__BVID__6725">
                
                <div className="">
                  <ul
                    role="tablist"
                    className="nav nav-tabs"
                    id="__BVID__6725__BV_tab_controls_"
                  >
                    
                    <li role="presentation" className="nav-item">
                      <Link
                        role="tab"
                        aria-selected="true"
                        aria-setsize={3}
                        aria-posinset={1}
                        to="#"
                        target="_self"
                        className="nav-link active tab-bg-warning"
                        id="__BVID__6726___BV_tab_button__"
                        aria-controls="__BVID__6726"
                      >
                        <span>Credit Deposit</span>
                      </Link>
                    </li>
                    <li role="presentation" className="nav-item">
                      <Link
                        role="tab"
                        tabIndex={-1}
                        aria-selected="false"
                        aria-setsize={3}
                        aria-posinset={2}
                        to="#"
                        target="_self"
                        className="nav-link"
                        id="__BVID__6728___BV_tab_button__"
                        aria-controls="__BVID__6728"
                      >
                        <span>Credit Withdraw</span>
                      </Link>
                    </li>
                    <li role="presentation" className="nav-item">
                      <Link
                        role="tab"
                        tabIndex={-1}
                        aria-selected="false"
                        aria-setsize={3}
                        aria-posinset={3}
                        to="#"
                        target="_self"
                        className="nav-link"
                        id="__BVID__6730___BV_tab_button__"
                        aria-controls="__BVID__6730"
                      >
                        <span>Credit History</span>
                      </Link>
                    </li>
                    
                  </ul>
                </div>
                <div
                  className="tab-content text-muted"
                  id="__BVID__6725__BV_tab_container_"
                >
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className="tab-pane active"
                    id="__BVID__6726"
                    aria-labelledby="__BVID__6726___BV_tab_button__"
                  >
                    
                    <form data-vv-scope="userCreditUpdate" method="post">
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          David7776
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userCreditUpdateloginusramount"
                                className="form-control txt-right"
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userCreditUpdateloginusrNamount"
                                className="form-control txt-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Gokull777
                        </label>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userCreditUpdateusrnameamount"
                                className="form-control txt-right"
                              />
                            </div>
                            <div className="col-6">
                              <input
                                placeholder="Amount"
                                type="text"
                                readOnly="readonly"
                                name="userCreditUpdateusrnameNamount"
                                className="form-control txt-right"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">Amount</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            placeholder="Amount"
                            type="text"
                            name="userCreditUpdateamount"
                            className="form-control txt-right"
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">Remark</label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <textarea
                            placeholder="Remark"
                            name="userCreditUpdateremark"
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-4">
                          Transaction Code
                        </label>
                        <div className="col-8 form-group-feedback form-group-feedback-right">
                          <input
                            placeholder="Transaction Code"
                            name="userCreditUpdatempassword"
                            type="password"
                            className="form-control"
                            aria-required="true"
                            aria-invalid="false"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12 text-right">
                          <button type="submit" className="btn btn-warning">
                            submit
                            <i className="fas fa-sign-in-alt ml-1" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="true"
                    className="tab-pane"
                    id="__BVID__6728"
                    aria-labelledby="__BVID__6728___BV_tab_button__"
                    style={{ display: "none" }}
                  />
                  <div
                    role="tabpanel"
                    aria-hidden="true"
                    className="tab-pane"
                    id="__BVID__6730"
                    aria-labelledby="__BVID__6730___BV_tab_button__"
                    style={{ display: "none" }}
                  >
                    
                    <div className="table-responsive">
                      <div className="table no-footer table-responsive-sm">
                        <table
                          id="eventsListTbl"
                          role="table"
                          aria-busy="false"
                          aria-colcount={5}
                          className="table b-table"
                        >
                          
                          
                          <thead role="rowgroup" className="">
                            
                            <tr role="row" className="">
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={1}
                                className=""
                              >
                                <div>Super User</div>
                              </th>
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={2}
                                className=""
                              >
                                <div>User</div>
                              </th>
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={3}
                                className=""
                              >
                                <div>Transfer From</div>
                              </th>
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={4}
                                className="text-right"
                              >
                                <div>Amount</div>
                              </th>
                              <th
                                role="columnheader"
                                scope="col"
                                aria-colindex={5}
                                className=""
                              >
                                <div>Date</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody role="rowgroup">
                            
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">-2,54,800</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <p className="mb-0">27/03/2024</p>
                              </td>
                            </tr>
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">-2,54,800</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <p className="mb-0">27/03/2024</p>
                              </td>
                            </tr>
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">2,54,800</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <p className="mb-0">27/03/2024</p>
                              </td>
                            </tr>
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">52,000</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <p className="mb-0">26/03/2024</p>
                              </td>
                            </tr>
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">2,02,800</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <p className="mb-0">26/03/2024</p>
                              </td>
                            </tr>
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">-4,00,000</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <p className="mb-0">19/01/2024</p>
                              </td>
                            </tr>
                            <tr role="row" className="">
                              <td aria-colindex={1} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={2} role="cell" className="">
                                Gokull777
                              </td>
                              <td aria-colindex={3} role="cell" className="">
                                David7776
                              </td>
                              <td aria-colindex={4} role="cell" className="">
                                <p className="text-right mb-0">4,00,000</p>
                              </td>
                              <td aria-colindex={5} role="cell" className="">
                                <p className="mb-0">11/01/2024</p>
                              </td>
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
      </div>
    </>
  );
}

export default ActiveUsers;
