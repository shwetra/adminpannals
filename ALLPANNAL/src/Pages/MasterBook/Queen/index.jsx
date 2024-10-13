import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function Queen() {
  return (
    <>
      <div className="body-wrapper note">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex align-items-md-center justify-content-between p-md-4 p-3 flex-md-row flex-column">
              <h5 className="fw-bold mb-0">Queen</h5>
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
                    <div className="row custom-row">
                      <div className="col-md-3 col-6 custom-col">
                        <div className="casino-box-row">
                          <div className="casino-nation-name h-auto mb-1">
                            <b>Total 0</b>
                          </div>
                          <div className="d-flex gap-1">
                            <div
                              data-toggle="modal"
                              data-target="#casino-betslip"
                              className="back casino-bl-box-item"
                            >
                              <span className="casino-box-odd">3.25</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">3.5</span>
                            </div>
                          </div>
                          <div className="casino-nation-name h-auto mb-1">
                            <span className="casino-book book-black d-none">
                              0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 custom-col">
                        <div className="casino-box-row">
                          <div className="casino-nation-name h-auto mb-1">
                            <b>Total 1</b>
                          </div>
                          <div className="d-flex gap-1">
                            <div
                              data-toggle="modal"
                              data-target="#casino-betslip"
                              className="back casino-bl-box-item"
                            >
                              <span className="casino-box-odd">3.07</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">3.28</span>
                            </div>
                          </div>
                          <div className="casino-nation-name h-auto mb-1">
                            <span className="casino-book book-black d-none">
                              0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 custom-col">
                        <div className="casino-box-row">
                          <div className="casino-nation-name h-auto mb-1">
                            <b>Total 2</b>
                          </div>
                          <div className="d-flex gap-1">
                            <div
                              data-toggle="modal"
                              data-target="#casino-betslip"
                              className="back casino-bl-box-item"
                            >
                              <span className="casino-box-odd">3.66</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">3.94</span>
                            </div>
                          </div>
                          <div className="casino-nation-name h-auto mb-1">
                            <span className="casino-book book-black d-none">
                              0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 custom-col">
                        <div className="casino-box-row">
                          <div className="casino-nation-name h-auto mb-1">
                            <b>Total 3</b>
                          </div>
                          <div className="d-flex gap-1">
                            <div
                              data-toggle="modal"
                              data-target="#casino-betslip"
                              className="back casino-bl-box-item"
                            >
                              <span className="casino-box-odd">7</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">7.6</span>
                            </div>
                          </div>
                          <div className="casino-nation-name h-auto mb-1">
                            <span className="casino-book book-black d-none">
                              0
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-end casino-min-max small fw-bold">
                      R:<span>100</span>-<span>300K</span>
                    </div>
                    <div className="casino-remark mt-3">
                      <div className="remark-icon">
                        <img
                          src="https://indiaexch7.com/images/casino_icons/front/remark.png"
                          width={20}
                          className="mx-2"
                        />
                      </div>
                      <marquee>
                        This is 21 cards game 2,3,4,5,6 x 4 =20 and 1 Queen.
                        Minimum total 10 or queen is required to win.
                      </marquee>
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

export default Queen;
