import React, { useState } from "react";
import { Link } from "react-router-dom";
function Lucky7() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container lucky7">
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
                    <div className="casino-box low-high-box">
                      <div className="low-odds">
                        <div className="casino-odds">2</div>
                        <div className="text-center casino-buttons">
                          <span>Low Card</span>
                        </div>
                        <div className="casino-book book-black">0</div>
                      </div>
                      <div className="text-center lucky7-card">
                        <img
                          src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/7.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="high-odds">
                        <div className="casino-odds">2</div>
                        <div className="text-center casino-buttons">
                          <span>High Card</span>
                        </div>
                        <div className="casino-book book-black">0</div>
                      </div>
                      <div className="casino-min-max text-right">
                        R:<span>100</span>-<span>1L</span>
                      </div>
                    </div>
                    <div className="casino-box sidebets-box">
                      <div className="lucky7-extra-bets">
                        <div className="lucky7-extra-bets-item-container">
                          <div className="lucky7-extra-bets-item">
                            <div className="casino-odds">2.1</div>
                            <div className="casino-buttons">Even</div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-min-max text-right">
                            R:<span>100</span>-<span>25K</span>
                          </div>
                        </div>
                        <div className="lucky7-extra-bets-item-container">
                          <div className="lucky7-extra-bets-item">
                            <div className="casino-odds">1.79</div>
                            <div className="casino-buttons">Odd</div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-min-max text-right">
                            R:<span>100</span>-<span>25K</span>
                          </div>
                        </div>
                        <div className="lucky7-extra-bets-item-container">
                          <div className="lucky7-extra-bets-item">
                            <div className="casino-odds">1.95</div>
                            <div className="casino-buttons">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/spade.png" />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/club.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-min-max text-right">
                            R:<span>100</span>-<span>25K</span>
                          </div>
                        </div>
                        <div className="lucky7-extra-bets-item-container">
                          <div className="lucky7-extra-bets-item">
                            <div className="casino-odds">1.95</div>
                            <div className="casino-buttons">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/heart.png" />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/diamond.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-min-max text-right">
                            R:<span>100</span>-<span>25K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-box cards-top">
                      <div className="container-fluid container-fluid-5">
                        <div className="row row5">
                          <div className="col-6 col-md-3">
                            <div>
                              <div className="casino-odds">4</div>
                              <div className="casino-cards text-center mt-1">
                                <div className="casino-box cards-top-box">
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/A.png" />
                                    </div>
                                  </div>
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/2.png" />
                                    </div>
                                  </div>
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/3.png" />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100 casino-book book-black">
                                  0
                                </div>
                              </div>
                              <div className="casino-min-max text-center">
                                R:<span>100</span>-<span>5K</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-3">
                            <div>
                              <div className="casino-odds">4</div>
                              <div className="casino-cards text-center mt-1">
                                <div className="casino-box cards-top-box">
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/4.png" />
                                    </div>
                                  </div>
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/5.png" />
                                    </div>
                                  </div>
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/6.png" />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100 casino-book book-black">
                                  0
                                </div>
                              </div>
                              <div className="casino-min-max text-center">
                                R:<span>100</span>-<span>5K</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-3">
                            <div>
                              <div className="casino-odds">4</div>
                              <div className="casino-cards text-center mt-1">
                                <div className="casino-box cards-top-box">
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/8.png" />
                                    </div>
                                  </div>
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/9.png" />
                                    </div>
                                  </div>
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/10.png" />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100 casino-book book-black">
                                  0
                                </div>
                              </div>
                              <div className="casino-min-max text-center">
                                R:<span>100</span>-<span>5K</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-3">
                            <div>
                              <div className="casino-odds">4</div>
                              <div className="casino-cards text-center mt-1">
                                <div className="casino-box cards-top-box">
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/J.png" />
                                    </div>
                                  </div>
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/Q.png" />
                                    </div>
                                  </div>
                                  <div className="casino-card-item">
                                    <div className="card-image">
                                      <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/K.png" />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100 casino-book book-black">
                                  0
                                </div>
                              </div>
                              <div className="casino-min-max text-center">
                                R:<span>100</span>-<span>5K</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="casino-box cards-box">
                      <div className="w-100">
                        <div className="casino-odds">12</div>
                        <div className="casino-cards text-center mt-1">
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/A.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/2.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/3.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/4.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/5.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/6.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/7.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/8.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/9.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/10.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/J.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/Q.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/K.png" />
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                        </div>
                      </div>
                      <div className="casino-min-max text-right">
                        R:<span>100</span>-<span>5K</span>
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

export default Lucky7;
