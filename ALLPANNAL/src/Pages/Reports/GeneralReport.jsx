import { Link } from "react-router-dom";

function GeneralReport() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">General Report</h5>
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
                        Select Type
                      </label>
                      <select className="form-select bg-white" id="A_type">
                        <option selected>General Report</option>
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
                <table className="table align-middle table-striped text-nowrap mb-0">
                  <thead>
                    <tr className="text-muted fw-semibold">
                      <th scope="col">Sr. No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Sr. No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="border-top">
                    <tr className="text-muted fw-semibold">
                      <td scope="col"></td>
                      <td scope="col"></td>
                      <td scope="col"></td>
                      <td scope="col">1</td>
                      <td scope="col">00Neeraj</td>
                      <td scope="col">18424.25</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-light">
                    <tr className="text-muted fw-semibold">
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                    <tr className="text-muted fw-semibold">
                      <th scope="col" className="bg-light"></th>
                      <th scope="col" className="bg-light">
                        General Total
                      </th>
                      <th scope="col" className="bg-light">
                        -35682.1
                      </th>
                      <th scope="col" className="bg-light"></th>
                      <th scope="col" className="bg-light">
                        General Total
                      </th>
                      <th scope="col" className="bg-light">
                        35682.1
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralReport;