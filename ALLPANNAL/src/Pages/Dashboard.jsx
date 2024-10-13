import { Grip } from "lucide-react";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function Dashboard() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 230,
        type: "area",
        toolbar: {
          show: false, // Hide the toolbar
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      theme: {
        mode: "light", // 'dark' for dark mode
        palette: "palette1", // Up to palette10
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
        fontFamily: '"Plus Jakarta Sans", sans-serif', // Set the font family here
      },
    },
  });
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Dashboard</h5>
            </div>
          </div>
          {/* 4 widgets section */}
          <div className="row mb-4">
            {/* widget box */}
            <div className="col-md-3 col-6 mb-md-0 mb-4">
              <div className="card border-0 bg-info-subtle shadow-none">
                <div className="card-body p-3">
                  <div className="text-center">
                    <img
                      src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-connect.svg"
                      width={50}
                      height={50}
                      className="mb-3"
                      alt="modernize-img"
                    />
                    <p className="fw-semibold fs-3 text-info mb-1">Reports</p>
                    <h5 className="fw-semibold text-info mb-0">59</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* widget box */}
            <div className="col-md-3 col-6 mb-md-0 mb-4">
              <div className="card border-0 zoom-in bg-danger-subtle shadow-none">
                <div className="card-body p-3">
                  <div className="text-center">
                    <img
                      src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-favorites.svg"
                      width={50}
                      height={50}
                      className="mb-3"
                      alt="modernize-img"
                    />
                    <p className="fw-semibold fs-3 text-danger mb-1">Events</p>
                    <h5 className="fw-semibold text-danger mb-0">696</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* widget box */}
            <div className="col-md-3 col-6 mb-md-0 mb-4">
              <div className="card border-0 zoom-in bg-success-subtle shadow-none">
                <div className="card-body p-3">
                  <div className="text-center">
                    <img
                      src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-speech-bubble.svg"
                      width={50}
                      height={50}
                      className="mb-3"
                      alt="modernize-img"
                    />
                    <p className="fw-semibold fs-3 text-success mb-1">
                      Payroll
                    </p>
                    <h5 className="fw-semibold text-success mb-0">$96k</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* widget box */}
            <div className="col-md-3 col-6 mb-md-0 mb-4">
              <div className="card border-0 zoom-in bg-warning-subtle shadow-none">
                <div className="card-body p-3">
                  <div className="text-center">
                    <img
                      src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-mailbox.svg"
                      width={50}
                      height={50}
                      className="mb-3"
                      alt="modernize-img"
                    />
                    <p className="fw-semibold fs-3 text-warning mb-1">
                      Projects
                    </p>
                    <h5 className="fw-semibold text-warning mb-0">356</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 mb-3 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h4 className="card-title fw-semibold">
                        Revenue Updates
                      </h4>
                      <p className="card-subtitle mb-0">Overview of Profit</p>
                    </div>
                    <select className="form-select w-auto">
                      <option value={1}>March 2024</option>
                      <option value={2}>April 2024</option>
                      <option value={3}>May 2024</option>
                      <option value={4}>June 2024</option>
                    </select>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div id="chart">
                        <ReactApexChart
                          options={chartData.options}
                          series={chartData.series}
                          type="area"
                          height={320}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hstack mb-4 pb-1">
                        <div className="p-8 bg-primary-subtle rounded-1 me-3 d-flex align-items-center justify-content-center">
                          <Grip size={18} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="mb-0 fs-7 fw-semibold">$63,489.50</h4>
                          <p className="fs-3 mb-0">Total Earnings</p>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-baseline mb-4">
                          <span className="round-8 text-bg-primary rounded-circle me-6" />
                          <div>
                            <p className="fs-3 mb-1">Earnings this month</p>
                            <h6 className="fs-5 fw-semibold mb-0">$48,820</h6>
                          </div>
                        </div>
                        <div className="d-flex align-items-baseline mb-4 pb-1">
                          <span className="round-8 text-bg-secondary rounded-circle me-6" />
                          <div>
                            <p className="fs-3 mb-1">Expense this month</p>
                            <h6 className="fs-5 fw-semibold mb-0">$26,498</h6>
                          </div>
                        </div>
                        <div>
                          <button className="btn btn-primary w-100">
                            View Full Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 d-flex align-items-stretch">
              <div className="card mb-3 w-100">
                <div className="card-body">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-3">
                    <div className="mb-3 mb-sm-0">
                      <h4 className="card-title fw-semibold">Top Performers</h4>
                      <p className="card-subtitle">Best Employees</p>
                    </div>
                    <div>
                      <select className="form-select">
                        <option value={1}>March 2024</option>
                        <option value={2}>April 2024</option>
                        <option value={3}>May 2024</option>
                        <option value={4}>June 2024</option>
                      </select>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-middle text-nowrap mb-0">
                      <thead>
                        <tr className="text-muted fw-semibold">
                          <th scope="col" className="ps-0">
                            Assigned
                          </th>
                          <th scope="col">Project</th>
                          <th scope="col">Priority</th>
                          <th scope="col">Budget</th>
                        </tr>
                      </thead>
                      <tbody className="border-top">
                        <tr>
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="fw-semibold mb-1">
                                  Sunil Joshi
                                </h6>
                                <p className="fs-2 mb-0 text-muted">
                                  Web Designer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 fs-3">Elite Admin</p>
                          </td>
                          <td>
                            <span className="badge fw-semibold py-1 w-85 bg-primary-subtle text-primary">
                              Low
                            </span>
                          </td>
                          <td>
                            <p className="fs-3 text-dark mb-0">$3.9K</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="fw-semibold mb-1">John Deo</h6>
                                <p className="fs-2 mb-0 text-muted">
                                  Web Developer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 fs-3">Flexy Admin</p>
                          </td>
                          <td>
                            <span className="badge fw-semibold py-1 w-85 bg-warning-subtle text-warning">
                              Medium
                            </span>
                          </td>
                          <td>
                            <p className="fs-3 text-dark mb-0">$24.5K</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="fw-semibold mb-1">
                                  Nirav Joshi
                                </h6>
                                <p className="fs-2 mb-0 text-muted">
                                  Web Manager
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 fs-3">Material Pro</p>
                          </td>
                          <td>
                            <span className="badge fw-semibold py-1 w-85 bg-info-subtle text-info">
                              High
                            </span>
                          </td>
                          <td>
                            <p className="fs-3 text-dark mb-0">$12.8K</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="fw-semibold mb-1">
                                  Yuvraj Sheth
                                </h6>
                                <p className="fs-2 mb-0 text-muted">
                                  Project Manager
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 fs-3">Xtreme Admin</p>
                          </td>
                          <td>
                            <span className="badge fw-semibold py-1 w-85 bg-success-subtle text-success">
                              Low
                            </span>
                          </td>
                          <td>
                            <p className="fs-3 text-dark mb-0">$4.8K</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-0 ps-0">
                            <div className="d-flex align-items-center">
                              <div>
                                <h6 className="fw-semibold mb-1">
                                  Micheal Doe
                                </h6>
                                <p className="fs-2 mb-0 text-muted">
                                  Content Writer
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="border-0">
                            <p className="mb-0 fs-3">Helping Hands WP Theme</p>
                          </td>
                          <td className="border-0">
                            <span className="badge fw-semibold py-1 w-85 bg-danger-subtle text-danger">
                              High
                            </span>
                          </td>
                          <td className="border-0">
                            <p className="fs-3 text-dark mb-0">$9.3K</p>
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
    </>
  );
}

export default Dashboard;
