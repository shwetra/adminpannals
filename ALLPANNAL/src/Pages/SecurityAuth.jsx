import { Link } from "react-router-dom";

function SecurityAuth() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Secure Auth Verification</h5>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            {/* left side form */}
            <div className="col-md-7 h-100">
              <div className="card">
                <div className="card-body p-3">
                  <div className="bg-light border h-100 rounded mb-md-0 mb-3">
                    <div className="p-5 text-center">
                      <h5 className="mb-2">
                        Secure Auth Verification Status:{" "}
                        <span className="badge fw-semibold py-1 w-85 bg-danger-subtle text-danger small">
                          DISABLED
                        </span>
                      </h5>
                      <p className="mb-4">
                        Please select below option to enable secure auth
                        verification
                      </p>
                      <div className="btn-group mb-md-0 mb-2">
                        <button className="btn px-3 fw-bold py-2 btn-outline-success border-end-dark">
                          Enable Using Mobile App
                        </button>
                        <button className="btn px-3 fw-bold py-2 btn-outline-success border-start-dark">
                          Enable Using Telegram
                        </button>
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

export default SecurityAuth;
