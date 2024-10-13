import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Change Password</h5>
            </div>
          </div>

          <form action="">
            <div className="row justify-content-center mb-5">
              {/* left side form */}
              <div className="col-md-6 h-100">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="bg-light h-100 rounded mb-md-0 mb-3">
                      <div className="p-3">
                        <div className="form-group mb-3">
                          <label
                            htmlFor="C_password"
                            className="form-label mb-1"
                          >
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="form-control bg-white"
                            id="C_password"
                            placeholder=""
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label
                            htmlFor="N_password"
                            className="form-label mb-1"
                          >
                            New Password
                          </label>
                          <input
                            type="password"
                            className="form-control bg-white"
                            id="N_password"
                            placeholder=""
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label
                            htmlFor="con_password"
                            className="form-label mb-1"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control bg-white"
                            id="con_password"
                            placeholder=""
                          />
                        </div>
                        <button className="btn btn-primary w-100 py-2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
