import React, { useState } from "react";
import { Link } from "react-router-dom";
function Cricket2() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container">
              <div className="center-content">
                <div className="game-header sport4">
                  <span className="game-header-name">
                    ICC World Twenty20 &gt; Afghanistan v India
                  </span>
                  <div>
                    <span>20/06/2024 20:00:00</span>
                  </div>
                </div>

                <div className="market-container">
                  <div className="market-4">
                    <div className="bet-table">
                      <div className="bet-table-header">
                        <div
                          data-toggle="collapse"
                          data-target="#market0"
                          aria-expanded="true"
                          className="nation-name"
                        >
                          <span title="MATCH_ODDS">
                            <Link to="#" title="">
                              <img
                                src="https://wver.sprintstaticdata.com/v49/static/front/img/arrow-down.svg"
                                className="mr-1"
                              />
                            </Link>
                            &nbsp;MATCH_ODDS
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
                        data-title="OPEN"
                        className="bet-table-body collapse show"
                      >
                        <div className="bet-table-row bet-table-row-top">
                          <div className="text-right nation-name">
                            <span className="max-bet">
                              <span title="Max: 1">1</span>
                            </span>
                          </div>
                          <div className="back bl-title d-none-mobile">
                            Back
                          </div>
                          <div className="lay bl-title d-none-mobile">Lay</div>
                        </div>

                        <div data-title="ACTIVE" className="bet-table-row">
                          <div className="nation-name">
                            <p>Afghanistan</p>
                            <p
                              className="mb-0 float-left"
                              style={{ color: "rgb(153, 153, 153)" }}
                            >
                              0
                            </p>
                            <p className="mb-0 float-right d-none">0</p>
                          </div>
                          <div className="bl-box back back2">
                            <span className="d-block odds">4.5</span>
                            <span className="d-block small">999.83</span>
                          </div>
                          <div className="bl-box back back1">
                            <span className="d-block odds">4.6</span>
                            <span className="d-block small">36.24</span>
                          </div>
                          <div className="bl-box back back">
                            <span className="d-block odds">4.7</span>
                            <span className="d-block small">129.27</span>
                          </div>
                          <div className="bl-box lay lay">
                            <span className="d-block odds">4.8</span>
                            <span className="d-block">2.19</span>
                          </div>
                          <div className="bl-box lay lay1">
                            <span className="d-block odds">4.9</span>
                            <span className="d-block">1.01K</span>
                          </div>
                          <div className="bl-box lay lay2">
                            <span className="d-block odds">5</span>
                            <span className="d-block">425.65</span>
                          </div>
                        </div>
                        <div data-title="ACTIVE" className="bet-table-row">
                          <div className="nation-name">
                            <p>India</p>
                            <p
                              className="mb-0 float-left"
                              style={{ color: "rgb(153, 153, 153)" }}
                            >
                              0
                            </p>
                            <p className="mb-0 float-right d-none">0</p>
                          </div>
                          <div className="bl-box back back2">
                            <span className="d-block odds">1.24</span>
                            <span className="d-block small">23.95K</span>
                          </div>
                          <div className="bl-box back back1">
                            <span className="d-block odds">1.25</span>
                            <span className="d-block small">2.11K</span>
                          </div>
                          <div className="bl-box back back">
                            <span className="d-block odds">1.26</span>
                            <span className="d-block small">3.53K</span>
                          </div>
                          <div className="bl-box lay lay">
                            <span className="d-block odds">1.27</span>
                            <span className="d-block">478.39</span>
                          </div>
                          <div className="bl-box lay lay1">
                            <span className="d-block odds">1.28</span>
                            <span className="d-block">3.65K</span>
                          </div>
                          <div className="bl-box lay lay2">
                            <span className="d-block odds">1.29</span>
                            <span className="d-block">3.45K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="market-6">
                    <div className="bet-table">
                      <div className="bet-table-header">
                        <div
                          data-toggle="collapse"
                          data-target="#market1"
                          aria-expanded="true"
                          className="nation-name"
                        >
                          <span title="fancy1">
                            <Link to="#" title="">
                              <img
                                src="https://wver.sprintstaticdata.com/v49/static/front/img/arrow-down.svg"
                                className="mr-1"
                              />
                            </Link>
                            &nbsp;fancy1
                          </span>
                        </div>
                        <div className="float-right">
                          <Link to="#" className="btn btn-back">
                            Bet Lock
                          </Link>
                        </div>
                      </div>
                      <div
                        id="market1"
                        data-title="OPEN"
                        className="bet-table-body collapse show"
                      >
                        <div className="bet-table-row">
                          <div className="text-right nation-name" />
                          <div className="back bl-title d-none-mobile">
                            Back
                          </div>
                          <div className="lay bl-title d-none-mobile">Lay</div>
                        </div>
                        <div className="fancy-tripple">
                          <div data-title="" className="bet-table-row">
                            <div className="nation-name">
                              <p>AFG Will Win the Toss(AFG vs IND)adv</p>
                              <p
                                className="mb-0"
                                style={{ color: "rgb(153, 153, 153)" }}
                              >
                                0
                              </p>
                            </div>
                            <div className="bl-box back">
                              <span className="d-block odds">1.98</span>
                              <span className="d-block small">5L</span>
                            </div>
                            <div className="bl-box lay no-val">
                              <span className="d-block odds">—</span>
                            </div>
                            <div className="fancy-min-max">
                              <span>Min: 100</span>
                              <span>Max: 1L</span>
                            </div>
                          </div>
                        </div>

                        <div className="fancy-tripple">
                          <div data-title="" className="bet-table-row">
                            <div className="nation-name">
                              <p>IND Will Win the Toss(AFG vs IND)adv</p>
                              <p
                                className="mb-0"
                                style={{ color: "rgb(153, 153, 153)" }}
                              >
                                0
                              </p>
                            </div>
                            <div className="bl-box back">
                              <span className="d-block odds">1.98</span>
                              <span className="d-block small">5L</span>
                            </div>
                            <div className="bl-box lay no-val">
                              <span className="d-block odds">—</span>
                            </div>
                            <div className="fancy-min-max">
                              <span>Min: 100</span>
                              <span>Max: 1L</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="market-10">
                    <div className="bet-table">
                      <div d="" className="bet-table-header">
                        <div
                          ata-toggle="collapse"
                          data-target="#market2"
                          aria-expanded="true"
                          className="nation-name"
                        >
                          <span title="khado">
                            <Link to="#" title="">
                              <img
                                src="https://wver.sprintstaticdata.com/v49/static/front/img/arrow-down.svg"
                                className="mr-1"
                              />
                            </Link>
                            &nbsp; khado
                          </span>
                        </div>
                        <div className="float-right">
                          <Link to="#" className="btn btn-back">
                            Bet Lock
                          </Link>
                        </div>
                      </div>
                      <div
                        id="market2"
                        data-title="OPEN"
                        className="bet-table-body collapse show"
                      >
                        <div className="bet-table-row">
                          <div className="text-right nation-name" />
                          <div className="back bl-title d-none-mobile">
                            Back
                          </div>
                        </div>
                        <div className="bet-table-row">
                          <div className="nation-name">
                            <p>
                              <span>6 over Khado run AFG adv - 0</span>
                            </p>
                            <p
                              className="mb-0"
                              style={{ color: "rgb(153, 153, 153)" }}
                            >
                              0
                            </p>
                          </div>
                          <div className="bl-box back no-val suspended">
                            <span className="d-block odds">—</span>
                          </div>
                          <div className="fancy-min-max">
                            <span>Min: 100</span>
                            <span>Max: 1L</span>
                          </div>
                        </div>
                        <div className="bet-table-row">
                          <div className="nation-name">
                            <p>
                              <span>20 over Khado run IND adv - 0</span>
                            </p>
                            <p
                              className="mb-0"
                              style={{ color: "rgb(153, 153, 153)" }}
                            >
                              0
                            </p>
                          </div>
                          <div className="bl-box back no-val suspended">
                            <span className="d-block odds">—</span>
                          </div>
                          <div className="fancy-min-max">
                            <span>Min: 100</span>
                            <span>Max: 1L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="market-6">
                    <div className="bet-table">
                      <div className="bet-table-header">
                        <div
                          data-toggle="collapse"
                          data-target="#market3"
                          aria-expanded="true"
                          className="nation-name"
                        >
                          <span title="oddeven">
                            <Link to="#" title="">
                              <img
                                src="https://wver.sprintstaticdata.com/v49/static/front/img/arrow-down.svg"
                                className="mr-1"
                              />
                            </Link>
                            &nbsp; oddeven
                          </span>
                        </div>
                        <div className="float-right">
                          <Link to="#" className="btn btn-back">
                            Bet Lock
                          </Link>
                        </div>
                      </div>
                      <div
                        id="market3"
                        data-title="OPEN"
                        className="bet-table-body collapse show"
                      >
                        <div className="bet-table-row">
                          <div className="text-right nation-name" />
                          <div className="back bl-title d-none-mobile">Odd</div>
                          <div className="back bl-title d-none-mobile">
                            Even
                          </div>
                        </div>
                        <div className="fancy-tripple">
                          <div data-title="" className="bet-table-row">
                            <div className="nation-name">
                              <p>1st inn 1 over run odd(AFG vs IND)adv</p>
                              <p
                                className="mb-0"
                                style={{ color: "rgb(153, 153, 153)" }}
                              >
                                0
                              </p>
                            </div>
                            <div className="bl-box back">
                              <span className="d-block odds">1.98</span>
                              <span className="d-block small">5L</span>
                            </div>
                            <div className="bl-box back no-val">
                              <span className="d-block odds">—</span>
                            </div>
                            <div className="fancy-min-max">
                              <span>Min: 100</span>
                              <span>Max: 1L</span>
                            </div>
                          </div>
                        </div>

                        <div className="fancy-tripple">
                          <div
                            data-title="SUSPENDED"
                            className="bet-table-row suspendedtext"
                          >
                            <div className="nation-name">
                              <p>1st inn 1 over run even(AFG vs IND)adv</p>
                              <p
                                className="mb-0"
                                style={{ color: "rgb(153, 153, 153)" }}
                              >
                                0
                              </p>
                            </div>
                            <div className="bl-box back no-val">
                              <span className="d-block odds">—</span>
                            </div>
                            <div className="bl-box back no-val">
                              <span className="d-block odds">—</span>
                            </div>
                            <div className="fancy-min-max">
                              <span>Min: 100</span>
                              <span>Max: 1L</span>
                            </div>
                          </div>
                        </div>

                        <div className="fancy-tripple">
                          <div data-title="" className="bet-table-row">
                            <div className="nation-name">
                              <p>1st inn 2 over run odd(AFG vs IND)adv</p>
                              <p
                                className="mb-0"
                                style={{ color: "rgb(153, 153, 153)" }}
                              >
                                0
                              </p>
                            </div>
                            <div className="bl-box back">
                              <span className="d-block odds">1.98</span>
                              <span className="d-block small">5L</span>
                            </div>
                            <div className="bl-box back no-val">
                              <span className="d-block odds">—</span>
                            </div>
                            <div className="fancy-min-max">
                              <span>Min: 100</span>
                              <span>Max: 1L</span>
                            </div>
                          </div>
                        </div>

                        <div className="fancy-tripple">
                          <div data-title="" className="bet-table-row">
                            <div className="nation-name">
                              <p>1st inn 2 over run even(AFG vs IND)adv</p>
                              <p
                                className="mb-0"
                                style={{ color: "rgb(153, 153, 153)" }}
                              >
                                0
                              </p>
                            </div>
                            <div className="bl-box back no-val">
                              <span className="d-block odds">—</span>
                            </div>
                            <div className="bl-box back">
                              <span className="d-block odds">1.98</span>
                              <span className="d-block small">5L</span>
                            </div>
                            <div className="fancy-min-max">
                              <span>Min: 100</span>
                              <span>Max: 1L</span>
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
              <div className="tab-content m-t-20">
                <div className="tabs">
                  <div className="card-header">
                    <ul
                      role="tablist"
                      className="nav nav-pills card-header-pills"
                    >
                      <li role="presentation" className="nav-item">
                        <Link
                          to="#"
                          id="nav-matchedBets-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-matchedBets"
                          type="button"
                          role="tab"
                          aria-controls="nav-matchedBets"
                          aria-selected="true"
                          className="nav-link active"
                        >
                          Matched Bets
                        </Link>
                      </li>
                      <li role="presentation" className="nav-item">
                        <Link
                          to="#"
                          id="nav-deletedBets-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-deletedBets"
                          type="button"
                          role="tab"
                          aria-controls="nav-deletedBets"
                          aria-selected="true"
                          className="nav-link"
                        >
                          Deleted Bets
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div
                      id="nav-matchedBets"
                      role="tabpanel"
                      aria-labelledby="nav-matchedBets-tab"
                      tabIndex="0"
                      className="tab-pane active card-body"
                    >
                      <div className="text-center">No records found</div>
                    </div>
                    <div
                      id="nav-deletedBets"
                      role="tabpanel"
                      aria-labelledby="nav-deletedBets-tab"
                      tabIndex="0"
                      className="tab-pane card-body"
                    >
                      <div className="text-center">No records found</div>
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

export default Cricket2;
