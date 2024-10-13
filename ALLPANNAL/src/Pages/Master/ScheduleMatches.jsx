import { Link } from "react-router-dom";

function ScheduleMatches() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Schedule Matches</h5>
            </div>
          </div>

          {/* table */}
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex flex-md-row flex-column mb-3 align-items-start justify-content-between">
                <div class="btn-group mb-md-0 mb-2">
                  <Link to="#" class="btn px-3 btn-sm btn-success border-end">
                    PDF
                  </Link>
                  <Link to="#" class="btn px-3 btn-sm btn-success border-start">
                    Excel
                  </Link>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Search here"
                  />
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-middle text-nowrap mb-0">
                  <thead>
                    <tr className="text-muted fw-semibold">
                      <th scope="col">Event Type</th>
                      <th scope="col">Event Name</th>
                      <th scope="col" width="100">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-top">
                    <tr>
                      <td>
                        <span className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary">
                          Cricket
                        </span>
                      </td>
                      <td>
                        Band-e Amir Stars v Shaheen Hunters
                        <br />
                        <small>6/5/2024 3:00:00 PM</small>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-primary btn-sm">
                          View Live
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary">
                          Cricket
                        </span>
                      </td>
                      <td>
                        India v Ireland
                        <br />
                        <small>6/5/2024 3:00:00 PM</small>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-primary btn-sm">
                          View Live
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary">
                          Soccer
                        </span>
                      </td>
                      <td>
                        Papua New Guinea v Uganda
                        <br />
                        <small>6/5/2024 3:00:00 PM</small>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-primary btn-sm">
                          View Live
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary">
                          Soccer
                        </span>
                      </td>
                      <td>
                        Australia v Oman
                        <br />
                        <small>6/5/2024 3:00:00 PM</small>
                      </td>
                      <td>
                        <Link to="#" className="btn btn-primary btn-sm">
                          View Live
                        </Link>
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

export default ScheduleMatches;
