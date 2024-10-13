import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function Cricket5() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex align-items-md-center justify-content-between p-md-4 p-3 flex-md-row flex-column">
              <h5 className="fw-bold mb-0">Australia Vs India 5Five Cricket</h5>
              <h6 className="mb-0 mt-md-0 mt-2 fw-bold">
                <small>Round ID: 240610080018</small>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
            <iframe
                src="https://indiaexch7.com/CasinoPlayerToken/Stream?t=lx2z2wj0"
                width={"100%"}
                height={"330px"}
                className="border rounded overflow-hidden iframe-data"
                frameBorder="0"
              ></iframe>
              <div className="matches mb-5 mt-2">
                <div className="market-2">
                  <div className="bet-table">
                    <div
                      data-toggle="collapse"
                      data-target="#market0"
                      aria-expanded="true"
                      className="bet-table-header"
                    >
                      <div className="nation-name">
                        <span title="Bookmaker">Bookmaker</span>
                      </div>
                      <div className="d-flex gap-1">
                        <div className="back back-title bl-title">Back</div>
                        <div className="lay lay-title bl-title">Lay</div>
                      </div>
                    </div>
                    <div
                      id="market0"
                      data-title="OPEN"
                      className="bet-table-body collapse show"
                    >
                      <div className="bet-table-row">
                        <div className="nation-name">
                          <p className="mb-0">Australia</p>
                        </div>
                        <div className="d-flex gap-1">
                          <div className="bl-box back back">
                            <span className="d-block odds">0</span>
                            <span className="d-block">0</span>
                          </div>
                          <div className="bl-box lay lay">
                            <span className="d-block odds">0</span>
                            <span className="d-block">0</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bet-table-row suspendedtext"
                        data-title="SUSPENDED"
                      >
                        <div className="nation-name">
                          <p className="mb-0">India</p>
                        </div>
                        <div className="d-flex gap-1">
                          <div className="bl-box back back">
                            <span className="d-block odds">0</span>
                            <span className="d-block">0</span>
                          </div>
                          <div className="bl-box lay lay">
                            <span className="d-block odds">0</span>
                            <span className="d-block">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="market-2">
                  <div className="bet-table">
                    <div
                      data-toggle="collapse"
                      data-target="#market0"
                      aria-expanded="true"
                      className="bet-table-header"
                    >
                      <div className="nation-name">
                        <span title="Fancy">Fancy</span>
                      </div>
                      <div className="d-flex gap-1">
                        <div className="back back-title bl-title">No</div>
                        <div className="lay lay-title bl-title">Yes</div>
                      </div>
                    </div>
                    <div
                      id="market0"
                      data-title="OPEN"
                      className="bet-table-body collapse show"
                    >
                      <div className="bet-table-row">
                        <div className="nation-name">
                          <p className="mb-0">Australia</p>
                        </div>
                        <div className="d-flex gap-1">
                          <div className="bl-box back back">
                            <span className="d-block odds">0</span>
                            <span className="d-block">0</span>
                          </div>
                          <div className="bl-box lay lay">
                            <span className="d-block odds">0</span>
                            <span className="d-block">0</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bet-table-row suspendedtext"
                        data-title="SUSPENDED"
                      >
                        <div className="nation-name">
                          <p className="mb-0">India</p>
                        </div>
                        <div className="d-flex gap-1">
                          <div className="bl-box back back">
                            <span className="d-block odds">0</span>
                            <span className="d-block">0</span>
                          </div>
                          <div className="bl-box lay lay">
                            <span className="d-block odds">0</span>
                            <span className="d-block">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
                        <tr>
                          <td colSpan={5}>ODDS</td>
                        </tr>
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
                    <table className="table align-middle text-nowrap mb-0">
                      <thead>
                        <tr>
                          <td colSpan={5}>Fancy</td>
                        </tr>
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
    </>
  );
}

export default Cricket5;
