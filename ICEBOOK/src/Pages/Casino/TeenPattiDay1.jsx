import React, { useState } from "react";
import { Link } from "react-router-dom";
function TeenPattiDay1() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container teenpatti1day">
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
                    <div className="teen1daycasino-container d-none-small">
                      <div className="teen1dayleft">
                        <div className="casino-box-row">
                          <div className="casino-nation-name no-border casino-bl-box-title">
                            <div className="playera">Player A</div>
                          </div>
                          <div className="casino-bl-box casino-bl-box-title">
                            <div className="casino-bl-box-item">
                              <b>Back</b>
                            </div>
                            <div className="casino-bl-box-item">
                              <b>Lay</b>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Main</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#range1"
                                aria-expanded="false"
                                className="fas fa-info-circle collapsed"
                              />
                              <div id="range1" className="icon-range collapse">
                                R:<span>100</span>-<span>2L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="lay casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="teen1daycenter" />
                      <div className="teen1dayright">
                        <div className="casino-box-row">
                          <div className="casino-nation-name no-border casino-bl-box-title">
                            <div className="playerb">Player B</div>
                          </div>
                          <div className="casino-bl-box casino-bl-box-title">
                            <div className="casino-bl-box-item">
                              <b>Back</b>
                            </div>
                            <div className="casino-bl-box-item">
                              <b>Lay</b>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Main</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#range7"
                                aria-expanded="false"
                                className="fas fa-info-circle collapsed"
                              />
                              <div id="range7" className="icon-range collapse">
                                R:<span>100</span>-<span>2L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.62</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">1.66</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="teen1dayother">
                        <div className="casino-box-row">
                          <div className="casino-nation-name no-border" />
                          <div className="casino-bl-box">
                            <div className="casino-bl-box-item">
                              <b>Card 1</b>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="casino-bl-box-item">
                              <b>Card 2</b>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="casino-bl-box-item">
                              <b>Card 3</b>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="casino-bl-box-item">
                              <b>Card 4</b>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="casino-bl-box-item">
                              <b>Card 5</b>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="casino-bl-box-item">
                              <b>Card 6</b>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row mb-3">
                          <div className="casino-nation-name mb-4">
                            <b>Odd</b>
                            <div className="float-right">
                              <i
                                data-toggle="collapse"
                                data-target="#range13"
                                className="fas fa-info-circle"
                              />
                              <div id="range13" className="collapse icon-range">
                                R:<span>100</span>-<span>25K</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.86</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name mb-4">
                            <b>Even</b>
                            <div className="float-right">
                              <i
                                data-toggle="collapse"
                                data-target="#range14"
                                className="fas fa-info-circle"
                              />
                              <div id="range14" className="collapse icon-range">
                                R:<span>100</span>-<span>25K</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">2.09</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item suspended">
                              <span className="casino-box-odd">0</span>
                            </div>
                            <div className="casino-book book-black">0</div>
                          </div>
                        </div>
                      </div>
                      <div className="casino-remark mt-3">
                        <div className="remark-icon">
                          <img src="https://wver.sprintstaticdata.com/v50/static/front/img/icons/remark.png" />
                        </div>
                        <marquee></marquee>
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

export default TeenPattiDay1;
