import React, { useState } from "react";
import { Link } from "react-router-dom";
function Cricket() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container">
              <div className="center-content casino-table">
                <div className="game-header sport4">
                  <span className="game-header-name">
                    VIRTUAL CRICKET LEAGUE &gt; AUSTRALIA T10 V BANGLADESH T10
                  </span>
                  <div>
                    <span>18/06/2024 14:10:00</span>
                  </div>
                </div>
                <div className="">
                  <div className="row row5 mx-0 px-md-1">
                    <div className="col-xl-2 banner ">
                      <div className="">
                        <div className="scorecard-row">
                          <div className="score-top-row">
                            <div className="score-team">
                              <b>AUSV</b>
                              140-3 (10.0)
                            </div>
                            <div></div>
                            <div className="score-message">
                              BANV won the match
                            </div>
                          </div>
                        </div>
                        <div className="scorecard-row">
                          <div className="score-top-row">
                            <div className="score-team">
                              <b>BANV</b>
                              141-2 (9.2)
                            </div>
                            <div>
                              <span>CRR 15.11</span>
                            </div>
                            <div className="score-message">
                              <span className="ball-runs mb-1 me-1">0</span>
                              <span className="ball-runs mb-1 me-1">1</span>
                              <span className="ball-runs mb-1 me-1">1</span>
                              <span className="ball-runs mb-1 me-1 four">
                                4
                              </span>
                              <span className="ball-runs mb-1 me-1">1</span>
                              <span className="ball-runs mb-1 me-1 six">6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-10 pe-0 ps-md-auto ps-0 mt-md-0 mt-1">
                      <div className="casino-video mt-0">
                        <div className="video-box-container">
                          <div className="video-box" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="market-container">
                  <div className="market-2">
                    <div className="bet-table">
                      <div className="bet-table-header">
                        <div
                          data-toggle="collapse"
                          data-target="#market0"
                          aria-expanded="true"
                          className="nation-name"
                        >
                          <span title="Bookmaker">
                            <Link to="#" title="">
                              <img
                                src="https://wver.sprintstaticdata.com/v49/static/admin/img/arrow-down.svg"
                                className="mr-1"
                              />
                            </Link>
                            &nbsp;Bookmaker
                          </span>
                        </div>
                        <div className="float-right">
                          <Link to="#" className="btn btn-back me-1">
                            Bet Lock
                          </Link>
                          <Link to="#" className="btn btn-back">
                            User Book
                          </Link>
                        </div>
                      </div>
                      <div
                        id="market0"
                        data-title="SUSPENDED"
                        className="bet-table-body collapse show"
                      >
                        <div className="bet-table-row">
                          <div className="text-right nation-name">
                            <span className="max-bet">
                              Min:<span>100</span>&nbsp; Max:<span>50K</span>
                            </span>
                          </div>
                          <div className="back bl-title d-none-mobile">
                            Back
                          </div>
                          <div className="lay bl-title d-none-mobile">Lay</div>
                        </div>
                        <div
                          data-title="SUSPENDED"
                          className="bet-table-row suspendedtext"
                        >
                          <div className="nation-name">
                            <p>Australia T10</p>
                            <p
                              className="mb-0 float-left"
                              style={{ color: "rgb(153, 153, 153)" }}
                            >
                              0
                            </p>
                            <p className="mb-0 float-right d-none">0</p>
                          </div>
                          <div className="bl-box back back no-val">
                            <span className="d-block odds">—</span>
                          </div>
                          <div className="bl-box lay lay no-val">
                            <span className="d-block odds">—</span>
                          </div>
                        </div>
                        <div
                          data-title="SUSPENDED"
                          className="bet-table-row suspendedtext"
                        >
                          <div className="nation-name">
                            <p>Bangladesh T10</p>
                            <p
                              className="mb-0 float-left"
                              style={{ color: "rgb(153, 153, 153)" }}
                            >
                              0
                            </p>
                          </div>
                          <div className="bl-box back back no-val">
                            <span className="d-block odds">—</span>
                          </div>
                          <div className="bl-box lay lay no-val">
                            <span className="d-block odds">—</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="remark">
                      ICC T20 World Cup 2024 Special Bets Started In Our
                      Exchange
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
                      <div
                        className="simplebar-content-wrapper"
                        tabIndex={0}
                        role="region"
                        aria-label="scrollable content"
                      >
                        <div className="simplebar-content">
                          <div id="my-game-bets" className="card m-b-10 my-bet">
                            <div className="card-header">
                              <h6 className="card-title float-left">My Bets</h6>
                              <Link to="#" className="btn btn-back float-right">
                                View More
                              </Link>
                            </div>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table coupon-table mb-0">
                                  <thead>
                                    <tr>
                                      <th style={{ minWidth: 90 }}>UserName</th>
                                      <th style={{ minWidth: 90 }}>Nation</th>
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
    </>
  );
}

export default Cricket;
