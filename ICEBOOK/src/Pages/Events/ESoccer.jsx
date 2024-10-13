import React, { useState } from "react";
import { Link } from "react-router-dom";
function ESoccer() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container">
              <div className="center-content">
                <div className="game-header">
                  <span className="game-header-name">
                    BWF WORLD TOUR - MEN Kaohsiung Masters (Taiwan) &gt; alvi
                    wijaya chairullah - Tzu Wei Wang
                  </span>
                  <div>
                    <span>19/06/2024 17:20:00</span>
                  </div>
                </div>
                <Link to="#" className="btn btn-back float-right">
                  More Market
                </Link>

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
                          <span title="MATCH_ODDS">
                            <Link to="#" title="">
                              <img
                                src="https://wver.sprintstaticdata.com/v49/static/admin/img/arrow-down.svg"
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
                        className="bet-table-body collapse show"
                      >
                        <div className="bet-table-row">
                          <div className="text-right nation-name">
                            <span className="max-bet">
                              <span title="Max : 1">1</span>
                            </span>
                          </div>
                          <div className="back bl-title d-none-mobile">
                            Back
                          </div>
                          <div className="lay bl-title d-none-mobile">Lay</div>
                        </div>
                        <div className="bet-table-mobile-row d-none d-none-desktop">
                          <div className="bet-table-mobile-team-name">
                            <span>Ales Krejci </span>
                            <span style={{ color: "rgb(153, 153, 153)" }}>
                              0
                            </span>
                            <span className="d-none">0</span>
                          </div>
                        </div>
                        <div data-title="SUSPENDED" className="bet-table-row">
                          <div className="nation-name">
                            <p>Ales Krejci </p>
                            <p
                              className="mb-0 float-left"
                              style={{ color: "rgb(153, 153, 153)" }}
                            >
                              0
                            </p>
                            <p className="mb-0 float-right d-none">0</p>
                          </div>
                          <div className="bl-box back back no-val">
                            <div className="bl-box back back">
                              <span className="d-block odds">5.98</span>
                              <span className="d-block small">50L</span>
                            </div>
                          </div>
                          <div className="bl-box lay lay no-val">
                            <span className="d-block odds">5.98</span>
                            <span className="d-block small">50L</span>
                          </div>
                        </div>
                        <div className="bet-table-mobile-row d-none d-none-desktop">
                          <div className="bet-table-mobile-team-name">
                            <span>Jan Manhal Sr.</span>
                            <span style={{ color: "rgb(153, 153, 153)" }}>
                              0
                            </span>
                            <span className="d-none">0</span>
                          </div>
                        </div>
                        <div data-title="SUSPENDED" className="bet-table-row">
                          <div className="nation-name">
                            <p>Jan Manhal Sr.</p>
                            <p
                              className="mb-0 float-left"
                              style={{ color: "rgb(153, 153, 153)" }}
                            >
                              0
                            </p>
                            <p className="mb-0 float-right d-none">0</p>
                          </div>
                          <div className="bl-box back back no-val">
                            <div className="bl-box back back">
                              <span className="d-block odds">5.98</span>
                              <span className="d-block small">50L</span>
                            </div>
                          </div>
                          <div className="bl-box lay lay no-val">
                            <span className="d-block odds">5.98</span>
                            <span className="d-block small">50L</span>
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

      {/* bet lock modal */}
      <div
        className="modal fade"
        id="betLockModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="betLockModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div tabIndex={-1} className="modal-content">
            <header className="modal-header">
              <h5 className="modal-title">Bet Lock</h5>
              <button
                aria-label="Close"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                style={{ filter: "invert(0)" }}
              ></button>
            </header>
            <div className="modal-body">
              <div className="row">
                <div className="col-6" />
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="password"
                      name="ulockmpass"
                      defaultValue=""
                      placeholder="Transaction Code"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultValue={1}
                            id="__BVID__1790"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__1790"
                          />
                        </div>
                      </th>
                      <th>All Account</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="locku"
                            className="custom-control-input"
                            defaultValue="48f99362-8bb4-474a-bd98-7344dc745b0d"
                            id="__BVID__1791"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__1791"
                          />
                        </div>
                      </td>
                      <td>iceajit777</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="locku"
                            className="custom-control-input"
                            defaultValue="b43dfa9b-1546-4144-93d0-8acb019e6e48"
                            id="__BVID__1792"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__1792"
                          />
                        </div>
                      </td>
                      <td>iceladdu777</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="locku"
                            className="custom-control-input"
                            defaultValue="7bebf39a-9642-4aca-998f-46efc4464ee2"
                            id="__BVID__1793"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__1793"
                          />
                        </div>
                      </td>
                      <td>jawahar777</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="locku"
                            className="custom-control-input"
                            defaultValue="49c026b3-ca07-442d-8a3a-385597691afa"
                            id="__BVID__1794"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__1794"
                          />
                        </div>
                      </td>
                      <td>iceaj15</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="locku"
                            className="custom-control-input"
                            defaultValue="c17d8646-097d-43a5-9a42-9de13d6be477"
                            id="__BVID__1795"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__1795"
                          />
                        </div>
                      </td>
                      <td>Gokull777</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="locku"
                            className="custom-control-input"
                            defaultValue="9d774d38-5e51-4f41-bf37-b38ea8052628"
                            id="__BVID__1796"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__1796"
                          />
                        </div>
                      </td>
                      <td>Suribabu77</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="locku"
                            className="custom-control-input"
                            defaultValue="650b5be7-d560-4fd8-b98f-3172979863c8"
                            id="__BVID__1797"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__1797"
                          />
                        </div>
                      </td>
                      <td>icepr777</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* user book modal */}
      <div
        className="modal fade"
        id="userBookModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="userBookModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div tabIndex={-1} className="modal-content">
            <header className="modal-header">
              <h5 className="modal-title">User Book</h5>
              <button
                aria-label="Close"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                style={{ filter: "invert(0)" }}
              ></button>
            </header>
            <div className="modal-body">
              <p>No Record Found</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ESoccer;
