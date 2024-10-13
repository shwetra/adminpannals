import React, { useState } from "react";
import { Link } from "react-router-dom";
function BollywoodTable() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container aaa">
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
                    <div className="row row5 d-none-small">
                      <div className="col-md-4">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>A. Don</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-book text-center book-black">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>B. Amar Akbar Anthony</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-book text-center book-black">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>C. Sahib Bibi Aur Ghulam</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-book text-center book-black">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>D. Dharam Veer</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-book text-center book-black">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>E. Kis Kis Ko Pyaar Karoon</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-book text-center book-black">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>F. Ghulam</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-book text-center book-black">
                            0
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="teen1daycasino-container justify-content-end casino-min-max">
                          <div>
                            R:<span>100</span>-<span>1L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row row5">
                      <div className="col-lg-4 col-12 d-none-small">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Odd</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                          <div className="casino-book text-center book-black">
                            0
                          </div>
                          <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
                            <div>
                              R:<span>100</span>-<span>1L</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-6 bc-fancy">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>0</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">
                                Dulha Dulhan K-Q
                              </span>
                            </div>
                            <span className="casino-book text-center book-black">
                              0
                            </span>
                          </div>
                        </div>
                        <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
                          <div>
                            R:<span>100</span>-<span>1L</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-6 bc-fancy">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>0</b>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">Barati J-A</span>
                            </div>
                            <span className="casino-book text-center book-black">
                              0
                            </span>
                          </div>
                        </div>
                        <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
                          <div>
                            R:<span>100</span>-<span>1L</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row5">
                      <div className="col-lg-6 col-12 aaa-oe">
                        <div className="casino-box-row">
                          <div className="casino-bl-box">
                            <b>0</b>
                          </div>
                          <div className="casino-bl-box">
                            <b>0</b>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item casino-card-img">
                              <span>
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/heart.png" />
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/diamond.png" />
                              </span>
                            </div>
                            <span className="casino-book text-center book-black">
                              0
                            </span>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item casino-card-img">
                              <span>
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/spade.png" />
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/club.png" />
                              </span>
                            </div>
                            <span className="casino-book text-center book-black">
                              0
                            </span>
                          </div>
                        </div>
                        <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
                          <div>
                            R:<span>100</span>-<span>1L</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="text-center w-100">
                          <div className="casino-bl-box">
                            <div className="casino-bl-box-item">
                              <b>Cards 0</b>
                            </div>
                          </div>
                        </div>
                        <div className="casino-cards text-center mt-1">
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/J.png" />
                            </div>
                            <div className="casino-book text-center book-black">
                              0
                            </div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/Q.png" />
                            </div>
                            <div className="casino-book text-center book-black">
                              0
                            </div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/K.png" />
                            </div>
                            <div className="casino-book text-center book-black">
                              0
                            </div>
                          </div>
                          <div className="casino-card-item">
                            <div className="card-image">
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/A.png" />
                            </div>
                            <div className="casino-book text-center book-black">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="teen1daycasino-container justify-content-end casino-min-max w-100">
                          <div>
                            R:<span>100</span>-<span>25K</span>
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

export default BollywoodTable;
