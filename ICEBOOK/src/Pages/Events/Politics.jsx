import React, { useState } from "react";
import { Link } from "react-router-dom";
function Politics() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="detail-page-container">
            <div className="center-main-container">
              <div className="center-content">
                <div className="game-header sportundefined">
                  <span className="game-header-name"> &gt; </span>
                  <div>
                    <span />
                  </div>
                </div>

                <div className="more-market text-right">
                  <button className="btn btn-back">More Market</button>
                </div>
                <div className="market-container" />
              </div>
              <div className="right-sidebar" data-simplebar="true">
                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: 0 }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        tabIndex={0}
                        role="region"
                        aria-label="scrollable content"
                        style={{ height: "auto", overflow: "hidden" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: 0 }}
                        >
                          <div id="my-game-bets" className="card m-b-10 my-bet">
                            <div className="card-header">
                              <h6 className="card-title float-left">My Bets</h6>
                              <Link
                                to="#"
                                className="btn btn-back float-right"
                              >
                                View More
                              </Link>
                            </div>
                            <div className="card-body">
                              <div className="tabs" id="__BVID__49">
                                <div className="">
                                  <ul
                                    role="tablist"
                                    className="nav nav-tabs small"
                                    id="__BVID__49__BV_tab_controls_"
                                  >
                                    <li
                                      role="presentation"
                                      className="nav-item"
                                    >
                                      <Link
                                        role="tab"
                                        aria-selected="true"
                                        aria-setsize={1}
                                        aria-posinset={1}
                                        to="#"
                                        target="_self"
                                        className="nav-link active"
                                        id="__BVID__50___BV_tab_button__"
                                        aria-controls="__BVID__50"
                                      >
                                        Matched Bets
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  className="tab-content"
                                  id="__BVID__49__BV_tab_container_"
                                >
                                  <div
                                    role="tabpanel"
                                    aria-hidden="false"
                                    className="tab-pane active"
                                    id="__BVID__50"
                                    aria-labelledby="__BVID__50___BV_tab_button__"
                                  >
                                    <div
                                      id="matched-bet"
                                      className="tab-pane active"
                                    >
                                      <div className="table-responsive">
                                        <table className="table coupon-table mb-0">
                                          <thead>
                                            <tr>
                                              <th style={{ minWidth: 90 }}>
                                                UserName
                                              </th>
                                              <th style={{ minWidth: 90 }}>
                                                Nation
                                              </th>
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
                                              <td
                                                colSpan={4}
                                                className="text-center"
                                              >
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
                  <div
                    className="simplebar-placeholder"
                    style={{ width: "auto", height: 194 }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-horizontal"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{ width: 0, display: "none" }}
                  />
                </div>
                <div
                  className="simplebar-track simplebar-vertical"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    style={{
                      height: 0,
                      display: "none",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Politics;
