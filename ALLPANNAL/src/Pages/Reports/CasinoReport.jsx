import { Link } from "react-router-dom";

function CasinoReport() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Casino Report</h5>
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
                        From
                      </label>
                      <input type="date" className="form-control bg-white" />
                    </div>
                  </div>
                  <div className="col-md-2 col-6 px-2">
                    <div className="form-group mb-md-1 mb-3">
                      <label htmlFor="A_type" className="form-label mb-1">
                        To
                      </label>
                      <input type="date" className="form-control bg-white" />
                    </div>
                  </div>
                  <div className="col-md-2 col-6 px-2">
                    <div className="form-group mb-md-1 mb-1">
                      <label htmlFor="A_type" className="form-label mb-1">
                        Game Type
                      </label>
                      <select className="form-select bg-white" id="A_type">
                        <option selected>Slot Game</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 col-6 px-2">
                    <label htmlFor="" className="d-block mb-1">
                      &nbsp;
                    </label>
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-middle text-nowrap mb-0">
                  <thead>
                    <tr className="text-muted fw-semibold">
                      <th scope="col" className="ps-0">
                        User Name
                      </th>
                      <th scope="col">Casino Type</th>
                      <th scope="col">Game Name</th>
                      <th scope="col">Transaction Id</th>
                      <th scope="col">Transaction Type</th>
                      <th scope="col">Game Id</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Date</th>
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

export default CasinoReport;
