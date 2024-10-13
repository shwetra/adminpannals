import { Lock, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

function Live32CardsA() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex align-items-md-center justify-content-between p-md-4 p-3 flex-md-row flex-column">
              <h5 className="fw-bold mb-0">32 Cards</h5>
              <h6 className="mb-0 mt-md-0 mt-2 fw-bold">
                <small>Round ID: 240606145131 </small>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <iframe
                src="https://indiaexch7.com/CasinoPlayerToken/Stream?t=litayytd"
                width={"100%"}
                height={"330px"}
                className="border rounded overflow-hidden iframe-data"
                frameBorder="0"
              ></iframe>

              <div className="card-content mt-2">
                <div className="row">
                  <div className="col-md-6 m-b-10 main-market p-r-5">
                    <div className="live-poker">
                      <table className="table coupon-table table table-bordered ">
                        <thead>
                          <tr>
                            <th className="w-33" />
                            <th className="back w-33">BACK</th>
                            <th className="lay w-33">LAY</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bet-info">
                            <td className="w-33">
                              <b>Player 8</b>
                              <p className="mb-0 text-success">0.00</p>
                            </td>
                            <td className="back w-33 teen-section">
                              <button className="back">
                                <span className="odd">12.20</span>
                                <span>1000000</span>
                              </button>
                            </td>
                            <td
                              className="lay w-33 teen-section"
                              data-sid={1}
                              data-rate="13.70"
                              data-nation="Player 8"
                              data-bettype="LAY"
                              data-gtype="card32"
                            >
                              <button className="lay">
                                <span className="odd">13.70</span>
                                <span>1000000</span>
                              </button>
                            </td>
                          </tr>
                          <tr className="bet-info suspended">
                            <td className="w-33">
                              <b>Player 9</b>
                              <p className="mb-0 text-success">0.00</p>
                            </td>
                            <td
                              className="back w-33 teen-section"
                              data-sid={2}
                              data-rate="5.95"
                              data-nation="Player 9"
                              data-bettype="BACK"
                              data-gtype="card32"
                            >
                              <button className="back">
                                <span className="odd">5.95</span>
                                <span>1000000</span>
                              </button>
                            </td>
                            <td
                              className="lay w-33 teen-section"
                              data-sid={2}
                              data-rate="6.45"
                              data-nation="Player 9"
                              data-bettype="LAY"
                              data-gtype="card32"
                            >
                              <button className="lay">
                                <span className="odd">6.45</span>
                                <span>1000000</span>
                              </button>
                            </td>
                            <Lock size={36} color="#fff" />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-6 m-b-10 main-market p-l-5">
                    <div className="live-poker">
                      <table className="table coupon-table table table-bordered ">
                        <thead>
                          <tr>
                            <th className="w-33 w-33" />
                            <th className="back w-33">BACK</th>
                            <th className="lay w-33">LAY</th>
                          </tr>
                        </thead>
                        <tbody id="poker-table2">
                          <tr className="bet-info">
                            <td className="w-33">
                              <b>Player 10</b>
                              <p className="mb-0 text-success">0.00</p>
                            </td>
                            <td
                              className="back w-33 teen-section"
                              data-sid={3}
                              data-rate="3.20"
                              data-nation="Player 10"
                              data-bettype="BACK"
                              data-gtype="card32"
                            >
                              <button className="back">
                                <span className="odd">3.20</span>
                                <span>1000000</span>
                              </button>
                            </td>
                            <td
                              className="lay w-33 teen-section"
                              data-sid={3}
                              data-rate="3.45"
                              data-nation="Player 10"
                              data-bettype="LAY"
                              data-gtype="card32"
                            >
                              <button className="lay">
                                <span className="odd">3.45</span>
                                <span>1000000</span>
                              </button>
                            </td>
                          </tr>
                          <tr className="bet-info">
                            <td className="w-33">
                              <b>Player 11</b>
                              <p className="mb-0 text-success">0.00</p>
                            </td>
                            <td
                              className="back w-33 teen-section"
                              data-sid={4}
                              data-rate="2.08"
                              data-nation="Player 11"
                              data-bettype="BACK"
                              data-gtype="card32"
                            >
                              <button className="back">
                                <span className="odd">2.08</span>
                                <span>1000000</span>
                              </button>
                            </td>
                            <td
                              className="lay w-33 teen-section"
                              data-sid={4}
                              data-rate="2.18"
                              data-nation="Player 11"
                              data-bettype="LAY"
                              data-gtype="card32"
                            >
                              <button className="lay">
                                <span className="odd">2.18</span>
                                <span>1000000</span>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

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
                      data-bs-toggle="modal"
                      data-bs-target="#depositModal"
                    >
                      11
                    </span>
                    <span className="last-result">10</span>
                    <span className="last-result">11</span>
                    <span className="last-result">9</span>
                    <span className="last-result">11</span>
                    <span className="last-result">9</span>
                    <span className="last-result">11</span>
                    <span className="last-result">11</span>
                    <span className="last-result">10</span>
                    <span className="last-result">8</span>
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
                      <h6 className="text-end mb-4">
                        <strong>Round ID:</strong> 240606153510
                      </h6>
                      <div className="row">
                        <div className="col-md-6 mb-3 text-center">
                          <div className="bg-light rounded py-3">
                            <h6 className="mb-2">Player 8</h6>
                            <div className="d-flex flex-wrap justify-content-center gap-1">
                              <img
                                src="https://indiaexch7.com/img/cards1/9HH.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3 text-center">
                          <div className="bg-light rounded py-3">
                            <h6 className="mb-2">Player 9</h6>
                            <div className="d-flex flex-wrap justify-content-center gap-1">
                              <img
                                src="https://indiaexch7.com/img/cards1/QHH.png"
                                className="img-fluid"
                                alt=""
                              />
                              <img
                                src="https://indiaexch7.com/img/cards1/JCC.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3 text-center">
                          <div className="bg-light rounded py-3">
                            <h6 className="mb-2">Player 10</h6>
                            <div className="d-flex flex-wrap justify-content-center gap-1">
                              <img
                                src="https://indiaexch7.com/img/cards1/JHH.png"
                                className="img-fluid"
                                alt=""
                              />
                              <img
                                src="https://indiaexch7.com/img/cards1/QDD.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3 text-center">
                          <div className="bg-light rounded py-3">
                            <h6 className="mb-2">Player 11</h6>
                            <div className="d-flex flex-wrap justify-content-center gap-1">
                              <img
                                src="https://indiaexch7.com/img/cards1/10SS.png"
                                className="img-fluid"
                                alt=""
                              />
                              <img
                                src="https://indiaexch7.com/img/cards1/KSS.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="mt-2">
                              <Trophy color="#169733" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="card overflow-hidden">
                <div className="px-3 py-2 bg-info-subtle border-bottom">
                  <h4 className="fs-3 fw-bold mb-0">My Downline Bets</h4>
                </div>
                <div className="card-body pt-2 pb-3 px-0">
                  <div className="table-responsive">
                    <table className="table align-middle text-nowrap mb-0">
                      <thead>
                        <tr className="text-muted fw-semibold">
                          <th scope="col">Assigned</th>
                          <th scope="col">Round ID</th>
                          <th scope="col">User Name</th>
                          <th scope="col">Nation</th>
                          <th scope="col">Rate</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="border-top">
                        <tr className="text-muted fw-semibold">
                          <td>Assigned</td>
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

export default Live32CardsA;
