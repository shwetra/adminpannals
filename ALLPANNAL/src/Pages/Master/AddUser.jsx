import { Link } from "react-router-dom";

function AddUser() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Add Account</h5>
            </div>
          </div>

          <div className="card">
            <div className="card-body p-3">
              <form action="">
                <div className="row">
                  {/* left side form */}
                  <div className="col-md-6 h-100">
                    <div className="bg-light h-100 rounded mb-md-0 mb-3">
                      <div className="px-3 py-2 border-bottom">
                        <h4 className="card-title mb-0">Personal Detail</h4>
                      </div>
                      <div className="p-3">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="C_name"
                                className="form-label mb-1"
                              >
                                Client Name:
                              </label>
                              <input
                                type="text"
                                className="form-control bg-white"
                                id="C_name"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="U_pass"
                                className="form-label mb-1"
                              >
                                User password:
                              </label>
                              <input
                                type="password"
                                className="form-control bg-white"
                                id="U_pass"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="C_pass"
                                className="form-label mb-1"
                              >
                                Retype password:
                              </label>
                              <input
                                type="password"
                                className="form-control bg-white"
                                id="C_pass"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="F_name"
                                className="form-label mb-1"
                              >
                                Full Name:
                              </label>
                              <input
                                type="text"
                                className="form-control bg-white"
                                id="F_name"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label htmlFor="city" className="form-label mb-1">
                                City:
                              </label>
                              <input
                                type="text"
                                className="form-control bg-white"
                                id="city"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="phone"
                                className="form-label mb-1"
                              >
                                Phone:
                              </label>
                              <input
                                type="tel"
                                className="form-control bg-white"
                                id="phone"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* left side form */}
                  <div className="col-md-6 h-100">
                    <div className="bg-light h-100 rounded">
                      <div className="px-3 py-2 border-bottom">
                        <h4 className="card-title mb-0">Account Detail</h4>
                      </div>
                      <div className="p-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="A_type"
                                className="form-label mb-1"
                              >
                                Account Type:
                              </label>
                              <select
                                className="form-select bg-white"
                                id="A_type"
                              >
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group mb-3">
                              <label
                                htmlFor="C_ref"
                                className="form-label mb-1"
                              >
                                Credit Reference:
                              </label>
                              <input
                                type="number"
                                className="form-control bg-white"
                                id="C_ref"
                                placeholder=""
                                defaultValue={0}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 offset-md-6 mt-md-5 pt-md-5">
                            <div className="form-group pt-4 mb-3">
                              <label
                                htmlFor="T_pass"
                                className="form-label mb-1"
                              >
                                Transaction Password:
                              </label>
                              <input
                                type="password"
                                className="form-control bg-white"
                                id="T_pass"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group d-flex justify-content-end">
                              <button className="btn btn-primary">
                                Create Account
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
