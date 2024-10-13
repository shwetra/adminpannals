import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import CasinoBanners from "../Components/CasinoBanners";
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
      <div className="main-content">
        <div className="page-content">
          <div className="row row5">
            <div className="col-6 col-md-3">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <p className="text-muted fw-medium">Balance</p>
                  <h4>11,11,861.06</h4>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <p className="text-muted fw-medium">Exposure</p>
                  <h4>-845.00</h4>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <p className="text-muted fw-medium">Credit pts</p>
                  <h4>2,50,50,000</h4>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <p className="text-muted fw-medium">All pts</p>
                  <h4>24,98,507</h4>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <p className="text-muted fw-medium">Settlement pts</p>
                  <h4>-2,25,51,492</h4>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <p className="text-muted fw-medium">Upper pts</p>
                  <h4>-8,00,000</h4>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card mini-stats-wid">
                <div className="card-body">
                  <p className="text-muted fw-medium">Down pts</p>
                  <h4>-2,16,38,128</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row row5">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div id="chart">
                    <ReactApexChart
                      options={chartData.options}
                      series={chartData.series}
                      type="area"
                      height={320}
                    />
                    <div className="row mt-3 row5 align-self-center text-center">
                      <div className="col-6 col-sm">
                        <p className="mb-2 font-size-11">
                          <i className="bx bxs-circle align-middle fs-small me-2 text-primary" />
                          Credit pts
                        </p>
                        <h5>2,50,50,000</h5>
                      </div>
                      <div className="col-6 col-sm">
                        <p className="mb-2 font-size-11">
                          <i className="bx bxs-circle align-middle fs-small me-2 text-warning" />
                          All pts
                        </p>
                        <h5>24,98,507</h5>
                      </div>
                      <div className="col-4 col-sm">
                        <p className="mb-2 font-size-11">
                          <i className="bx bxs-circle align-middle fs-small me-2 text-info" />
                          Settlement pts
                        </p>
                        <h5>-2,25,51,492</h5>
                      </div>
                      <div className="col-4 col-sm">
                        <p className="mb-2 font-size-11">
                          <i className="bx bxs-circle align-middle fs-small me-2 text-success" />
                          Upper pts
                        </p>
                        <h5>-8,00,000</h5>
                      </div>
                      <div className="col-4 col-sm">
                        <p className="mb-2 font-size-11">
                          <i className="bx bxs-circle align-middle fs-small me-2 text-dark" />
                          Down pts
                        </p>
                        <h5>-2,16,38,128</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4 className="sport-list-title ps-2">Our Live Casino</h4>
              <CasinoBanners />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
