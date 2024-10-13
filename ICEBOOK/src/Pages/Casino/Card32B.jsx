import React, { useState } from "react";
import { Link } from "react-router-dom";
function Card32B() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container cards32b">
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
                        <div className="casino-box-row mb-0">
                          <div className="casino-nation-name no-border casino-bl-box-title">
                            <div className="playerb" />
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
                            <b>Player 8</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#demo-winner-0"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-winner-0"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">12.2</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">13.7</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Player 9</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#demo-winner-1"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-winner-1"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">5.95</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">6.45</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Player 10</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#demo-winner-2"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-winner-2"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">3.2</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">3.45</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Player 11</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#demo-winner-3"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-winner-3"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">2.08</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">2.18</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="teen1daycenter" />
                      <div className="teen1dayright">
                        <div className="casino-box-row mb-0">
                          <div className="casino-nation-name no-border casino-bl-box-title">
                            <div className="playerb" />
                          </div>
                          <div className="casino-bl-box casino-bl-box-title">
                            <div className="casino-bl-box-item">
                              <b>Odd</b>
                            </div>
                            <div className="casino-bl-box-item">
                              <b>Even</b>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Player 8</b>
                            <div className="float-right">
                              <i
                                data-toggle="collapse"
                                data-target="#demo-odd-evan-1"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-odd-evan-1"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Player 9</b>
                            <div className="float-right">
                              <i
                                data-toggle="collapse"
                                data-target="#demo-odd-evan-2"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-odd-evan-2"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Player 10</b>
                            <div className="float-right">
                              <i
                                data-toggle="collapse"
                                data-target="#demo-odd-evan-3"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-odd-evan-3"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Player 11</b>
                            <div className="float-right">
                              <i
                                data-toggle="collapse"
                                data-target="#demo-odd-evan-4"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-odd-evan-4"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                              <span className="casino-book book-black">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="teen1daycasino-container mt-4 d-none-small">
                      <div className="teen1dayleft">
                        <div className="casino-box-row mb-0">
                          <div className="casino-nation-name no-border casino-bl-box-title">
                            <div className="playerb" />
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
                            <b>Any 3 Card Black</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#demo-fancy1-0"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-fancy1-0"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">3.25</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">3.45</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Any 3 Card Red</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#demo-fancy1-1"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-fancy1-1"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">3.25</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">3.45</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>Two Black Two Red</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#demo-fancy1-2"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-fancy1-2"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">2.44</span>
                            </div>
                            <div className="lay casino-bl-box-item">
                              <span className="casino-box-odd">2.54</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="teen1daycenter" />
                      <div className="teen1dayright right1">
                        <div className="casino-box-row mb-0">
                          <div className="casino-nation-name no-border casino-bl-box-title">
                            <div className="playerb" />
                          </div>
                          <div className="casino-bl-box casino-bl-box-title">
                            <div className="casino-bl-box-item">
                              <b>Back</b>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>8 &amp; 9 Total</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#demo-fancy-18"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-fancy-18"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                            </div>
                          </div>
                        </div>
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>10 &amp; 11 Total</b>
                            <div className="float-right">
                              <span className="me-2 casino-book book-black">
                                0
                              </span>
                              <i
                                data-toggle="collapse"
                                data-target="#demo-fancy-19"
                                className="fas fa-info-circle"
                              />
                              <div
                                id="demo-fancy-19"
                                className="collapse icon-range"
                              >
                                R:<span>100</span>-<span>1L</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-bl-box">
                            <div className="back casino-bl-box-item">
                              <span className="casino-box-odd">1.97</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4 d-none-small pr casino-cards-odds-title">
                      <b>9.5</b>
                      <div className="d-inline-block ml-1 float-right">
                        <i
                          data-toggle="collapse"
                          data-target="#demo-single"
                          className="fas fa-info-circle"
                        />
                        <div id="demo-single" className="collapse icon-range">
                          R:<span>100</span>-<span>25K</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-none-small cards32bextra mt-1">
                      <div className="casino-bl-box">
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">1</span>
                          <div className="casino-book book-black">0</div>
                        </div>
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">2</span>
                          <div className="casino-book book-black">0</div>
                        </div>
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">3</span>
                          <div className="casino-book book-black">0</div>
                        </div>
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">4</span>
                          <div className="casino-book book-black">0</div>
                        </div>
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">5</span>
                          <div className="casino-book book-black">0</div>
                        </div>
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">6</span>
                          <div className="casino-book book-black">0</div>
                        </div>
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">7</span>
                          <div className="casino-book book-black">0</div>
                        </div>
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">8</span>
                          <div className="casino-book book-black">0</div>
                        </div>
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">9</span>
                          <div className="casino-book book-black">0</div>
                        </div>
                        <div className="casino-bl-box-item back">
                          <span className="casino-box-odd">0</span>
                          <div className="casino-book book-black">0</div>
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

export default Card32B;
