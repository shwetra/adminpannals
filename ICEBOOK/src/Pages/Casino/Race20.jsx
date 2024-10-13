import React, { useState } from "react";
import { Link } from "react-router-dom";
function Race20() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container race20">
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
                    <div className="text-right">
                      Total Cards: 1 | Total Points: 9
                    </div>
                    <div className="row row5">
                      <div className="col-6 col-md-3">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/KSS.png" />

                            <div className="range-icon d-inline-block ms-2">
                              <i
                                data-toggle="collapse"
                                data-target="#demo0"
                                className="fas fa-info-circle float-right"
                              />
                              <div id="demo0" className="collapse icon-range">
                                R:<span>100</span>-<span>3L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/KHH.png" />

                            <div className="range-icon d-inline-block ms-2">
                              <i
                                data-toggle="collapse"
                                data-target="#demo1"
                                className="fas fa-info-circle float-right"
                              />
                              <div id="demo1" className="collapse icon-range">
                                R:<span>100</span>-<span>3L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/KCC.png" />

                            <div className="range-icon d-inline-block ms-2">
                              <i
                                data-toggle="collapse"
                                data-target="#demo2"
                                className="fas fa-info-circle float-right"
                              />
                              <div id="demo2" className="collapse icon-range">
                                R:<span>100</span>-<span>3L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/KDD.png" />
                            <div className="range-icon d-inline-block ms-2">
                              <i
                                data-toggle="collapse"
                                data-target="#demo3"
                                className="fas fa-info-circle float-right"
                              />
                              <div id="demo3" className="collapse icon-range">
                                R:<span>100</span>-<span>3L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-nation-name book-black">0</div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12 col-md-4">
                        <div>
                          <div className="casino-yn">
                            <div />
                            <div className="casino-bl-box">
                              <div className="casino-bl-box-item yn-header">
                                <b>No</b>
                              </div>
                              <div className="casino-bl-box-item yn-header">
                                <b>Yes</b>
                              </div>
                            </div>
                          </div>
                          <div className="casino-odds-box casino-yn">
                            <div className="casino-odds-box-bhav">
                              <b>Total points</b>
                              <div className="range-icon d-inline-block">
                                <i
                                  data-toggle="collapse"
                                  data-target="#tp0"
                                  className="fas fa-info-circle float-right"
                                />
                                <div id="tp0" className="collapse icon-range">
                                  R:<span>100</span>-<span>1L</span>
                                </div>
                              </div>
                            </div>
                            <div className="casino-bl-box">
                              <div className="lay casino-bl-box-item">
                                <span className="casino-box-odd">0</span>
                                <span>0</span>
                              </div>
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">0</span>
                                <span>0</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-yn">
                            <div />
                            <div className="casino-bl-box">
                              <div className="casino-nation-name book-black">
                                0
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="casino-yn">
                            <div />
                            <div className="casino-bl-box">
                              <div className="casino-bl-box-item yn-header">
                                <b>No</b>
                              </div>
                              <div className="casino-bl-box-item yn-header">
                                <b>Yes</b>
                              </div>
                            </div>
                          </div>
                          <div className="casino-odds-box casino-yn">
                            <div className="casino-odds-box-bhav">
                              <b>Total cards</b>
                              <div className="range-icon d-inline-block">
                                <i
                                  data-toggle="collapse"
                                  data-target="#tp1"
                                  className="fas fa-info-circle float-right"
                                />
                                <div id="tp1" className="collapse icon-range">
                                  R:<span>100</span>-<span>1L</span>
                                </div>
                              </div>
                            </div>
                            <div className="casino-bl-box">
                              <div className="lay casino-bl-box-item">
                                <span className="casino-box-odd">0</span>
                                <span>0</span>
                              </div>
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">0</span>
                                <span>0</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-yn">
                            <div />
                            <div className="casino-bl-box">
                              <div className="casino-nation-name book-black">
                                0
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-8 win-with">
                        <div className="row row5">
                          <div className="col-4">
                            <div className="casino-box-row">
                              <div className="casino-nation-name">
                                <b>Win with 5</b>
                                <div className="range-icon d-inline-block ms-2">
                                  <i
                                    data-toggle="collapse"
                                    data-target="#fancy2"
                                    className="fas fa-info-circle float-right"
                                  />
                                  <div
                                    id="fancy2"
                                    className="collapse icon-range"
                                  >
                                    R:<span>100</span>-<span>25K</span>
                                  </div>
                                </div>
                              </div>
                              <div className="casino-bl-box">
                                <div className="back casino-bl-box-item">
                                  <span className="casino-box-odd">0</span>
                                </div>
                              </div>
                              <div className="casino-nation-name rf-minheight book-black">
                                0
                              </div>
                            </div>
                            <div className="casino-box-row">
                              <div className="casino-nation-name">
                                <b>Win with 15</b>
                                <div className="range-icon d-inline-block ms-2">
                                  <i
                                    data-toggle="collapse"
                                    data-target="#fancy5"
                                    className="fas fa-info-circle float-right"
                                  />
                                  <div
                                    id="fancy5"
                                    className="collapse icon-range"
                                  >
                                    R:<span>100</span>-<span>25K</span>
                                  </div>
                                </div>
                              </div>
                              <div className="casino-bl-box">
                                <div className="back casino-bl-box-item">
                                  <span className="casino-box-odd">0</span>
                                </div>
                              </div>
                              <div className="casino-nation-name rf-minheight book-black">
                                0
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="casino-box-row">
                              <div className="casino-nation-name">
                                <b>Win with 6</b>
                                <div className="range-icon d-inline-block ms-2">
                                  <i
                                    data-toggle="collapse"
                                    data-target="#fancy3"
                                    className="fas fa-info-circle float-right"
                                  />
                                  <div
                                    id="fancy3"
                                    className="collapse icon-range"
                                  >
                                    R:<span>100</span>-<span>25K</span>
                                  </div>
                                </div>
                              </div>
                              <div className="casino-bl-box">
                                <div className="back casino-bl-box-item">
                                  <span className="casino-box-odd">0</span>
                                </div>
                              </div>
                              <div className="casino-nation-name rf-minheight book-black">
                                0
                              </div>
                            </div>
                            <div className="casino-box-row">
                              <div className="casino-nation-name">
                                <b>Win with 16</b>
                                <div className="range-icon d-inline-block ms-2">
                                  <i
                                    data-toggle="collapse"
                                    data-target="#fancy6"
                                    className="fas fa-info-circle float-right"
                                  />
                                  <div
                                    id="fancy6"
                                    className="collapse icon-range"
                                  >
                                    R:<span>100</span>-<span>25K</span>
                                  </div>
                                </div>
                              </div>
                              <div className="casino-bl-box">
                                <div className="back casino-bl-box-item">
                                  <span className="casino-box-odd">0</span>
                                </div>
                              </div>
                              <div className="casino-nation-name rf-minheight book-black">
                                0
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="casino-box-row">
                              <div className="casino-nation-name">
                                <b>Win with 7</b>
                                <div className="range-icon d-inline-block ms-2">
                                  <i
                                    data-toggle="collapse"
                                    data-target="#fancy4"
                                    className="fas fa-info-circle float-right"
                                  />
                                  <div
                                    id="fancy4"
                                    className="collapse icon-range"
                                  >
                                    R:<span>100</span>-<span>25K</span>
                                  </div>
                                </div>
                              </div>
                              <div className="casino-bl-box">
                                <div className="back casino-bl-box-item">
                                  <span className="casino-box-odd">0</span>
                                </div>
                              </div>
                              <div className="casino-nation-name rf-minheight book-black">
                                0
                              </div>
                            </div>
                            <div className="casino-box-row">
                              <div className="casino-nation-name">
                                <b>Win with 17</b>
                                <div className="range-icon d-inline-block ms-2">
                                  <i
                                    data-toggle="collapse"
                                    data-target="#fancy7"
                                    className="fas fa-info-circle float-right"
                                  />
                                  <div
                                    id="fancy7"
                                    className="collapse icon-range"
                                  >
                                    R:<span>100</span>-<span>25K</span>
                                  </div>
                                </div>
                              </div>
                              <div className="casino-bl-box">
                                <div className="back casino-bl-box-item">
                                  <span className="casino-box-odd">0</span>
                                </div>
                              </div>
                              <div className="casino-nation-name rf-minheight book-black">
                                0
                              </div>
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

export default Race20;
