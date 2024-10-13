import React, { useState } from "react";
import { Link } from "react-router-dom";
function Poker6Player() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container poker6player">
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
                    <div className="casino-box">
                      <div className="teen1daycasino-container">
                        <div className="teen1dayleft">
                          <h4 className="playera">Hands</h4>
                          <div className="casino-row-container">
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <b>Player 1</b>
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#hands-0"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="hands-0"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>2L</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <div>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                    </div>
                                    <span className="float-right mr-1">
                                      <b className="d-block text-right">5.2</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <b>Player 2</b>
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#hands-1"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="hands-1"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>2L</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <div>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                    </div>
                                    <span className="float-right mr-1">
                                      <b className="d-block text-right">5.2</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <b>Player 3</b>
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#hands-2"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="hands-2"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>2L</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <div>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                    </div>
                                    <span className="float-right mr-1">
                                      <b className="d-block text-right">5.2</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <b>Player 4</b>
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#hands-3"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="hands-3"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>2L</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <div>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                    </div>
                                    <span className="float-right mr-1">
                                      <b className="d-block text-right">5.2</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <b>Player 5</b>
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#hands-4"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="hands-4"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>2L</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <div>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                    </div>
                                    <span className="float-right mr-1">
                                      <b className="d-block text-right">5.2</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <b>Player 6</b>
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#hands-5"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="hands-5"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>2L</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <div>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                      <span className="player-card">
                                        <span>
                                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/1.png" />
                                        </span>
                                      </span>
                                    </div>
                                    <span className="float-right mr-1">
                                      <b className="d-block text-right">5.2</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="teen1daycenter" />
                        <div className="teen1dayright pattern">
                          <h4>Pattern</h4>
                          <div className="casino-row-container">
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#pattern-6"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="pattern-6"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>50K</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <b>High Card</b>
                                    <span className="d-block text-right">
                                      <b>100</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#pattern-7"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="pattern-7"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>50K</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <b>Pair</b>
                                    <span className="d-block text-right">
                                      <b>5.8</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#pattern-8"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="pattern-8"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>50K</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <b>Two Pair</b>
                                    <span className="d-block text-right">
                                      <b>3.1</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#pattern-9"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="pattern-9"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>50K</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <b>Three of a Kind</b>
                                    <span className="d-block text-right">
                                      <b>6.8</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#pattern-10"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="pattern-10"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>50K</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <b>Straight</b>
                                    <span className="d-block text-right">
                                      <b>5.7</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#pattern-11"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="pattern-11"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>50K</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <b>Flush</b>
                                    <span className="d-block text-right">
                                      <b>8.7</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container fullbox">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#pattern-12"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="pattern-12"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>50K</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <b>Full House</b>
                                    <span className="d-block text-right">
                                      <b>8.7</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container fullbox">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#pattern-13"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="pattern-13"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>50K</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <b>Four of a Kind</b>
                                    <span className="d-block text-right">
                                      <b>80</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="casino-col-container fullbox">
                              <div className="casino-box-row">
                                <div className="w-100 mb-1 pr">
                                  <div className="float-right">
                                    <i
                                      data-toggle="collapse"
                                      data-target="#pattern-14"
                                      className="fas fa-info-circle"
                                    />
                                    <div
                                      id="pattern-14"
                                      className="collapse icon-range"
                                    >
                                      R:<span>50</span>-<span>50K</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="poker6box">
                                  <div className="casino-nation-name">
                                    <b>Straight Flush</b>
                                    <span className="d-block text-right">
                                      <b>100</b>
                                    </span>
                                  </div>
                                </div>
                                <div className="casino-book text-center w-100 book-black">
                                  0
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-remark mt-3">
                      <div className="remark-icon">
                        <img src="https://wver.sprintstaticdata.com/v50/static/front/img/icons/remark.png" />
                      </div>
                      <marquee> </marquee>
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

export default Poker6Player;
