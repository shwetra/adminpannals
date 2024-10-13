import React, { useState } from "react";
import { Link } from "react-router-dom";
function MarketAnalysis() {
  return (
    <>
      <div className="main-content">
        <div className="page-content market-analysis">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">
                  Market Analysis
                  <Link
                    href="#"
                    title="Refresh Data"
                    className="text-dark ps-2"
                  >
                    <i className="bx bx-refresh fs-4" />
                  </Link>
                </h4>
                <div className="page-title-right">
                  <input
                    type="text"
                    name="searchMarktetText"
                    defaultValue=""
                    placeholder="Search Event"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="market-analysis-container">
            <div className="market-analysis-container">
              <div className="market-analysis-title">
                <div>
                  <Link
                    to="/admin/game/details/SeK7puKGhm+IDlF%2FzygDVg==/tW7782aZYuP18LC2yzayew=="
                    className="ma-link"
                  >
                    Kabul Zalmi v Band-e Amir Stars
                  </Link>
                </div>
                <div>14/06/2024 15:00:00</div>
              </div>
              <div className="market-analysis-content">
                <div className="row row5">
                  <div className="col-lg-4">
                    <div
                      data-simplebar="init"
                      className="market-analysis-content-detail"
                    >
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
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th colSpan={2}>Normal</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>12 over run BAS</td>
                                      <td className="text-end">0.00</td>
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
    </>
  );
}

export default MarketAnalysis;
