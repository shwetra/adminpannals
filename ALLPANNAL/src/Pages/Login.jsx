import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
        <div className="position-relative z-index-5">
          <div className="row">
            <div className="col-xl-7 col-xxl-8">
              <Link
                to="#"
                className="text-nowrap logo-img d-block px-4 py-4 w-100"
              >
                <img
                  src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/logos/dark-logo.svg"
                  className="dark-logo"
                  alt="Logo-Dark"
                />
              </Link>
              <div className="d-none d-xl-flex align-items-center justify-content-center h-n80">
                <img
                  src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/backgrounds/login-security.svg"
                  alt="modernize-img"
                  className="img-fluid"
                  width={500}
                />
              </div>
            </div>
            <div className="col-xl-5 col-xxl-4">
              <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
                <div className="auth-max-width col-sm-8 col-md-6 col-xl-7 px-4">
                  <h2 className="mb-1 fs-7 fw-bolder">Welcome to Modernize</h2>
                  <p className="mb-7">Your Admin Dashboard</p>
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input primary"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckChecked"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label text-dark fs-3"
                          htmlFor="flexCheckChecked"
                        >
                          Remeber this Device
                        </label>
                      </div>
                      <Link className="text-primary fw-medium fs-3" to="#">
                        Forgot Password ?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                    >
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
