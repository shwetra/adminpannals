import { Link } from "react-router-dom";

function ListUsers() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Account List</h5>
              <Link to="/AddMasterUser" className="btn btn-primary btn-sm">
                Add Account
              </Link>
            </div>
          </div>

          {/* table */}
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex flex-md-row flex-column mb-3 align-items-start justify-content-between">
                <div className="btn-group mb-md-0 mb-2">
                  <Link
                    to="#"
                    className="btn px-3 btn-sm btn-success border-end"
                  >
                    PDF
                  </Link>
                  <Link
                    to="#"
                    className="btn px-3 btn-sm btn-success border-start"
                  >
                    Excel
                  </Link>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="search"
                    placeholder="Search with in the page:"
                  />
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-middle text-nowrap mb-0">
                  <thead>
                    <tr className="text-muted fw-semibold">
                      <th scope="col" className="ps-0">
                        Assigned
                      </th>
                      <th scope="col">User Name</th>
                      <th scope="col">Credit Reference</th>
                      <th scope="col">Client (P/L)</th>
                      <th scope="col">Exposure</th>
                      <th scope="col">Available Balance</th>
                      <th scope="col">U St</th>
                      <th scope="col">B St</th>
                      <th scope="col">Exposure Limit</th>
                      <th scope="col">Default %</th>
                      <th scope="col">Account Type</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="border-top">
                    <tr>
                      <td className="ps-0">
                        <Link
                          to="#"
                          className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary"
                        >
                          Kanhadl
                        </Link>
                      </td>
                      <td>100</td>
                      <td>400000.00</td>
                      <td>
                        <span className="text-success">399900.00</span>
                      </td>
                      <td>0.00</td>
                      <td>100003.50</td>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input p-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input p-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <td>0</td>
                      <td>100.00</td>
                      <td>AGENT</td>
                      <td>
                        <div className="d-flex gap-1">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#depositModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">D</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#withdrawModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">W</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#eLimitModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">L</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#creditModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">C</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#passwordModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">P</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteUserModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">DL</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#changeStatusModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">S</span>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-0">
                        <Link
                          to="#"
                          className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary"
                        >
                          Agent
                        </Link>
                      </td>
                      <td>100</td>
                      <td>400000.00</td>
                      <td>
                        <span className="text-success">399900.00</span>
                      </td>
                      <td>0.00</td>
                      <td>100003.50</td>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input p-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input p-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <td>0</td>
                      <td>100.00</td>
                      <td>AGENT</td>
                      <td>
                        <div className="d-flex gap-1">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#depositModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">D</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#withdrawModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">W</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#eLimitModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">L</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#creditModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">C</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#passwordModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">P</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteUserModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">DL</span>
                          </Link>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#changeStatusModal"
                            className="badge text-decoration-none text-bg-info text-white p-2 rounded-1 fw-bold "
                          >
                            <span className="p-1 d-block">S</span>
                          </Link>
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

      {/* deposit modal */}
      <div
        id="depositModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="depositModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Deposit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="master" className="form-label mb-1">
                        Master
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="master"
                        disabled
                        placeholder=""
                        defaultValue={"121153349.00"}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="master" className="form-label mb-1">
                        &nbsp;
                      </label>
                      <input
                        type="text"
                        disabled
                        className="form-control bg-white"
                        id="master"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="agent" className="form-label mb-1">
                        Agent
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="agent"
                        disabled
                        placeholder=""
                        defaultValue={"5773282.70"}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="master" className="form-label mb-1">
                        &nbsp;
                      </label>
                      <input
                        type="text"
                        disabled
                        className="form-control bg-white"
                        id="master"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="Amount" className="form-label mb-1">
                        Amount
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="Amount"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="Amount" className="form-label mb-1">
                        Remark
                      </label>
                      <textarea className="form-control"></textarea>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="T_password" className="form-label mb-1">
                        Transaction Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-white"
                        id="T_password"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="button"
                  className="btn bg-danger-subtle border text-danger  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn bg-primary-subtle border text-primary  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>

      {/* withdraw modal */}
      <div
        id="withdrawModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="withdrawModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Withdraw
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="master" className="form-label mb-1">
                        Master
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="master"
                        disabled
                        placeholder=""
                        defaultValue={"121153349.00"}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="master" className="form-label mb-1">
                        &nbsp;
                      </label>
                      <input
                        type="text"
                        disabled
                        className="form-control bg-white"
                        id="master"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="agent" className="form-label mb-1">
                        Agent
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="agent"
                        disabled
                        placeholder=""
                        defaultValue={"5773282.70"}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="master" className="form-label mb-1">
                        &nbsp;
                      </label>
                      <input
                        type="text"
                        disabled
                        className="form-control bg-white"
                        id="master"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="Amount" className="form-label mb-1">
                        Amount
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="Amount"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="Amount" className="form-label mb-1">
                        Remark
                      </label>
                      <textarea className="form-control"></textarea>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="T_password" className="form-label mb-1">
                        Transaction Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-white"
                        id="T_password"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="button"
                  className="btn bg-danger-subtle border text-danger  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn bg-primary-subtle border text-primary  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>

      {/* Exposure Limit modal */}
      <div
        id="eLimitModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="eLimitModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Exposure Limit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="o_limit" className="form-label mb-1">
                        Old Limit
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="o_limit"
                        disabled
                        placeholder=""
                        defaultValue={"0"}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="n_limit" className="form-label mb-1">
                        New Limit
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="n_limit"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="T_password" className="form-label mb-1">
                        Transaction Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-white"
                        id="T_password"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="button"
                  className="btn bg-danger-subtle border text-danger  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn bg-primary-subtle border text-primary  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>

      {/* Credit modal */}
      <div
        id="creditModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="creditModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Credit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="o_credit" className="form-label mb-1">
                        Old Credit
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="o_credit"
                        disabled
                        placeholder=""
                        defaultValue={"0"}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="n_credit" className="form-label mb-1">
                        New Credit
                      </label>
                      <input
                        type="text"
                        className="form-control bg-white"
                        id="n_credit"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="T_password" className="form-label mb-1">
                        Transaction Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-white"
                        id="T_password"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="button"
                  className="btn bg-danger-subtle border text-danger  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn bg-primary-subtle border text-primary  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>

      {/* Password modal */}
      <div
        id="passwordModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="passwordModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="n_password" className="form-label mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-white"
                        id="n_password"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="c_password" className="form-label mb-1">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-white"
                        id="c_password"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="T_password" className="form-label mb-1">
                        Transaction Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-white"
                        id="T_password"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="button"
                  className="btn bg-danger-subtle border text-danger  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn bg-primary-subtle border text-primary  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>

      {/* Delete User modal */}
      <div
        id="deleteUserModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="deleteUserModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Delete User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label className="form-label fw-bold mb-1">
                        Name : Agent ( Agent )
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="T_password" className="form-label mb-1">
                        Transaction Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-white"
                        id="T_password"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="button"
                  className="btn bg-danger-subtle border text-danger  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn bg-primary-subtle border text-primary  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>

      {/* Change Status modal */}
      <div
        id="changeStatusModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="changeStatusModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Change Status
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="">
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <h6 className="text-warning mb-3">Agent</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="userActive" className="form-labelmb-1">
                        User Active
                      </label>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input p-2 px-3"
                          type="checkbox"
                          role="switch"
                          id="userActive"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="betActive" className="form-labelmb-1">
                        Bet Active
                      </label>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input p-2 px-3"
                          type="checkbox"
                          role="switch"
                          id="betActive"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-2">
                      <label htmlFor="T_password" className="form-label mb-1">
                        Transaction Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-white"
                        id="T_password"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer pt-0">
                <button
                  type="button"
                  className="btn bg-danger-subtle border text-danger  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn bg-primary-subtle border text-primary  waves-effect"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
}

export default ListUsers;
