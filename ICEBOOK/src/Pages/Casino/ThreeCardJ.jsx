import React, { useState } from "react";
import { Link } from "react-router-dom";
function ThreeCardJ() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container threecardj">
              <div className="center-content casino-table">
                {/* <div className="game-header">
                  <span className="game-header-name">BALL BY BALL</span>
                  <div>
                    <span>Round ID: 5881427651143</span>
                  </div>
                </div> */}

                <div className="bg-dark rounded p-5 text-center">
                  <h4>Iframe Space</h4>
                </div>
                <div className="market-container">
                  <div className="casino-detail">
                    <div className="threecardj-container">
                      <div className="threecardj-bl-box back">
                        <div className="threecardj-title">
                          <b>Yes</b>
                          <span className="casino-book book-black">0</span>
                        </div>
                        <div className="threecardj-cards">
                          <div className="threecardj-odds text-center">
                            <b>0</b>
                          </div>
                          <div className="casino-cards text-center mt-1">
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/A.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/2.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/3.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/4.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/5.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/6.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/7.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/8.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/9.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/10.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/J.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/Q.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/K.png"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-min-max text-right">
                            <span>
                              Select any 3 card and you will win if you will get
                              at least 1 card from the 3 cards you have
                              selected.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="threecardj-bl-box lay">
                        <div className="threecardj-title">
                          <b>No</b>
                          <span className="casino-book book-black">0</span>
                        </div>
                        <div className="threecardj-cards suspended">
                          <div className="threecardj-odds text-center">
                            <b>0</b>
                          </div>
                          <div className="casino-cards text-center mt-1">
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/A.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/2.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/3.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/4.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/5.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/6.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/7.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/8.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/9.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/10.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/J.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/Q.png"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span data-v-b64efdfa="">
                                  <img
                                    data-v-b64efdfa=""
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/K.png"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-min-max text-right">
                            <span>
                              Select any 3 card and you will win If you do not
                              get any card from the 3 cards you have selected.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right casino-min-max">
                      R:<span>100</span>-<span>2L</span>
                    </div>
                    <div className="casino-remark mt-3">
                      <div className="remark-icon">
                        <img src="https://wver.sprintstaticdata.com/v50/static/front/img/icons/remark.png" />
                      </div>
                      <marquee>
                        Select any 3 card and you will win if you will get at
                        least 1 card from the 3 cards you have selected.|Select
                        any 3 card and you will win If you do not get any card
                        from the 3 cards you have selected.
                      </marquee>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="right-sidebar">
                <div className="simplebar-wrapper">
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div className="simplebar-offset">
                      <div className="simplebar-content-wrapper">
                        <div className="simplebar-content">
                          <div id="my-game-bets" className="card m-b-10 my-bet">
                            <div className="card-header">
                              <h6 className="card-title float-start">
                                My Bets
                              </h6>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#viewMoreModal"
                                className="btn btn-back float-right"
                              >
                                View More
                              </Link>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table coupon-table mb-0">
                                  <thead>
                                    <tr>
                                      <th style={{ minWidth: 90 }}>UserName</th>
                                      <th
                                        className="text-right"
                                        style={{ minWidth: 50 }}
                                      >
                                        Rate
                                      </th>
                                      <th
                                        className="text-right"
                                        style={{ minWidth: 70 }}
                                      >
                                        Amount
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td colSpan={4} className="text-center">
                                        No records found
                                      </td>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* view more modal */}
      <div
        className="modal fade"
        id="viewMoreModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="viewMoreModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div tabIndex={-1} className="modal-content">
            <header className="modal-header">
              <h5 className="modal-title">View More</h5>
              <button
                aria-label="Close"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                style={{ filter: "invert(0)" }}
              ></button>
            </header>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-diamond table-bordered">
                  <thead>
                    <tr>
                      <th>No</th> <th>UserName</th> <th>Nation</th>
                      <th className="text-right">Amount</th>
                      <th className="text-right">User Rate</th>
                      <th>Place Date</th> <th>IP</th> <th>Browser Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="8" className="text-center">
                        No records found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeCardJ;
