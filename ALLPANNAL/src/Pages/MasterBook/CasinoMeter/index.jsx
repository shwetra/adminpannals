import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function CasinoMeter() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex align-items-md-center justify-content-between p-md-4 p-3 flex-md-row flex-column">
              <h5 className="fw-bold mb-0">Casino Meter</h5>
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
                    <div className="casino-detail">
                      <div className="cmeter-card-box">
                        <div className="cmeter-card-low">
                          <div className="text-playerb">
                            <span>Low</span>
                            <span className="text-success ms-1 numeric">
                              40
                            </span>
                          </div>
                          <div className="ms-1">
                            <span>
                              <img src="https://indiaexch7.com/img/cards1/8SS.png" />
                            </span>
                            <span>
                              <img src="https://indiaexch7.com/img/cards1/5DD.png" />
                            </span>
                            <span>
                              <img src="https://indiaexch7.com/img/cards1/3SS.png" />
                            </span>
                            <span>
                              <img src="https://indiaexch7.com/img/cards1/6SS.png" />
                            </span>
                          </div>
                        </div>
                        <div className="cmeter-card-high">
                          <div className="text-playerb">
                            <span>High</span>
                            <span className="text-success ms-1 numeric">
                              33
                            </span>
                          </div>
                          <div className="ms-1">
                            <span>
                              <img src="https://indiaexch7.com/img/cards1/10SS.png" />
                            </span>
                            <span>
                              <img src="https://indiaexch7.com/img/cards1/10CC.png" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 border-end">
                          <div className=" text-center">
                            <b className="text-playerb">Low</b>
                          </div>
                          <div className="w-100">
                            <div className="casino-cards text-center p-2">
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/A.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/2.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/3.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/4.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/5.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/6.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/7.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/8.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/9.png" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span className="w-100 text-left d-none">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className=" text-center">
                            <b className="text-playerb">High</b>
                          </div>
                          <div className="w-100">
                            <div className="casino-cards text-center p-2">
                              <div className="casino-card-item">
                                <div className=" card-image">
                                  <img src="https://indiaexch7.com/img/cards1/10.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/J.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/Q.png" />
                                </div>
                              </div>
                              <div className="casino-card-item">
                                <div className="card-image">
                                  <img src="https://indiaexch7.com/img/cards1/K.png" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <span className="w-100 text-left d-none">0</span>
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

export default CasinoMeter;
