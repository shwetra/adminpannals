import React, { useState } from "react";
import { Link } from "react-router-dom";
function Sicbo() {
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
                    <div className="">
                      <div className="sicbo-top">
                        <div className="sicbo-top-box sicbo-title-box">
                          1:1 Lose if Any Triple
                        </div>
                        <div className="sicbo-top-box sicbo-title-box">
                          30:1
                        </div>
                        <div className="sicbo-top-box sicbo-title-box">
                          1:1 Lose if Any Triple
                        </div>
                      </div>
                      <div className="sicbo-middle">
                        <div className="sicbo-middle-small sicbo-square-box">
                          <div>Small</div>
                          <div className="sicbo-box-value">4-10</div>
                        </div>
                        <div className="sicbo-middle-midle">
                          <div className="sicbo-middle-top-row">
                            <div className="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd">
                              <div>ODD</div>
                              <div className="sicbo-box-value">1:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>4</div>
                              <div className="sicbo-box-value">50:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>5</div>
                              <div className="sicbo-box-value">20:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>6</div>
                              <div className="sicbo-box-value">15:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>7</div>
                              <div className="sicbo-box-value">12:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>8</div>
                              <div className="sicbo-box-value">8:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>9</div>
                              <div className="sicbo-box-value">6:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>10</div>
                              <div className="sicbo-box-value">6:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd">
                              <div>Any Triple</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>11</div>
                              <div className="sicbo-box-value">6:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>12</div>
                              <div className="sicbo-box-value">6:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>13</div>
                              <div className="sicbo-box-value">8:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>14</div>
                              <div className="sicbo-box-value">12:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>15</div>
                              <div className="sicbo-box-value">15:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>16</div>
                              <div className="sicbo-box-value">20:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box">
                              <div>17</div>
                              <div className="sicbo-box-value">50:1</div>
                            </div>
                            <div className="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd">
                              <div>Even</div>
                              <div className="sicbo-box-value">1:1</div>
                            </div>
                          </div>
                          <div className="sicbo-middle-middle-row">
                            <div className="sicbo-cube-box-container">
                              <div className="sicbo-top-box sicbo-title-box">
                                <span>1:1 On Single</span>
                                <span>2:1 On Double</span>
                                <span>3:1 On Triple</span>
                              </div>
                              <div className="sicbo-cube-box-group">
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-single">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-single">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-single">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-single">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-single">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-single">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="sicbo-cube-box-container">
                              <div className="sicbo-top-box sicbo-title-box">
                                8:1 Each Double
                              </div>
                              <div className="sicbo-cube-box-group">
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-double">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-double">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-double">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-double">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-double">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-double">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="sicbo-cube-box-container">
                              <div className="sicbo-top-box sicbo-title-box">
                                150:1 Each Triple
                              </div>
                              <div className="sicbo-cube-box-group">
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-tripple">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-tripple">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-tripple">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-tripple">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-tripple">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  />
                                </div>
                                <div className="sicbo-cube-box sicbo-square-box sicbo-cube-tripple">
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  />
                                  <img
                                    src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sicbo-middle-big sicbo-square-box">
                          <div>Big</div>
                          <div className="sicbo-box-value">11-17</div>
                        </div>
                      </div>
                      <div className="sicbo-bottom">
                        <div className="sicbo-cube-box-container">
                          <div className="sicbo-top-box sicbo-title-box">
                            5:1 Two Dice
                          </div>
                          <div className="sicbo-cube-box-group">
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                alt="Dice 1"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                alt="Dice 2"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                alt="Dice 1"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                alt="Dice 3"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                alt="Dice 1"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                alt="Dice 4"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                alt="Dice 1"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                alt="Dice 5"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice1.png"
                                alt="Dice 1"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                alt="Dice 6"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                alt="Dice 2"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                alt="Dice 3"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                alt="Dice 2"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                alt="Dice 4"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                alt="Dice 2"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                alt="Dice 5"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice2.png"
                                alt="Dice 2"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                alt="Dice 6"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                alt="Dice 3"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                alt="Dice 4"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                alt="Dice 3"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                alt="Dice 5"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice3.png"
                                alt="Dice 3"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                alt="Dice 6"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                alt="Dice 4"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                alt="Dice 5"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice4.png"
                                alt="Dice 4"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                alt="Dice 6"
                              />
                            </div>
                            <div className="sicbo-cube-box sicbo-square-box sicbo-cube-combination">
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice5.png"
                                alt="Dice 5"
                              />
                              <img
                                src="https://wver.sprintstaticdata.com/v50/static/front/img/dice6.png"
                                alt="Dice 6"
                              />
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

export default Sicbo;
