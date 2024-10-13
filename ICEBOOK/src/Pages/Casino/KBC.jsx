import React, { useState } from "react";
import { Link } from "react-router-dom";
function KBC() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container kbc">
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
                    <div className="row row5 kbc-btns">
                      <div className="col-12 col-md-4">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>[Q1] Red-Black</b>
                          </div>
                          <div
                            data-toggle="buttons"
                            className="btn-group btn-group-toggle"
                          >
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option1"
                                autoComplete="off"
                                defaultChecked="checked"
                              />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/heart.png" />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/diamond.png" />
                            </label>
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                              />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/spade.png" />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/club.png" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>[Q2] Odd-Even</b>
                          </div>
                          <div
                            data-toggle="buttons"
                            className="btn-group btn-group-toggle"
                          >
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option1"
                                autoComplete="off"
                                defaultChecked="checked"
                              />
                              ODD
                            </label>
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                              />
                              EVEN
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>[Q3] 7 Up-7 Down</b>
                          </div>
                          <div
                            data-toggle="buttons"
                            className="btn-group btn-group-toggle"
                          >
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option1"
                                autoComplete="off"
                                defaultChecked="checked"
                              />
                              UP
                            </label>
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                              />
                              DOWN
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row5 kbc-btns kbcothers mt-2">
                      <div className="col-12 col-md-6">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>[Q4] 3 Card Judgement</b>
                          </div>
                          <div
                            data-toggle="buttons"
                            className="btn-group btn-group-toggle"
                          >
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option1"
                                autoComplete="off"
                                defaultChecked="checked"
                              />
                              1 2 3
                            </label>
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                              />
                              4 5 6
                            </label>
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                              />
                              8 9 10
                            </label>
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                              />
                              J Q K
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="casino-box-row">
                          <div className="casino-nation-name">
                            <b>[Q5] Suits</b>
                          </div>
                          <div
                            data-toggle="buttons"
                            className="btn-group btn-group-toggle"
                          >
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option1"
                                autoComplete="off"
                                defaultChecked="checked"
                              />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/spade.png" />
                            </label>
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                              />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/heart.png" />
                            </label>
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                              />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/club.png" />
                            </label>
                            <label className="btn">
                              <input
                                type="radio"
                                name="options"
                                id="option2"
                                autoComplete="off"
                              />
                              <img src="https://wver.sprintstaticdata.com/v50/static/front/img/cards/diamond.png" />
                            </label>
                          </div>
                        </div>
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

export default KBC;
