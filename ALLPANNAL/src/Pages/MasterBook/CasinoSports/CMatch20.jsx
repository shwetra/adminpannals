import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function CMatch20() {
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
                  <div className="bet-table p-2">
                    <div className="row custom-row">
                      <div className="teen20left col-md-6 custom-col">
                        <div className="score-box">
                          <div className="ball-icon">
                            <img src="https://indiaexch7.com/front/img/balls/ball2.png" />
                          </div>
                          <div className="blbox suspended">
                            <div className="back">
                              <span className="odds d-block">0</span>
                            </div>
                            <div className="lay">
                              <span className="odds d-block">0</span>
                            </div>
                          </div>
                          <div className="c20minmax">
                            <span className="d-none">0</span>
                          </div>
                          <div className="c20book book-black">0</div>
                        </div>
                      </div>
                      <div className="teen20right col-md-6 custom-col">
                        <div className="score-box">
                          <div className="ball-icon">
                            <img src="https://indiaexch7.com/front/img/balls/ball7.png" />
                          </div>
                          <div className="blbox suspended">
                            <div className="back">
                              <span className="odds d-block">0</span>
                            </div>
                            <div className="lay">
                              <span className="odds d-block">0</span>
                            </div>
                          </div>
                          <div className="c20minmax">
                            <span className="d-none">0</span>
                          </div>
                          <div className="c20book book-black">0</div>
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

export default CMatch20;
