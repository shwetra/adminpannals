import React, { useState } from "react";
import { Link } from "react-router-dom";
function DusKaDum() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container duskadum">
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
                    <div className="casino-box-row">
                      <div className="casino-nation-name">
                        <div className="p-relative">
                          <b>Next Total 170 or More</b>
                          <div className="d-inline-block">
                            <i
                              data-toggle="collapse"
                              data-target="#demo"
                              aria-expanded="false"
                              className="fas fa-info-circle collapsed"
                            />
                            <div id="demo" className="icon-range collapse">
                              R:<span>100</span>-<span>25K</span>
                            </div>
                          </div>
                        </div>
                        <div className="float-right mr-2">
                          <span className="d-block">
                            <span className="casino-book book-black">0</span>
                          </span>
                          <span className="d-block">
                            <span className="casino-book book-black">0</span>
                          </span>
                        </div>
                      </div>
                      <div className="casino-bl-box">
                        <div className="back casino-bl-box-item">
                          <span className="casino-box-odd">3.24</span>
                        </div>
                        <div className="lay casino-bl-box-item">
                          <span className="casino-box-odd">3.64</span>
                        </div>
                      </div>
                    </div>
                    <div className="dkd-other mt-2">
                      <div className="casino-box-row">
                        <div className="casino-bl-box">
                          <b>2.3</b>
                        </div>
                        <div className="casino-bl-box">
                          <b>1.67</b>
                        </div>
                        <div className="casino-bl-box">
                          <b>1.87</b>
                        </div>
                        <div className="casino-bl-box">
                          <b>1.99</b>
                        </div>
                      </div>
                      <div className="casino-box-row">
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">Even</span>
                            <span className="casino-book book-black">0</span>
                          </div>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item">
                            <span className="casino-box-odd">Odd</span>
                            <span className="casino-book book-black">0</span>
                          </div>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/heart.png" />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/diamond.png" />
                            </span>
                            <span className="casino-book book-black">0</span>
                          </div>
                        </div>
                        <div className="casino-bl-box">
                          <div className="back casino-bl-box-item casino-card-img">
                            <span>
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/spade.png" />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/club.png" />
                            </span>
                            <span className="casino-book book-black">0</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center w-100">
                        <span className="float-right casino-min-max">
                          R:<span>100</span>-<span>10K</span>
                        </span>
                      </div>
                    </div>
                    {/**/} {/**/}
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

export default DusKaDum;
