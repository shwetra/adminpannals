import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function TeenMuflis() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex align-items-md-center justify-content-between p-md-4 p-3 flex-md-row flex-column">
              <h5 className="fw-bold mb-0">Teen Muflis</h5>
              <h6 className="mb-0 mt-md-0 mt-2 fw-bold">
                <small>Round ID: 240610161745</small>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <iframe
                src="https://indiaexch7.com/CasinoPlayerToken/Stream?t=lx2z2wj0"
                width={"100%"}
                height={"330px"}
                className="border rounded overflow-hidden iframe-data"
                frameBorder="0"
              ></iframe>
              <div className="matches mb-5 mt-2">
                <div className="market-2">
                  <div className="bet-table p-3">
                    <div className="card-content">
                      <div className="row custom-row">
                        <div className="col-md-6 border-end">
                          <small className="fw-bold text-red d-block mb-2">
                            Player A
                          </small>
                          <div className="row mb-3">
                            <div className="col-md-4 col-4 custom-col">
                              <div className="text-center">
                                <h6 className="mb-1 fw-medium">
                                  <small>
                                    <span className="text-light">Winner</span>
                                  </small>
                                </h6>
                              </div>
                              <button className="text-uppercase btn w-100 rounded-1 back">
                                <b className="text-dark">0.00</b>
                              </button>
                            </div>
                            <div className="col-md-4 col-4 custom-col">
                              <div className="text-center">
                                <h6 className="mb-1 fw-medium">
                                  <small>
                                    <span className="text-light">Top 9</span>
                                  </small>
                                </h6>
                              </div>
                              <button className="text-uppercase btn w-100 rounded-1 back">
                                <b className="text-dark">0.00</b>
                              </button>
                            </div>
                            <div className="col-md-4 col-4 custom-col">
                              <div className="text-center">
                                <h6 className="mb-1 fw-medium">
                                  <small>
                                    <span className="text-light">
                                      M Baccarat A
                                    </span>
                                  </small>
                                </h6>
                              </div>
                              <button className="text-uppercase btn w-100 rounded-1 back">
                                <b className="text-dark">0.00</b>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <small className="fw-bold text-warning d-block mb-2">
                            Player B
                          </small>
                          <div className="row">
                            <div className="col-md-4 col-4 custom-col">
                              <div className="text-center">
                                <h6 className="mb-1 fw-medium">
                                  <small>
                                    <span className="text-light">Winner</span>
                                  </small>
                                </h6>
                              </div>
                              <button className="text-uppercase btn w-100 rounded-1 back">
                                <b className="text-dark">0.00</b>
                              </button>
                            </div>
                            <div className="col-md-4 col-4 custom-col">
                              <div className="text-center">
                                <h6 className="mb-1 fw-medium">
                                  <small>
                                    <span className="text-light">Top 9</span>
                                  </small>
                                </h6>
                              </div>
                              <button className="text-uppercase btn w-100 rounded-1 back">
                                <b className="text-dark">0.00</b>
                              </button>
                            </div>
                            <div className="col-md-4 col-4 custom-col">
                              <div className="text-center">
                                <h6 className="mb-1 fw-medium">
                                  <small>
                                    <span className="text-light">
                                      M Baccarat A
                                    </span>
                                  </small>
                                </h6>
                              </div>
                              <button className="text-uppercase btn w-100 rounded-1 back">
                                <b className="text-dark">0.00</b>
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
            <div className="col-md-4 ps-md-0">
              <div className="card overflow-hidden">
                <div className="px-3 py-2 bg-info-subtle border-bottom">
                  <h4 className="fs-3 fw-bold mb-0">My Downline Bets</h4>
                </div>
                <div className="card-body pt-2 pb-3 px-0">
                  <div className="table-responsive">
                    <table className="table align-middle text-nowrap mb-0">
                      <thead>
                        <tr className="text-muted fw-semibold">
                          <th scope="col">Round ID</th>
                          <th scope="col">User Name</th>
                          <th scope="col">Nation</th>
                          <th scope="col">Rate</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="border-top">
                        <tr className="text-muted fw-semibold">
                          <td>Round ID</td>
                          <td>User Name</td>
                          <td>Nation</td>
                          <td>Rate</td>
                          <td>Amount</td>
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

export default TeenMuflis;
