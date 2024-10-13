import React, { useState } from "react";
import { Link } from "react-router-dom";
function Trio() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container pasa">
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
                    <div className="row row5">
                      <div className="col-12 col-md-6">
                        <div
                          className="casino-box-row d-none-small"
                          style={{ height: 30 }}
                        />
                        <div className="casino-box-row pasa-sesssion">
                          <div className="casino-nation-name">
                            <b className="pointer">Session</b>
                            <div className="float-right">
                              <span className="mr-2 book-black">0</span>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="lay casino-bl-box-item">
                              <span>21</span>
                              <span className="casino-box-odd">100</span>
                            </div>
                            <div className="back casino-bl-box-item">
                              <span>21</span>
                              <span className="casino-box-odd">80</span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="casino-box-row d-none-small"
                          style={{ height: 30 }}
                        />
                      </div>
                      <div className="col-md-6 col-md-3 pasa-fancy">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>3 Card Judgement(1 2 4)</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.78</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">1.83</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                      <div className="col-md-6 col-md-3 pasa-fancy">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>3 Card Judgement(J Q K)</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.78</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">1.83</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                    </div>
                    <div className="row row5 mt-2 pasa-cards">
                      <div className="col-md-6 col-md-3">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Two Red Only</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">2.52</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">2.72</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                      <div className="col-md-6 col-md-3">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Two Black Only</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">2.52</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">2.72</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                      <div className="col-md-6 col-md-3">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Two Odd Only</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">2.33</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">2.53</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                      <div className="col-md-6 col-md-3">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Two Even Only</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">2.75</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">2.95</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-box-row pasa-other-bets">
                      <div className="casino-box-row pasa-other-bet">
                        <div className="casino-nation-name">
                          <b>Pair</b>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">5.5</span>
                          </div>
                        </div>
                        <div className="casino-nation-name book-black">0</div>
                      </div>
                      <div className="casino-box-row pasa-other-bet">
                        <div className="casino-nation-name">
                          <b>Flush</b>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">17</span>
                          </div>
                        </div>
                        <div className="casino-nation-name book-black">0</div>
                      </div>
                      <div className="casino-box-row pasa-other-bet">
                        <div className="casino-nation-name">
                          <b>Straight</b>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">24</span>
                          </div>
                        </div>
                        <div className="casino-nation-name book-black">0</div>
                      </div>
                      <div className="casino-box-row pasa-other-bet">
                        <div className="casino-nation-name">
                          <b>Trio</b>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">201</span>
                          </div>
                        </div>
                        <div className="casino-nation-name book-black">0</div>
                      </div>
                      <div className="casino-box-row pasa-other-bet">
                        <div className="casino-nation-name">
                          <b>Straight Flush</b>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">226</span>
                          </div>
                        </div>
                        <div className="casino-nation-name book-black">0</div>
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

export default Trio;
