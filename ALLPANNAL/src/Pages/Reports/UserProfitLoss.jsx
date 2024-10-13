import { Link } from "react-router-dom";

function UserProfitLoss() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">User Profit Loss Statement</h5>
            </div>
          </div>

          {/* table */}
          <div className="card">
            <div className="card-body p-3">
              <div className="bg-light border mb-2 p-2 rounded">
                <div className="row mx-0">
                  <div className="col-md-2 col-6 px-2">
                    <div className="form-group mb-md-1 mb-3">
                      <label htmlFor="A_type" className="form-label mb-1">
                        Select User
                      </label>
                      <select className="form-select bg-white" id="A_type">
                        <option selected>All</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 col-6 px-2">
                    <div className="form-group mb-md-1 mb-3">
                      <label htmlFor="A_type" className="form-label mb-1">
                        From
                      </label>
                      <input type="date" className="form-control bg-white" />
                    </div>
                  </div>
                  <div className="col-md-2 col-6 px-2">
                    <div className="form-group mb-md-1 mb-1">
                      <label htmlFor="A_type" className="form-label mb-1">
                        To
                      </label>
                      <input type="date" className="form-control bg-white" />
                    </div>
                  </div>
                  <div className="col-md-2 col-6 px-2">
                    <label htmlFor="" className="d-block mb-1">
                      &nbsp;
                    </label>
                    <button className="btn btn-primary">Load</button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-middle table-striped text-nowrap mb-0">
                  <thead>
                    <tr className="text-muted fw-semibold">
                      <th scope="col">Event Type</th>
                      <th scope="col">Market Name</th>
                      <th scope="col" className="text-end">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-top">
                    <tr className="text-muted fw-semibold">
                      <td scope="col">Casino</td>
                      <td scope="col">CRICKET5</td>
                      <td scope="col" className="text-end">
                        <span className="text-danger">-3200.09</span>
                      </td>
                    </tr>
                    <tr className="text-muted fw-semibold">
                      <td scope="col">Cricket</td>
                      <td scope="col">Match Odds</td>
                      <td scope="col" className="text-end">
                        <span className="text-success">2793.55 </span>
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

export default UserProfitLoss;
