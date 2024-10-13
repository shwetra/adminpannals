import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function CardsJudgement3() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex align-items-md-center justify-content-between p-md-4 p-3 flex-md-row flex-column">
              <h5 className="fw-bold mb-0">3 Cards Judgement</h5>
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
              <div className="mb-5 mt-2">
                {/* last result */}
                <div className="card mt-1 mb-md-5 mb-3 overflow-hidden">
                  <div className="px-3 py-2 bg-info-subtle border-bottom">
                    <h4 className="fs-3 fw-bold mb-0">Last Result</h4>
                  </div>
                  <div className="card-body p-3">
                    <div
                      className="d-flex justify-content-end gap-1 flex-wrap"
                      id="last-result"
                    >
                      <span
                        className="last-result"
                        style={{ color: "#ff4500" }}
                        data-bs-toggle="modal"
                        data-bs-target="#depositModal"
                      >
                        R
                      </span>
                      <span
                        className="last-result"
                        style={{ color: "#ff4500" }}
                        data-bs-toggle="modal"
                        data-bs-target="#depositModal"
                      >
                        R
                      </span>
                      <span
                        className="last-result"
                        style={{ color: "#ff4500" }}
                        data-bs-toggle="modal"
                        data-bs-target="#depositModal"
                      >
                        R
                      </span>
                      <span
                        className="last-result"
                        style={{ color: "#ff4500" }}
                        data-bs-toggle="modal"
                        data-bs-target="#depositModal"
                      >
                        R
                      </span>
                      <span
                        className="last-result"
                        style={{ color: "#ff4500" }}
                        data-bs-toggle="modal"
                        data-bs-target="#depositModal"
                      >
                        R
                      </span>
                      <span
                        className="last-result"
                        style={{ color: "#ff4500" }}
                        data-bs-toggle="modal"
                        data-bs-target="#depositModal"
                      >
                        R
                      </span>
                      <span
                        className="last-result"
                        style={{ color: "#ff4500" }}
                        data-bs-toggle="modal"
                        data-bs-target="#depositModal"
                      >
                        R
                      </span>
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
      {/* lasst result modal */}
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
                Result
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h6 className="text-end mb-3">
                <strong>Round ID:</strong> 241006172523
              </h6>
              <div className="text-center mb-3">
                <img
                  src="https://indiaexch7.com/img/cards/andar_bahar1/1.jpg"
                  width={50}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
}

export default CardsJudgement3;
