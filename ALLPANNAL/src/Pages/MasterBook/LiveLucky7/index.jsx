import { Link } from "react-router-dom";

function LiveLucky7() {
  return (
    <>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* page title */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-md-4 mb-3">
            <div className="card-body d-flex justify-content-between p-md-4 p-3">
              <h5 className="fw-bold mb-0">Lucky 7</h5>
            </div>
          </div>

          <div className="row custom-row">
            <div className="col-md-4 col-6 custom-col mb-2 pb-1">
              <Link to="/MasterBook/Lucky7A">
                <img
                  src="https://indiaexch7.com/img/Lucky7A.jpg"
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-4 col-6 custom-col mb-2 pb-1">
              <Link to="/MasterBook/Lucky7B">
                <img
                  src="https://indiaexch7.com/img/Lucky7B.jpg"
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveLucky7;
