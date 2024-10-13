import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

function TennisMatch() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex align-items-md-center justify-content-between p-md-4 p-3 flex-md-row flex-column">
              <h5 className="fw-bold mb-0">
                Turkiye v Thailand &gt; Match Odds
              </h5>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-end mb-3 flex-wrap">
            <div className="btn-group">
              <button
                className="btn py-2 btn-primary fw-bold dropdown-toggle"
                type="button"
                id="BetLock"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <small>Bet Lock</small>
              </button>
              <ul className="dropdown-menu" aria-labelledby="BetLock">
                <li>
                  <Link className="dropdown-item" to="#">
                    Deactive All
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#userwise"
                    to="#"
                  >
                    Userwise
                  </Link>
                </li>
              </ul>
            </div>
            <div className="btn-group">
              <button
                className="btn py-2 btn-primary fw-bold dropdown-toggle"
                type="button"
                id="FancyLock"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <small>Fancy Lock</small>
              </button>
              <ul className="dropdown-menu" aria-labelledby="FancyLock">
                <li>
                  <Link className="dropdown-item" to="#">
                    Deactive All
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#userwise"
                  >
                    Userwise
                  </Link>
                </li>
              </ul>
            </div>
            <div className="btn-group">
              <button
                className="btn py-2 btn-primary fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#cmb"
                type="button"
              >
                <small>Match Books</small>
              </button>
            </div>
            <div className="btn-group">
              <button
                className="btn py-2 btn-primary fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#cmb"
                type="button"
              >
                <small>Bookmarkers Books</small>
              </button>
            </div>
            <div className="btn-group">
              <button
                className="btn py-2 btn-primary fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#cmb"
                type="button"
              >
                <small>Fancy Books</small>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="card-content">
                <div className="table-responsive">
                  <table className="table coupon-table table table-bordered">
                    <thead>
                      <tr>
                        <th>Total Matched:</th>
                        <th className="box-w1 back2" />
                        <th className="box-w1 back1" />
                        <th className="back box-w1">Back</th>
                        <th className="lay box-w1">Lay</th>
                        <th className="box-w1 lay1" />
                        <th className="box-w1 lay2" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bet-info">
                        <td className="team-name nation">
                          <span>
                            <strong>Afghanistan</strong>
                          </span>
                          <p className="box-w4 mb-0">
                            <span className="book">0</span>
                            <span className="profit">0</span>
                          </p>
                        </td>
                        <td className="box-w1 back2">
                          <button className="bg-transparent p-0 bet-sec">
                            <span className="odd back2price">1.05</span>
                            <span className="back2size span1">10666657.54</span>
                          </button>
                        </td>
                        <td className="box-w1 back1">
                          <button className="bg-transparent p-0 bet-sec">
                            <span className="odd back1price">1.06</span>
                            <span className="back1size span1">5322395.61</span>
                          </button>
                        </td>
                        <td className="box-w1 back-color">
                          <button className="bg-transparent p-0 bet-secback">
                            <span className="odd backprice">1.07</span>
                            <span className="backsize span1">1500888.98</span>
                          </button>
                        </td>
                        <td className="box-w1 lay-color">
                          <button className="bg-transparent p-0 bet-seclay">
                            <span className="odd layprice">1.08</span>
                            <span className="laysize span1">44862.67</span>
                          </button>
                        </td>
                        <td className="box-w1 lay1">
                          <button className="bg-transparent p-0 bet-sec">
                            <span className="odd lay1price">1.09</span>
                            <span className="lay1size span1">389543.64</span>
                          </button>
                        </td>
                        <td className="box-w1 lay2">
                          <button className="bg-transparent p-0 bet-sec">
                            <span className="odd lay2price">1.1</span>
                            <span className="lay2size span1">110683.96</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="bet-info">
                        <td className="team-name nation">
                          <span>
                            <strong>Papua New Guinea</strong>
                          </span>
                          <p className="box-w4 mb-0">
                            <span className="book">0</span>
                            <span className="profit">0</span>
                          </p>
                        </td>
                        <td className="box-w1 back2">
                          <button className="bg-transparent p-0 bet-sec">
                            <span className="odd back2price">12</span>
                            <span className="back2size span1">32602.57</span>
                          </button>
                        </td>
                        <td className="box-w1 back1">
                          <button className="bg-transparent p-0 bet-sec">
                            <span className="odd back1price">12.5</span>
                            <span className="back1size span1">2669.73</span>
                          </button>
                        </td>
                        <td className="box-w1 back-color">
                          <button className="bg-transparent p-0 bet-secback">
                            <span className="odd backprice">13.5</span>
                            <span className="backsize span1">3589.09</span>
                          </button>
                        </td>
                        <td className="box-w1 lay-color">
                          <button className="bg-transparent p-0 bet-seclay">
                            <span className="odd layprice">15.5</span>
                            <span className="laysize span1">103610.05</span>
                          </button>
                        </td>
                        <td className="box-w1 lay1">
                          <button className="bg-transparent p-0 bet-sec">
                            <span className="odd lay1price">18</span>
                            <span className="lay1size span1">313429.73</span>
                          </button>
                        </td>
                        <td className="box-w1 lay2">
                          <button className="bg-transparent p-0 bet-sec">
                            <span className="odd lay2price">21</span>
                            <span className="lay2size span1">533402.03</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="fancy-marker-title">
                    <div className="px-3 py-2 bg-warning-subtle border-bottom">
                      <h4 className="fs-3 fw-bold mb-0">Bookmaker</h4>
                    </div>
                  </div>
                  <table className="table coupon-table table table-bordered">
                    <thead>
                      <tr>
                        <th className="box-w1 back2" />
                        <th className="box-w1 back1" />
                        <th className="back box-w1">Back</th>
                        <th className="lay box-w1">Lay</th>
                        <th className="box-w1 lay1" />
                        <th className="box-w1 lay2" />
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
                <div className="mb-2">
                  <div className="px-3 py-2 bg-warning-subtle border-bottom">
                    <h4 className="fs-3 fw-bold mb-0">Fancy Market</h4>
                  </div>
                </div>
                <div>
                  <div className="px-3 py-2 bg-warning-subtle border-bottom">
                    <h4 className="fs-3 fw-bold mb-0">Pre Fancy Market</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ps-md-0">
              <div className="card mb-2 overflow-hidden">
                <div className="px-3 py-2 bg-info-subtle border-bottom">
                  <h4 className="fs-3 fw-bold mb-0">Live Match</h4>
                </div>
                <div className="card-body p-3">{/* iframe goes here */}</div>
              </div>
              <div className="card overflow-hidden mb-2">
                <div className="px-3 py-2 bg-info-subtle border-bottom d-flex justify-content-between">
                  <h4 className="fs-3 fw-bold mb-0">Top 100 Matched Bet</h4>
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#cmb"
                    to="#"
                    className="text-primary text-decoration-none fw-bold small"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body pt-2 pb-3 px-0">
                  <div className="table-responsive">
                    <table className="table align-middle text-nowrap mb-0">
                      <thead>
                        <tr className="text-muted fw-semibold">
                          <th scope="col">User</th>
                          <th scope="col">Odds</th>
                          <th scope="col">Stake</th>
                          <th scope="col">Side</th>
                          <th scope="col">Team</th>
                          <th scope="col">Date</th>
                          <th scope="col">IP</th>
                        </tr>
                      </thead>
                      <tbody className="border-top">
                        <tr className="text-muted fw-semibold">
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card overflow-hidden mb-2">
                <div className="px-3 py-2 bg-info-subtle border-bottom d-flex justify-content-between">
                  <h4 className="fs-3 fw-bold mb-0">Top 100 Bookmaker Bets</h4>
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#cmb"
                    className="text-primary text-decoration-none fw-bold small"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body pt-2 pb-3 px-0">
                  <div className="table-responsive">
                    <table className="table align-middle text-nowrap mb-0">
                      <thead>
                        <tr className="text-muted fw-semibold">
                          <th scope="col">User</th>
                          <th scope="col">Odds</th>
                          <th scope="col">Stake</th>
                          <th scope="col">Side</th>
                          <th scope="col">Team</th>
                          <th scope="col">Date</th>
                          <th scope="col">IP</th>
                        </tr>
                      </thead>
                      <tbody className="border-top">
                        <tr className="text-muted fw-semibold">
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card overflow-hidden mb-2">
                <div className="px-3 py-2 bg-info-subtle border-bottom d-flex justify-content-between">
                  <h4 className="fs-3 fw-bold mb-0">Top 100 Session Bet</h4>
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#cmb"
                    className="text-primary text-decoration-none fw-bold small"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body pt-2 pb-3 px-0">
                  <div className="table-responsive">
                    <table className="table align-middle text-nowrap mb-0">
                      <thead>
                        <tr className="text-muted fw-semibold">
                          <th scope="col">User</th>
                          <th scope="col">Odds</th>
                          <th scope="col">Stake</th>
                          <th scope="col">Side</th>
                          <th scope="col">Team</th>
                          <th scope="col">Date</th>
                          <th scope="col">IP</th>
                        </tr>
                      </thead>
                      <tbody className="border-top">
                        <tr className="text-muted fw-semibold">
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card overflow-hidden mb-5">
                <div className="px-3 py-2 bg-info-subtle border-bottom d-flex justify-content-between">
                  <h4 className="fs-3 fw-bold mb-0">My Downline PL</h4>
                </div>
                <div className="card-body d-flex gap-2 justify-content-end p-3">
                  <button className="btn bg-danger-subtle border text-danger">
                    Back
                  </button>
                  <button className="btn bg-primary-subtle border text-primary">
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deactive Userwise Modal */}
      <div
        id="userwise"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="userwise"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Deactive User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="moda-body p-3">
              <div className="table-responsive data-table">
                <div>
                  <table className="table table-bordered table-striped">
                    <tbody>
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Checked</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Agent</td>
                        <td>
                          <span>
                            <input
                              id="Grd_Data_chk_Status_0"
                              type="checkbox"
                              className="form-check-input p-2"
                              name="Grd_Data$ctl02$chk_Status"
                              defaultChecked="checked"
                            />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Kanhadl</td>
                        <td>
                          <span>
                            <input
                              id="Grd_Data_chk_Status_1"
                              type="checkbox"
                              className="form-check-input p-2"
                              name="Grd_Data$ctl03$chk_Status"
                              defaultChecked="checked"
                            />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>dhurvadl</td>
                        <td>
                          <span>
                            <input
                              id="Grd_Data_chk_Status_2"
                              type="checkbox"
                              className="form-check-input p-2"
                              name="Grd_Data$ctl04$chk_Status"
                              defaultChecked="checked"
                            />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>DLDEMO</td>
                        <td>
                          <span>
                            <input
                              id="Grd_Data_chk_Status_3"
                              type="checkbox"
                              className="form-check-input p-2"
                              name="Grd_Data$ctl05$chk_Status"
                              defaultChecked="checked"
                            />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>pakhidl</td>
                        <td>
                          <span>
                            <input
                              id="Grd_Data_chk_Status_4"
                              type="checkbox"
                              className="form-check-input p-2"
                              name="Grd_Data$ctl06$chk_Status"
                              defaultChecked="checked"
                            />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>sunnydl</td>
                        <td>
                          <span>
                            <input
                              id="Grd_Data_chk_Status_5"
                              type="checkbox"
                              className="form-check-input p-2"
                              name="Grd_Data$ctl07$chk_Status"
                              defaultChecked="checked"
                            />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Mahadevdl12</td>
                        <td>
                          <span>
                            <input
                              id="Grd_Data_chk_Status_6"
                              type="checkbox"
                              className="form-check-input p-2"
                              name="Grd_Data$ctl08$chk_Status"
                              defaultChecked="checked"
                            />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>

      {/* Current Match Bets Modal */}
      <div
        id="cmb"
        className="modal fade"
        tabIndex={-1}
        aria-labelledby="cmb"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header border-bottom py-2 d-flex align-items-center">
              <h5 className="modal-title" id="myModalLabel">
                Current Match Bets
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="moda-body p-3">
              <div className="bg-light border mb-2 p-2 rounded">
                <div className="text-end pe-2">
                  <Link
                    to="#"
                    className="text-primary text-decoration-none fw-bold"
                  >
                    Refresh
                  </Link>
                </div>
                <div className="row mx-0">
                  <div className="col-md-2 px-2">
                    <div className="form-group mb-md-1 mb-3">
                      <label htmlFor="A_type" className="form-label mb-1">
                        Select User
                      </label>
                      <select className="form-select bg-white" id="A_type">
                        <option selected>Select User</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 px-2">
                    <div className="form-group mb-md-1 mb-3">
                      <label htmlFor="A_type" className="form-label mb-1">
                        Amount
                      </label>
                      <input type="number" className="form-control bg-white" />
                    </div>
                  </div>
                  <div className="col-md-2 px-2">
                    <div className="form-group mb-md-1 mb-3">
                      <label htmlFor="A_type" className="form-label mb-1">
                        IP Address
                      </label>
                      <input type="text" className="form-control bg-white" />
                    </div>
                  </div>
                  <div className="col-md-2 px-2">
                    <div className="form-group mb-md-1 mb-3">
                      <label htmlFor="A_type" className="form-label mb-1">
                        Select Type
                      </label>
                      <select className="form-select bg-white" id="A_type">
                        <option selected>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 px-2">
                    <label htmlFor="" className="d-block mb-1">
                      &nbsp;
                    </label>
                    <button className="btn btn-primary">Filter</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
}

export default TennisMatch;
