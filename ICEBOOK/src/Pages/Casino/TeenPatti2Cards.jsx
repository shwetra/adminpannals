import React, { useState } from "react";
import { Link } from "react-router-dom";
function TeenPatti2Cards() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container teenpatti2cards">
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
                    <div className="d-none-small">
                      <div className="teen1daycasino-container">
                        <div className="teen1dayleft">
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>Player A</b>
                              <div className="float-right">
                                <span className="mr-2 book-black">0</span>
                              </div>
                            </div>
                            <div className="casino-bl-box">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">1.85</span>
                              </div>
                              <div className="lay casino-bl-box-item">
                                <span className="casino-box-odd">1.88</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>Mini Baccarat A</b>
                              <div className="float-right">
                                <span className="mr-2 book-black">0</span>
                              </div>
                            </div>
                            <div className="casino-bl-box casino-bl-boxfull">
                              <div className="back casino-bl-box-item">
                                <span className="casino-box-odd">1.05</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b className="pointer">Total A</b>
                              <div className="float-right">
                                <span className="mr-2 book-black">0</span>
                              </div>
                            </div>
                            <div className="casino-bl-box total-odds">
                              <div className="lay casino-bl-box-item suspended">
                                <span>0</span>
                                <span className="casino-box-odd">0</span>
                              </div>
                              <div className="back casino-bl-box-item suspended">
                                <span>0</span>
                                <span className="casino-box-odd">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="teen1daycenter" />
                        <div className="teen1dayright">
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>Player B</b>
                              <div className="float-right">
                                <span className="mr-2 book-black">0</span>
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
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b>Mini Baccarat B</b>
                              <div className="float-right">
                                <span className="mr-2 book-black">0</span>
                              </div>
                            </div>
                            <div className="casino-bl-box casino-bl-boxfull">
                              <div className="back casino-bl-box-item suspended">
                                <span className="casino-box-odd">0</span>
                              </div>
                            </div>
                          </div>
                          <div className="casino-box-row">
                            <div className="casino-nation-name">
                              <b className="pointer">Total B</b>
                              <div className="float-right">
                                <span className="mr-2 book-black">0</span>
                              </div>
                            </div>
                            <div className="casino-bl-box total-odds">
                              <div className="lay casino-bl-box-item">
                                <span>11</span>
                                <span className="casino-box-odd">14</span>
                              </div>
                              <div className="back casino-bl-box-item">
                                <span>18</span>
                                <span className="casino-box-odd">15</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="teenpatti2cardsextra mt-3">
                        <div className="casino-bl-box casino-bl-boxfull">
                          <div className="back casino-bl-box-item suspended">
                            <span className="casino-box-odd">Color Plus</span>
                          </div>
                        </div>
                        <div className="teenpatti2cardsextra-book">
                          <span className="book-black">0</span>
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
                          <div className="card m-b-10">
                            <div className="card-header">
                              <h6 className="card-title d-inline-block">
                                Rules
                              </h6>
                            </div>
                            <div className="card-body" style={{ padding: 10 }}>
                              <table className="table table-bordered rules-table">
                                <tbody>
                                  <tr className="text-center">
                                    <th colSpan={2}>Color Plus Rules</th>
                                  </tr>
                                  <tr>
                                    <td width="60%">Three card Sequence</td>
                                    <td>1 TO 3</td>
                                  </tr>
                                  <tr>
                                    <td width="60%">Four card color</td>
                                    <td>1 TO 9</td>
                                  </tr>
                                  <tr>
                                    <td width="60%">Four card Sequence</td>
                                    <td>1 TO 9</td>
                                  </tr>
                                  <tr>
                                    <td width="60%">Three of a kind</td>
                                    <td>1 TO 12</td>
                                  </tr>
                                  <tr>
                                    <td width="60%">
                                      Three card pure Sequence
                                    </td>
                                    <td>1 TO 15</td>
                                  </tr>
                                  <tr>
                                    <td width="60%">Four card pure Sequence</td>
                                    <td>1 TO 150</td>
                                  </tr>
                                  <tr>
                                    <td width="60%">Four of a kind</td>
                                    <td>1 TO 200</td>
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

export default TeenPatti2Cards;
