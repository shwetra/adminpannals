import React, { useState } from "react";
import { Link } from "react-router-dom";
function NoteNumber() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container note">
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
                    <div className="container-fluid container-fluid-5">
                      <div className="row row5 d-none-small">
                        <div className="col-md-4 oe-cards">
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>Odd Card 1</b>
                              <div className="d-flex">
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/A.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/3.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/5.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/7.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/9.jpg" />
                                </div>
                              </div>
                            </div>
                            <div className="casino-bl-box">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">1.98</span>
                              </div>
                              <div className="lay casino-bl-box-item">
                                <span className="casino-box-odd">2.02</span>
                              </div>
                            </div>
                            <div className="casino-nation-name book-black">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <div className="casino-card-img">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/spade.png" />
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/club.png" />
                                </span>
                              </div>
                            </div>
                            <div className="casino-bl-box">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">1.98</span>
                              </div>
                              <div className="lay casino-bl-box-item">
                                <span className="casino-box-odd">2.02</span>
                              </div>
                            </div>
                            <div className="casino-nation-name book-black">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 oe-cards">
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>Low Card 1</b>
                              <div className="d-flex">
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/A.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/2.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/3.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/4.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/5.jpg" />
                                </div>
                              </div>
                            </div>
                            <div className="casino-bl-box">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">1.98</span>
                              </div>
                              <div className="lay casino-bl-box-item">
                                <span className="casino-box-odd">2.02</span>
                              </div>
                            </div>
                            <div className="casino-nation-name book-black">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 oe-cards">
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>Even Card 1</b>
                              <div className="d-flex">
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/2.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/4.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/6.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/8.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/10.jpg" />
                                </div>
                              </div>
                            </div>
                            <div className="casino-bl-box">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">1.98</span>
                              </div>
                              <div className="lay casino-bl-box-item">
                                <span className="casino-box-odd">2.02</span>
                              </div>
                            </div>
                            <div className="casino-nation-name book-black">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <div className="casino-card-img">
                                <span>
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/heart.png" />
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/diamond.png" />
                                </span>
                              </div>
                            </div>
                            <div className="casino-bl-box">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">1.98</span>
                              </div>
                              <div className="lay casino-bl-box-item">
                                <span className="casino-box-odd">2.02</span>
                              </div>
                            </div>
                            <div className="casino-nation-name book-black">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 oe-cards">
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>High Card 1</b>
                              <div className="d-flex">
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/6.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/7.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/8.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/9.jpg" />
                                </div>
                                <div className="card-image ml-1">
                                  <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/single/10.jpg" />
                                </div>
                              </div>
                            </div>
                            <div className="casino-bl-box">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">1.98</span>
                              </div>
                              <div className="lay casino-bl-box-item">
                                <span className="casino-box-odd">2.02</span>
                              </div>
                            </div>
                            <div className="casino-nation-name book-black">
                              0
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container-fluid container-fluid-5">
                      <div className="row row5">
                        <div className="col-md-4 col-12 note-baccarat">
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>Baccarat 1</b>
                              <span className="text-yellow">
                                (1st, 2nd, 3rd card)
                              </span>
                            </div>
                            <div className="casino-bl-box">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">2.05</span>
                                <span className="book-black">0</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>Baccarat 2</b>
                              <span className="text-yellow">
                                (4th, 5th, 6th card)
                              </span>
                            </div>
                            <div className="casino-bl-box">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">2.05</span>
                                <span className="book-black">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8 col-12 note-cards">
                          <div className="casino-cards text-center mt-1">
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/A.png" />
                              </div>
                              <div className="book-black">0</div>
                            </div>
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/2.png" />
                              </div>
                              <div className="book-black">0</div>
                            </div>
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/3.png" />
                              </div>
                              <div className="book-black">0</div>
                            </div>
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/4.png" />
                              </div>
                              <div className="book-black">0</div>
                            </div>
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/5.png" />
                              </div>
                              <div className="book-black">0</div>
                            </div>
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/6.png" />
                              </div>
                              <div className="book-black">0</div>
                            </div>
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/7.png" />
                              </div>
                              <div className="book-black">0</div>
                            </div>
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/8.png" />
                              </div>
                              <div className="book-black">0</div>
                            </div>
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/9.png" />
                              </div>
                              <div className="book-black">0</div>
                            </div>
                            <div className="casino-card-item">
                              <div className="casino-book">9</div>
                              <div className="card-image">
                                <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/10.png" />
                              </div>
                              <div className="book-black">0</div>
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

export default NoteNumber;
