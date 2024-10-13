import React, { useState } from "react";
import { Link } from "react-router-dom";
function MultiAccountLogin() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Multi Login Account</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="" target="_self">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <span aria-current="location">Multi Login Account</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body create-account-container">
                  <form method="post">
                    <div className="create-account-form">
                      <div>
                        <h5 className="mb-0">Personal Information</h5>
                        <div className="row">
                          <div className="col-md-3 form-group">
                            <label>Client ID</label>
                            <input
                              type="text"
                              name="uname"
                              data-vv-as="Client ID"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="false"
                            />
                            
                          </div>
                          <div className="col-md-3 form-group">
                            <label>Full Name</label>
                            <input
                              type="text"
                              name="fullname"
                              data-vv-as="Full Name"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="false"
                            />
                            
                          </div>
                          <div className="col-md-3 form-group">
                            <label>Password</label>
                            <input
                              type="password"
                              data-vv-as="Password"
                              name="password"
                              className="form-control"
                              aria-required="false"
                              aria-invalid="false"
                            />
                            
                          </div>
                          <div className="col-md-3 form-group">
                            <label>Confirm Password</label>
                            <input
                              type="password"
                              name="cpass"
                              data-vv-as="Confirm Password"
                              className="form-control"
                              aria-required="true"
                              aria-invalid="false"
                            />
                            
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 previlages">
                        <h5 className="mb-2">Privileges</h5>
                        <div className="previlage-box">
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue="true"
                                  id="__BVID__56"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__56"
                                >
                                  All
                                </label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={1}
                                  id="__BVID__57"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__57"
                                >
                                  DashBoard
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={2}
                                  id="__BVID__58"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__58"
                                >
                                  Market Analysis
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={4}
                                  id="__BVID__59"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__59"
                                >
                                  User List
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={5}
                                  id="__BVID__60"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__60"
                                >
                                  Insert User
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={6}
                                  id="__BVID__61"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__61"
                                >
                                  Bank
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={8}
                                  id="__BVID__62"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__62"
                                >
                                  Account Statement
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={9}
                                  id="__BVID__63"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__63"
                                >
                                  Party Win Loss
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={10}
                                  id="__BVID__64"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__64"
                                >
                                  Current Bets
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={11}
                                  id="__BVID__65"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__65"
                                >
                                  User History
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={12}
                                  id="__BVID__66"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__66"
                                >
                                  General Lock
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={13}
                                  id="__BVID__67"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__67"
                                >
                                  Casino Result
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={14}
                                  id="__BVID__68"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__68"
                                >
                                  Live Casino Result
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={15}
                                  id="__BVID__69"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__69"
                                >
                                  Our Casino
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={16}
                                  id="__BVID__70"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__70"
                                >
                                  Events
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={17}
                                  id="__BVID__71"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__71"
                                >
                                  Market Search Analysis
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={19}
                                  id="__BVID__72"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__72"
                                >
                                  Login User creation
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={54}
                                  id="__BVID__73"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__73"
                                >
                                  Withdraw
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={55}
                                  id="__BVID__74"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__74"
                                >
                                  Deposit
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={56}
                                  id="__BVID__75"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__75"
                                >
                                  Credit Reference
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={57}
                                  id="__BVID__76"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__76"
                                >
                                  User Info
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={58}
                                  id="__BVID__77"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__77"
                                >
                                  User Password Change
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={59}
                                  id="__BVID__78"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__78"
                                >
                                  User Lock
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={60}
                                  id="__BVID__79"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__79"
                                >
                                  Bet Lock
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={62}
                                  id="__BVID__80"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__80"
                                >
                                  TurnOver
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={90}
                                  id="__BVID__81"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__81"
                                >
                                  CouponReport
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={91}
                                  id="__BVID__82"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__82"
                                >
                                  active user
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={94}
                                  id="__BVID__83"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__83"
                                >
                                  fraud report
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="previlage-item">
                            <div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  data-vv-as="Privileges"
                                  type="checkbox"
                                  name="plist"
                                  className="custom-control-input"
                                  defaultValue={95}
                                  id="__BVID__84"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="__BVID__84"
                                >
                                  Currency Permission
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="previlage-master mt-2">
                          <div className="form-group d-inline-flex gap-1 align-items-center mb-0">
                            <input
                              type="password"
                              name="mpass"
                              placeholder="Transaction Code"
                              className="form-control mpass-text"
                              aria-required="true"
                              aria-invalid="false"
                            />
                            <button type="submit" className="btn btn-success">
                              Submit
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
                      </div>
                    </div>
                  </form>
                  <div className="outer mt-4">
                    <div className="inner">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th className="fixed-col-1">Action</th>
                            <th className="fixed-col-2">Username</th>
                            <th className="fixed-col-3">Full Name</th>
                            <th>DashBoard</th>
                            <th>Market Analysis</th>
                            <th>User List</th>
                            <th>Insert User</th>
                            <th>Bank</th>
                            <th>Account Statement</th>
                            <th>Party Win Loss</th>
                            <th>Current Bets</th>
                            <th>User History</th>
                            <th>General Lock</th>
                            <th>Casino Result</th>
                            <th>Live Casino Result</th>
                            <th>Our Casino</th>
                            <th>Events</th>
                            <th>Market Search Analysis</th>
                            <th>Login User creation</th>
                            <th>Withdraw</th>
                            <th>Deposit</th>
                            <th>Credit Reference</th>
                            <th>User Info</th>
                            <th>User Password Change</th>
                            <th>User Lock</th>
                            <th>Bet Lock</th>
                            <th>TurnOver</th>
                            <th>CouponReport</th>
                            <th>active user</th>
                            <th>fraud report</th>
                            <th>Currency Permission</th>
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

export default MultiAccountLogin;
