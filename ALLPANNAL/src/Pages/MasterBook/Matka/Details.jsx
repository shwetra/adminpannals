import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function MatkaDetails() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex align-items-md-center justify-content-between p-md-4 p-3 flex-md-row flex-column">
              <h5 className="fw-bold mb-0">Gali</h5>
              <h6 className="mb-0 mt-md-0 mt-2 fw-bold">
                <small>Round ID: 240610080018</small>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              {/* AnkAndar 9.00 */}
              <div className="border rounded mb-3 bg-light p-3">
                <h6 className="fw-bold mb-3 text-center">AnkAndar 9.00</h6>
                <div className="card-seven">
                  <div className="btnBG">0</div>
                  <div className="btnBG">1</div>
                  <div className="btnBG">2</div>
                  <div className="btnBG">3</div>
                  <div className="btnBG">4</div>
                  <div className="btnBG">5</div>
                  <div className="btnBG">6</div>
                  <div className="btnBG">7</div>
                  <div className="btnBG">8</div>
                  <div className="btnBG">9</div>
                </div>
              </div>
              {/* AnkAndar 9.00 end */}
              {/* Jodi 90.00 */}
              <div className="border rounded mb-3 bg-light p-3">
                <h6 className="fw-bold mb-3 text-center">Jodi 90.00</h6>
                <div className="card-seven">
                  <div className="btnBG">0</div>
                  <div className="btnBG">1</div>
                  <div className="btnBG">2</div>
                  <div className="btnBG">3</div>
                  <div className="btnBG">4</div>
                  <div className="btnBG">5</div>
                  <div className="btnBG">6</div>
                  <div className="btnBG">7</div>
                  <div className="btnBG">8</div>
                  <div className="btnBG">9</div>
                  <div className="btnBG">10</div>
                  <div className="btnBG">11</div>
                  <div className="btnBG">12</div>
                  <div className="btnBG">13</div>
                  <div className="btnBG">14</div>
                  <div className="btnBG">15</div>
                  <div className="btnBG">16</div>
                  <div className="btnBG">17</div>
                  <div className="btnBG">18</div>
                  <div className="btnBG">19</div>
                  <div className="btnBG">20</div>
                  <div className="btnBG">21</div>
                  <div className="btnBG">22</div>
                  <div className="btnBG">23</div>
                  <div className="btnBG">24</div>
                  <div className="btnBG">25</div>
                </div>
              </div>
              {/* Jodi 90.00 end */}
              {/* AnkAndar 9.00 */}
              <div className="border rounded mb-3 bg-light p-3">
                <h6 className="fw-bold mb-3 text-center">AnkAndar 9.00</h6>
                <div className="card-seven">
                  <div className="btnBG">0</div>
                  <div className="btnBG">1</div>
                  <div className="btnBG">2</div>
                  <div className="btnBG">3</div>
                  <div className="btnBG">4</div>
                  <div className="btnBG">5</div>
                  <div className="btnBG">6</div>
                  <div className="btnBG">7</div>
                  <div className="btnBG">8</div>
                  <div className="btnBG">9</div>
                </div>
              </div>
              {/* AnkAndar 9.00 end */}

              {/* last result */}
              <div className="card mt-1 mb-md-5 mb-3 overflow-hidden">
                <div className="px-3 py-2 bg-info-subtle border-bottom">
                  <h4 className="fs-3 fw-bold mb-0">Last Result</h4>
                </div>
                <div className="card-body p-3">
                  <div
                    className="d-flex justify-content-end gap-1 flex-wrap"
                    id="last-result"
                  >
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#depositModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#depositModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#depositModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#depositModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#depositModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#depositModal"
                    >
                      R
                    </span>
                    <span
                      className="last-result"
                      data-bs-toggle="modal"
                      data-bs-target="#depositModal"
                    >
                      R
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ps-md-0">
              <div className="card overflow-hidden">
                <div className="px-3 py-2 bg-info-subtle border-bottom">
                  <h4 className="fs-3 fw-bold mb-0">My Downline Bets</h4>
                </div>
                <div className="card-body pt-2 pb-3 px-0">
                  <div className="table-responsive">
                    <table className="table align-middle text-nowrap mb-0">
                      <thead>
                        <tr className="text-muted fw-semibold">
                          <th scope="col">Round ID</th>
                          <th scope="col">User Name</th>
                          <th scope="col">Nation</th>
                          <th scope="col">Rate</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="border-top">
                        <tr className="text-muted fw-semibold">
                          <td>Round ID</td>
                          <td>User Name</td>
                          <td>Nation</td>
                          <td>Rate</td>
                          <td>Amount</td>
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

      {/* lasst result modal */}
      <div
        id="depositModal"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="depositModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Result
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h6 className="text-end mb-5">
                <strong>Date:</strong> Sun, Jun 9, 2024
              </h6>
              <h5 className="fw-bold text-center">
                <span style={{ color: "#04d604" }}>Result:</span> 51
              </h5>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
}

export default MatkaDetails;
