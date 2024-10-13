import React, { useState } from "react";
import { Link } from "react-router-dom";
function CricketV3() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container five-cricket">
            <div className="center-main-container">
              <div className="center-content casino-table pb-2">
                <div className="game-header sport4">
                  <span className="game-header-name">
                    VIRTUAL CRICKET LEAGUE &gt; AUSTRALIA T10 V BANGLADESH T10
                  </span>
                  <div>
                    <span>18/06/2024 14:10:00</span>
                  </div>
                </div>
                <div className="">
                  <div className="row row5 mx-0 px-1">
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
                    <div className="col-xl-10 pe-0 ps-md-auto ps-0 mt-1">
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
                            <a href="javascript:void(0)" title="">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/admin/img/arrow-down.svg"
                                className="mr-1"
                              />
                            </a>
                            Bookmaker
                          </span>
                        </div>
                      </div>
                      <div
                        id="market0"
                        data-title="OPEN"
                        className="bet-table-body collapse show"
                      >
                        <div className="bet-table-row">
                          <div className="text-right nation-name">
                            <span className="max-bet">
                              <span>Min:100</span>
                              <span>Max:3L</span>
                            </span>
                          </div>
                          <div className="back bl-title d-none-mobile">
                            Back
                          </div>
                          <div className="lay bl-title d-none-mobile">Lay</div>
                        </div>
                        <div data-title="ACTIVE" className="bet-table-row">
                          <div className="nation-name">
                            <p>AUS</p>
                            <p
                              className="mb-0 float-left"
                              style={{ color: "rgb(153, 153, 153)" }}
                            >
                              0
                            </p>
                            <p className="mb-0 float-right d-none">0</p>
                          </div>
                          <div className="bl-box back">
                            <span className="d-block odds">1.4</span>
                            <span className="d-block">3L</span>
                          </div>
                          <div className="bl-box lay">
                            <span className="d-block odds">1.44</span>
                            <span className="d-block">3L</span>
                          </div>
                        </div>
                        <div
                          data-title="SUSPENDED"
                          className="bet-table-row suspendedtext"
                        >
                          <div className="nation-name">
                            <p>IND</p>
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
                      </div>
                    </div>
                  </div>
                  <div className="market-6 px-1">
                    <div className="bet-table">
                      <div className="bet-table-header">
                        <div
                          data-toggle="collapse"
                          data-target="#market1"
                          aria-expanded="true"
                          className="nation-name"
                        >
                          <span title="Fancy">
                            <a href="javascript:void(0)" title="">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/admin/img/arrow-down.svg"
                                className="mr-1"
                              />
                            </a>
                            &nbsp;Fancy
                          </span>
                        </div>
                      </div>
                      <div
                        id="market1"
                        data-title="OPEN"
                        className="bet-table-body collapse show"
                      >
                        <div className="bet-table-row">
                          <div className="text-right nation-name" />
                          <div className="lay bl-title d-none-mobile">No</div>
                          <div className="back bl-title d-none-mobile">Yes</div>
                        </div>
                        <div className="fancy-tripple">
                          <div data-title="ACTIVE" className="bet-table-row">
                            <div className="nation-name">
                              <p>Ind Over 2</p>
                              <p
                                className="mb-0"
                                style={{ color: "rgb(153, 153, 153)" }}
                              >
                                0
                              </p>
                            </div>
                            <div className="bl-box lay">
                              <span className="d-block odds">24</span>
                              <span className="d-block">100</span>
                            </div>
                            <div className="bl-box back">
                              <span className="d-block odds">25</span>
                              <span className="d-block">100</span>
                            </div>
                            <div className="fancy-min-max">
                              <span>Min:100</span> <span>Max:1L</span>
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

export default CricketV3;
