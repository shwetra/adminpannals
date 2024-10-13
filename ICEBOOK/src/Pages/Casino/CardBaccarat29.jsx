import React, { useState } from "react";
import { Link } from "react-router-dom";
function CardBaccarat29() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container sin-khal">
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
                    <div className="teen20casino-container">
                      <div className="teen20left">
                        <div className="casino-box-row">
                          <div className="casino-nation-name no-border casino-bl-box-title">
                            <div className="playera">Player A</div>
                          </div>
                        </div>
                        <div className="casino-bl-box casino-bl-box-title d-none-small">
                          <div className="casino-bl-box-item">
                            <span>Winner</span>
                          </div>
                          <div className="casino-bl-box-item">
                            <span>High Card</span>
                          </div>
                          <div className="casino-bl-box-item">
                            <span>Pair</span>
                          </div>
                          <div className="casino-bl-box-item">
                            <span>Color Plus</span>
                          </div>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">1.98</span>
                            <span className="book-black">0</span>
                          </div>
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">1.98</span>
                            <span className="book-black">0</span>
                          </div>
                          
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">3.25</span>
                            <span className="book-black">0</span>
                          </div>
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">2</span>
                            <span className="book-black">0</span>
                          </div>
                        </div>
                      </div>
                      <div className="teen20center" />
                      <div className="teen20right">
                        <div className="casino-box-row">
                          <div className="casino-nation-name no-border casino-bl-box-title">
                            <div className="playerb">Player B</div>
                          </div>
                        </div>
                        <div className="casino-bl-box casino-bl-box-title d-none-small">
                          <div className="casino-bl-box-item">
                            <span>Winner</span>
                          </div>
                          <div className="casino-bl-box-item">
                            <span>High Card</span>
                          </div>
                          <div className="casino-bl-box-item">
                            <span>Pair</span>
                          </div>
                          <div className="casino-bl-box-item">
                            <span>Color Plus</span>
                          </div>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">1.98</span>
                            <span className="book-black">0</span>
                          </div>
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">1.98</span>
                            <span className="book-black">0</span>
                          </div>
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">3.25</span>
                            <span className="book-black">0</span>
                          </div>
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">2</span>
                            <span className="book-black">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sin-khal-box">
                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/lucky9.png" />
                      <div className="casino-bl-box">
                        <div className="back casino-bl-box-item">
                          <span className="casino-box-odd">4.7</span>
                        </div>
                        <div className="lay casino-bl-box-item">
                          <span className="casino-box-odd">5.1</span>
                        </div>
                        <div className="sin-khal-box-book book-black">0</div>
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

export default CardBaccarat29;
