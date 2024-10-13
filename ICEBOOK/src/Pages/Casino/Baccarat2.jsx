import React, { useState } from "react";
import { Link } from "react-router-dom";
function Baccarat2() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container baccarat">
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
                    <div className="baccarat-bets-odds pt-3">
                      <div className="baccarat-odds">
                        <div className="baccarat-odd-block">
                          <div className="baccarat-odd-name suspended">
                            Perfect Pair 0:1
                          </div>
                          <div className="baccarat-odd-val book-black">0</div>
                          <div className="casino-min-max">
                            <i
                              data-toggle="collapse"
                              data-target="#range1"
                              className="fas fa-info-circle float-right"
                            />
                            <div id="range1" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                        <div className="baccarat-odd-block">
                          <div className="baccarat-odd-name ">
                            Big 0:1
                          </div>
                          <div className="baccarat-odd-val book-black">0</div>
                          <div className="casino-min-max">
                            <i
                              data-toggle="collapse"
                              data-target="#range2"
                              className="fas fa-info-circle float-right"
                            />
                            <div id="range2" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                        <div className="baccarat-odd-block">
                          <div className="baccarat-odd-name ">
                            Small 0:1
                          </div>
                          <div className="baccarat-odd-val book-black">0</div>
                          <div className="casino-min-max">
                            <i
                              data-toggle="collapse"
                              data-target="#range3"
                              className="fas fa-info-circle float-right"
                            />
                            <div id="range3" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                        <div className="baccarat-odd-block">
                          <div className="baccarat-odd-name ">
                            Either Pair 0:1
                          </div>
                          <div className="baccarat-odd-val book-black">0</div>
                          <div className="casino-min-max">
                            <i
                              data-toggle="collapse"
                              data-target="#range4"
                              className="fas fa-info-circle float-right"
                            />
                            <div id="range4" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <div className="baccarat-bets">
                        <div className="player-pair">
                          <div className="baccarat-bets-name ">
                            <div>Player Pair</div>
                            <div className="mb-0">0:1</div>
                          </div>
                          <div className="baccarat-bets-val book-black">0</div>
                          <div className="casino-min-max">
                            <i
                              data-toggle="collapse"
                              data-target="#range5"
                              className="fas fa-info-circle"
                            />
                            <div id="range5" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                        <div className="player">
                          <div className="baccarat-bets-name ">
                            <div>Player 0:1</div>
                            <div className="mb-0">
                              
                              <span data-v-b64efdfa="">
                                <img
                                  data-v-b64efdfa=""
                                  src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png"
                                />
                              </span>
                              <span data-v-b64efdfa="">
                                <img
                                  data-v-b64efdfa=""
                                  src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="baccarat-bets-val book-black">0</div>
                          <div className="casino-min-max">
                            <i
                              data-toggle="collapse"
                              data-target="#range6"
                              className="fas fa-info-circle"
                            />
                            <div id="range6" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                        <div className="tie">
                          <div className="baccarat-bets-name ">
                            <div>Tie</div> <div className="mb-0">0:1</div>
                          </div>
                          <div className="baccarat-bets-val book-black">0</div>
                          <div className="casino-min-max">
                            <i
                              data-toggle="collapse"
                              data-target="#range7"
                              className="fas fa-info-circle"
                            />
                            <div id="range7" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                        <div className="banker">
                          <div className="baccarat-bets-name ">
                            <div>Banker 0:1</div>
                            <div className="mb-0">
                              <span data-v-b64efdfa="">
                                <img
                                  data-v-b64efdfa=""
                                  src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png"
                                />
                              </span>
                              <span data-v-b64efdfa="">
                                <img
                                  data-v-b64efdfa=""
                                  src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png"
                                />
                              </span>
                              
                            </div>
                          </div>
                          <div className="baccarat-bets-val book-black">0</div>
                          <div className="casino-min-max">
                            <i
                              data-toggle="collapse"
                              data-target="#range8"
                              className="fas fa-info-circle"
                            />
                            <div id="range8" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                        <div className="banker-pair">
                          <div className="baccarat-bets-name ">
                            <div>Banker Pair</div>
                            <div className="mb-0">0:1</div>
                          </div>
                          <div className="baccarat-bets-val book-black">0</div>
                          <div className="casino-min-max">
                            <i
                              data-toggle="collapse"
                              data-target="#range9"
                              className="fas fa-info-circle"
                            />
                            <div id="range9" className="collapse icon-range">
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Baccarat2;
