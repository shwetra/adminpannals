import React from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
function Header() {
  const location = useLocation();
  const isLogin = ["/login"].includes(location.pathname);
  const handleFullscreen = () => {
    const elem = document.documentElement; // or use a specific element
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        // Chrome, Safari, and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        // IE/Edge
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  const showSidenav = () => {
    if (window.innerWidth > 992) {
      $("body").toggleClass("sidebar-enable vertical-collpsed");
    }
  };
  const showSidenav2 = () => {
    if (window.innerWidth < 991) {
      $("body").toggleClass("vertical-collpsed-mobile");
    }
  };
  return (
    <>
      <header id="page-topbar" className={isLogin ? "d-none" : ""}>
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link
                to="/"
                aria-current="page"
                className="logo logo-light router-link-exact-active router-link-active"
              >
                <span className="logo-sm">
                  <img
                    src="https://wver.sprintstaticdata.com/v48/static/admin/img/icon.png"
                    alt=""
                    height={22}
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="https://sitethemedata.com/sitethemes/icebook777.com/front/logo.png"
                    alt=""
                    className="site-logo"
                  />
                </span>
              </Link>
            </div>
            <button
              onClick={showSidenav}
              type="button"
              className="btn btn-sm d-md-block d-none px-3 header-item"
            >
              <i className="bx bx-menu fs-4"></i>
            </button>
            <button
              onClick={showSidenav2}
              type="button"
              className="btn btn-sm d-md-none d-block px-3 header-item"
            >
              <i className="bx bx-menu fs-4"></i>
            </button>
            <div className="site-searchbox mt-3 d-none d-lg-inline-block">
              <input
                type="search"
                name=""
                className="form-control"
                placeholder="Search User"
              />
            </div>
          </div>
          <div className="w-100">
            <div className="upcoming-fixure fixture-nav">
              <div className="fixure-title">Upcoming Fixtures</div>
              <div className="fixure-box-container1"></div>
            </div>
          </div>
          <div className="d-flex">
            <div className="dropdown b-dropdown d-inline-block d-lg-none ml-2 btn-group">
              <button
                aria-haspopup="menu"
                aria-expanded="false"
                type="button"
                className="btn dropdown-toggle btn-black header-item noti-icon"
              >
                <i className="mdi mdi-magnify" />
              </button>
            </div>
            <div className="dropdown d-none d-lg-inline-block ml-1">
              <button
                type="button"
                onClick={handleFullscreen}
                className="btn header-item noti-icon"
              >
                <i className="bx bx-fullscreen" />
              </button>
            </div>
            <div className="d-none d-sm-inline-block rules-icon nowrap">
              <span className="main-rules">
                <Link to="#">Rules</Link>
              </span>
            </div>
            <div className="dropdown d-none d-sm-inline-block ml-1">
              <button type="button" className="btn header-item noti-icon">
                <span className="balance nowrap">
                  pts:
                  <span className="balance-value">
                    <b>11,11,861.06</b>
                  </span>
                </span>
              </button>
            </div>
            <div className="dropdown b-dropdown btn-group">
              <button
                className="btn dropdown-toggle btn-black header-item pe-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="ml-1">David7776</span>
                &nbsp;
                <i className="mdi mdi-chevron-down" />
              </button>
              <ul className="dropdown-menu dropdown-menu-right">
                <div className="dropdown d-sm-none ml-1 me-1">
                  <div className="bal-box">
                    <span className="balance nowrap">
                      pts:
                      <span className="balance-value">
                        <b>11,11,861.06</b>
                      </span>
                    </span>
                  </div>
                </div>
                <Link to="#" className="dropdown-item d-sm-none">
                  <i className="fas fa-info-circle me-1" /> Rules
                </Link>

                <li role="presentation">
                  <Link to="/admin/secureauth" className="dropdown-item">
                    <i className="bx bx-lock-open align-middle me-1" />
                    Secure Auth
                  </Link>
                </li>
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#changePassword"
                  className="dropdown-item"
                >
                  <i className="bx bx-wallet align-middle me-1" />
                  Change Password
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item text-danger">
                  <i className="bx bx-power-off align-middle me-1 text-danger" />
                  Logout
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Modal */}
      <div
        className="modal fade"
        id="changePassword"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="changePasswordLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-uppercase"
                id="changePasswordLabel"
              >
                Change Password
              </h5>
              <button
                type="button"
                className="btn-close border-0 shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ filter: "invert(0)" }}
              />
            </div>
            <div className="modal-body">
              <form data-vv-scope="ChangePassword" method="post">
                <div className="form-group">
                  <input
                    placeholder="Transaction Code"
                    data-vv-as="Transaction Code"
                    type="password"
                    name="password"
                    className="form-control"
                    aria-required="true"
                    aria-invalid="true"
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="New Password"
                    type="password"
                    data-vv-as="New Password"
                    name="NewPassword"
                    className="form-control"
                    aria-required="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Confirm New Password"
                    data-vv-as="Confirm Password"
                    type="password"
                    name="ConfirmNewPassword"
                    className="form-control"
                    aria-required="true"
                    aria-invalid="true"
                  />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="btn btn-dark w-100">
                    Change Password
                    <i className="fas fa-chevron-circle-right ms-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
