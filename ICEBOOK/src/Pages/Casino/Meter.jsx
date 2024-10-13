import React, { useState } from "react";
import { Link } from "react-router-dom";
function Meter() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container cmeter">
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
                    <div className="teen1daycasino-container">
                      <div className="teen1dayleft mb-md-0 mb-2">
                        <div className="text-center">
                          <b className="text-playerb">Low</b>
                          <span className="text-success ms-2">30</span>
                        </div>
                        <div className="w-100">
                          <div className="casino-cards text-center mt-1">
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/ADD.png" />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/8HH.png" />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/7SS.png" />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/4HH.png" />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/4DD.png" />
                                </span>
                              </div>
                            </div>
                            
                            
                            
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/6HH.png" />
                                </span>
                              </div>
                            </div>
                            
                            
                          </div>
                          <div className="casino-min-max">
                            <span className="casino-book book-black">0</span>
                            <span className="float-right">
                              R:<span>10</span>-<span>25K</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="teen1daycenter" />
                      <div className="teen1dayright">
                        <div className="text-center">
                          <b className="text-playerb">High</b>
                          <span className="text-success ms-2">34</span>
                        </div>
                        <div className="w-100">
                          <div className="casino-cards text-center mt-1">
                            
                            
                            
                            
                            
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/JCC.png" />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/JSS.png" />
                                </span>
                              </div>
                            </div>
                            <div className="casino-card-item">
                              <div className="card-image">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/QCC.png" />
                                </span>
                              </div>
                            </div>
                            
                            
                            
                          </div>
                          <div className="casino-min-max">
                            <span className="casino-book book-black">0</span>
                            <span className="float-right">
                              R:<span>10</span>-<span>25K</span>
                            </span>
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

export default Meter;
