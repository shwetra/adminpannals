import React, { useState } from "react";
import { Link } from "react-router-dom";
function PokerOneDay() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container poker1day">
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
                    <div className="playerabox">
                      <div className="casino-box-row playerafabcy">
                        <div className="casino-nation-name">
                          <div className="float-start me-2">
                            <i
                              data-toggle="collapse"
                              data-target="#demo1"
                              className="fas fa-info-circle"
                            />
                            <div id="demo1" className="collapse icon-range">
                              R:<span>100</span>-<span>3L</span>
                            </div>
                          </div>
                          <b>Player A</b>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">0</span>
                          </div>
                          <div className="lay casino-bl-box-item">
                            <span className="casino-box-odd">0</span>
                          </div>
                        </div>
                      </div>
                      <div className="casino-nation-name text-center w-100">
                        <span className="casino-book book-black">0</span>
                      </div>
                      <div className="casino-box poker1dayother mt-2">
                        <div className="casino-bl-box">
                          <div className="odds-min-max">
                            <span className="float-right casino-min-max pr-2">
                              <i
                                data-toggle="collapse"
                                data-target="#demo2"
                                className="fas fa-info-circle"
                              />
                              <div id="demo2" className="collapse icon-range">
                                R:<span>100</span>-<span>50K</span>
                              </div>
                            </span>
                          </div>
                          <div className="odds-min-max pl-2">
                            <span className="float-right casino-min-max">
                              <i
                                data-toggle="collapse"
                                data-target="#demo3"
                                className="fas fa-info-circle"
                              />
                              <div id="demo3" className="collapse icon-range">
                                R:<span>100</span>-<span>50K</span>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div className="casino-bl-box">
                          <div className="casino-bl-box-item back">
                            <span className="casino-box-odd">
                              2 Cards Bonus
                            </span>
                          </div>
                          <div className="casino-bl-box-item back">
                            <span className="casino-box-odd">
                              7 Cards Bonus
                            </span>
                          </div>
                        </div>
                        <div className="casino-bl-box">
                          <div className="odds-min-max">
                            <span className="casino-book book-black">0</span>
                          </div>
                          <div className="odds-min-max">
                            <span className="casino-book book-black">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="playerabcardbox">
                      <div className="poker-icon">
                        <img src="https://wver.sprintstaticdata.com/v50/static/front/img/poker.png" />
                      </div>
                      <div className="row row5 w-100">
                        <div className="col-12 col-md-6">
                          <div className="dealer-name playera">Player A</div>
                          <div className="mt-1">
                            <span data-v-b64efdfa="">
                              <img
                                data-v-b64efdfa=""
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/3HH.png"
                              />
                            </span>
                            <span data-v-b64efdfa="">
                              <img
                                data-v-b64efdfa=""
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/QDD.png"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 text-right">
                          <div className="dealer-name playerb">Player B</div>
                          <div className="mt-1">
                            <span data-v-b64efdfa="">
                              <img
                                data-v-b64efdfa=""
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/7CC.png"
                              />
                            </span>
                            <span data-v-b64efdfa="">
                              <img
                                data-v-b64efdfa=""
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/ASS.png"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="playerbbox">
                      <div className="casino-box-row playerbfabcy">
                        <div className="casino-nation-name">
                          <div className="float-start me-2">
                            <i
                              data-toggle="collapse"
                              data-target="#demo4"
                              className="fas fa-info-circle"
                            />
                            <div id="demo4" className="collapse icon-range">
                              R:<span>100</span>-<span>3L</span>
                            </div>
                          </div>
                          <b>Player B</b>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">0</span>
                          </div>
                          <div className="lay casino-bl-box-item">
                            <span className="casino-box-odd">0</span>
                          </div>
                        </div>
                      </div>
                      <div className="casino-nation-name text-center w-100">
                        <span className="casino-book book-black">0</span>
                      </div>
                      <div className="casino-box poker1dayother mt-2">
                        <div className="casino-bl-box">
                          <div className="odds-min-max">
                            <span className="float-right casino-min-max pr-2">
                              <i
                                data-toggle="collapse"
                                data-target="#demo5"
                                className="fas fa-info-circle"
                              />
                              <div id="demo5" className="collapse icon-range">
                                R:<span>100</span>-<span>50K</span>
                              </div>
                            </span>
                          </div>
                          <div className="odds-min-max pl-2">
                            <span className="float-right casino-min-max">
                              <i
                                data-toggle="collapse"
                                data-target="#demo6"
                                className="fas fa-info-circle"
                              />
                              <div id="demo6" className="collapse icon-range">
                                R:<span>100</span>-<span>50K</span>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div className="casino-bl-box">
                          <div className="casino-bl-box-item back suspended">
                            <span className="casino-box-odd">
                              2 Cards Bonus
                            </span>
                          </div>
                          <div className="casino-bl-box-item back">
                            <span className="casino-box-odd">
                              7 Cards Bonus
                            </span>
                          </div>
                        </div>
                        <div className="casino-bl-box">
                          <div className="odds-min-max">
                            <span className="casino-book book-black">0</span>
                          </div>
                          <div className="odds-min-max">
                            <span className="casino-book book-black">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-remark mt-3">
                      <div className="remark-icon">
                        <img src="https://wver.sprintstaticdata.com/v50/static/front/img/icons/remark.png" />
                      </div>
                      <marquee>Play &amp; Win </marquee>
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

export default PokerOneDay;
