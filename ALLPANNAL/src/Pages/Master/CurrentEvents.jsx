import { Link } from "react-router-dom";

function CurrentEvents() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Currently Running Events</h5>
            </div>
          </div>

          {/* table */}
          <div className="card">
            <div className="card-body p-3">
              <div className="table-responsive">
                <table className="table align-middle text-nowrap mb-0">
                  <thead>
                    <tr className="text-muted fw-semibold">
                      <th scope="col" width="80" className="ps-0">
                        Sr. No.
                      </th>
                      <th scope="col">Event Type</th>
                      <th scope="col">Event Name</th>
                      <th scope="col" width="100">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-top">
                    <tr>
                      <td>1.</td>
                      <td>
                        <span className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary">
                          Cricket
                        </span>
                      </td>
                      <td>Band-e Amir Stars v Shaheen Hunters</td>
                      <td>
                        <Link to="#" className="btn btn-primary btn-sm">
                          View Live
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>
                        <span className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary">
                          Cricket
                        </span>
                      </td>
                      <td>India v Ireland</td>
                      <td>
                        <Link to="#" className="btn btn-primary btn-sm">
                          View Live
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>
                        <span className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary">
                          Soccer
                        </span>
                      </td>
                      <td>Albirex Niigata v Nagasaki</td>
                      <td>
                        <Link to="#" className="btn btn-primary btn-sm">
                          View Live
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>
                        <span className="badge fw-semibold fs-2 py-1 w-85 bg-primary-subtle text-primary">
                          Soccer
                        </span>
                      </td>
                      <td>Kashiwa v Nagoya</td>
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

export default CurrentEvents;
