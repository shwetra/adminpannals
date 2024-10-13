import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function PockerDetails() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex align-items-md-center justify-content-between p-md-4 p-3 flex-md-row flex-column">
              <h5 className="fw-bold mb-0">6 Player Poker</h5>
              <h6 className="mb-0 mt-md-0 mt-2 fw-bold">
                <small>Round ID: 241006142543</small>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <iframe
                src="https://indiaexch7.com/CasinoPlayerToken/Stream?t=lx7hbsir"
                width={"100%"}
                height={"330px"}
                className="border rounded overflow-hidden iframe-data"
                frameBorder="0"
              ></iframe>

              {/* hands card */}
              <div className="card overflow-hidden my-3">
                <div className="px-3 py-2 bg-info-subtle border-bottom">
                  <h4 className="fs-3 fw-bold mb-0">Hands</h4>
                </div>
                <div className="card-body p-3 pt-2">
                  <div className="row custom-row">
                    <div className="col-md-6 custom-col">
                      <div className="casino-box-row">
                        <div className="w-100 mb-1 pr">
                          <b>Player 1</b>
                        </div>
                        <div className="poker6box suspended">
                          <div className="casino-nation-name">
                            <div>
                              <span className="player-card">
                                <span>
                                  <img src="https://indiaexch7.com/img/cards1/KSS.png" />
                                </span>
                              </span>
                              <span className="player-card">
                                <span>
                                  <img src="https://indiaexch7.com/img/cards1/5SS.png" />
                                </span>
                              </span>
                            </div>
                            <span className="float-right me-1 flex-odds">
                              <b className="d-block text-right">0</b>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 custom-col">
                      <div className="casino-box-row">
                        <div className="w-100 mb-1 pr">
                          <b>Player 1</b>
                        </div>
                        <div className="poker6box">
                          <div className="casino-nation-name">
                            <div>
                              <span className="player-card">
                                <span>
                                  <img src="https://indiaexch7.com/img/cards1/9CC.png" />
                                </span>
                              </span>
                              <span className="player-card">
                                <span>
                                  <img src="https://indiaexch7.com/img/cards1/4SS.png" />
                                </span>
                              </span>
                            </div>
                            <span className="float-right me-1 flex-odds">
                              <b className="d-block text-right">7.07</b>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pattern card */}
              <div className="card overflow-hidden my-3">
                <div className="px-3 py-2 bg-info-subtle border-bottom">
                  <h4 className="fs-3 fw-bold mb-0">Pattern</h4>
                </div>
                <div className="card-body p-3 pt-2">
                  <div className="row custom-row">
                    <div className="col-md-4 custom-col">
                      <div className="casino-box-row">
                        <div className="w-100 mb-1 pr">
                          <b>Player 1</b>
                        </div>
                        <div className="poker6box suspended">
                          <div className="casino-nation-name">
                            <h6 className="mb-0 text-white fw-bold ps-1">
                              <small>High Card</small>
                            </h6>
                            <span className="float-right me-1 flex-odds">
                              <b className="d-block text-right">0</b>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 custom-col">
                      <div className="casino-box-row">
                        <div className="w-100 mb-1 pr">
                          <b>Player 1</b>
                        </div>
                        <div className="poker6box">
                          <div className="casino-nation-name">
                            <h6 className="mb-0 text-white fw-bold ps-1">
                              <small>Pair</small>
                            </h6>
                            <span className="float-right me-1 flex-odds">
                              <b className="d-block text-right">7.07</b>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 custom-col">
                      <div className="casino-box-row">
                        <div className="w-100 mb-1 pr">
                          <b>Player 1</b>
                        </div>
                        <div className="poker6box">
                          <div className="casino-nation-name">
                            <h6 className="mb-0 text-white fw-bold ps-1">
                              <small>Two Pair</small>
                            </h6>
                            <span className="float-right me-1 flex-odds">
                              <b className="d-block text-right">7.07</b>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      data-bs-toggle="modal"
                      data-bs-target="#lastResultModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#lastResultModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#lastResultModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#lastResultModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#lastResultModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#lastResultModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#lastResultModal"
                    >
                      R
                    </span>
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
        id="lastResultModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="lastResultModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
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
              <div className="d-flex mb-3 justify-content-between">
                <p className="mb-o fw-medium">Round-Id: 241006143837</p>
                <h6 className="text-end mb-0">
                  <strong>Date:</strong> Sun, Jun 9, 2024
                </h6>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="casino-open-result">
                    {/* card item */}
                    <div className="casino-open-result-item">
                      <h4>1 </h4>
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4CC.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-open-result-item">
                      <h4>2</h4>
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4CC.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-open-result-item">
                      <h4>3</h4>
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4CC.png" />
                          </div>
                          <div className="casino-result-cards-item">
                            <img
                              src="https://indiaexch7.com/img/winner.png"
                              alt=""
                              width={40}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-open-result-item">
                      <h4>4</h4>
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4CC.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-open-result-item">
                      <h4>5</h4>
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4CC.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-open-result-item">
                      <h4>6</h4>
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4CC.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <h6 className="fw-bold text-center">Board</h6>
                  <div className="casino-open-result">
                    {/* card item */}
                    <div className="casino-open-result-item">
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-open-result-item">
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-open-result-item">
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-open-result-item">
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-open-result-item">
                      <div className="casino-result-cards">
                        <div className="casino-result-cards-item-container">
                          <div className="casino-result-cards-item">
                            <img src="https://indiaexch7.com/img/cards1/4HH.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="casino-result-desc">
                    <div className="casino-result-desc-item">
                      <div>Winner</div> <div>Player 3</div>
                    </div>
                    <div className="casino-result-desc-item">
                      <div>_</div> <div>_</div>
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
    </>
  );
}

export default PockerDetails;
