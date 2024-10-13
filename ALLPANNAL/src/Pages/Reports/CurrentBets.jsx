import { Link } from "react-router-dom";

function CurrentBets() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Current Bets</h5>
            </div>
          </div>

          {/* table */}
          <div className="card">
            <div className="card-body p-3">
              <div className="bg-light border mb-2 p-2 rounded">
                <div className="row mx-0">
                  <div className="col-md-3 col-9 px-2">
                    <div className="form-group mb-md-1 mb-1">
                      <label htmlFor="A_type" className="form-label mb-1">
                        Select Event Type
                      </label>
                      <select className="form-select bg-white" id="A_type">
                        <option selected>Select Event Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 col-3 px-2">
                    <label htmlFor="" className="d-block mb-1">
                      &nbsp;
                    </label>
                    <button className="btn btn-primary">Load</button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-middle text-nowrap mb-0">
                  <thead>
                    <tr className="text-muted fw-semibold">
                      <th scope="col" className="ps-0">
                        Event Type
                      </th>
                      <th scope="col">Event Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">Runner Name</th>
                      <th scope="col">Bet Type</th>
                      <th scope="col">User Rate</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Place Date</th>
                    </tr>
                  </thead>
                  <tbody className="border-top"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentBets;
