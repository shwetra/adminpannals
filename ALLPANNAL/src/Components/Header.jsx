import {
  BellRing,
  ChevronDown,
  GripHorizontal,
  Menu,
  Search,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import $ from "jquery";
function Header() {
  const location = useLocation();
  const isLogin = ["/login"].includes(location.pathname);
  const navigate = useNavigate();
  const showSidenav = () => {
    $("body").toggleClass("def-sidebar");
    $("body").toggleClass("mini-sidebar");
  };
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <header className={isLogin ? "d-none" : "topbar"}>
        <div className="with-vertical">
          {/* ---------------------------------- */}
          {/* Start Vertical Layout Header */}
          {/* ---------------------------------- */}
          <nav className="navbar navbar-expand-lg p-0 justify-content-between">
            <div className="d-flex align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item nav-icon-hover-bg rounded-circle ms-n2">
                  <Link
                    className="nav-link sidebartoggler"
                    id="headerCollapse"
                    onClick={showSidenav}
                    to="#"
                  >
                    <Menu />
                  </Link>
                </li>
                <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-lg-flex">
                  <Link
                    className="nav-link"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <Search />
                  </Link>
                </li>
              </ul>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                    Sports Menu
                  </h5>
                  <button
                    type="button"
                    className="btn-close pt-0"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav quick-links d-flex align-items-md-center">
                    <li className="nav-item dropdown-hover">
                      <Link className="nav-link" to="#">
                        Cricket
                        <ChevronDown
                          size={23}
                          strokeWidth={1}
                          className="ms-1"
                        />
                      </Link>
                      {/* dropdown menu */}
                      <div className="menu-hover">
                        {/* main level menu */}
                        <div className="accordion" id="cricket">
                          {/* 1st menu */}
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#menu1"
                              aria-expanded="false"
                              aria-controls="menu1"
                            >
                              ICC World Cup T20 2024
                            </button>
                            <div
                              id="menu1"
                              className="accordion-collapse collapse"
                              data-bs-parent="#cricket"
                            >
                              <div className="accordion-body p-2">
                                {/* 1st child menu */}
                                <div className="accordion" id="c_1st_child">
                                  <div className="accordion-item">
                                    <button
                                      className="accordion-button accordion-header collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#child1_menu1"
                                      aria-expanded="false"
                                      aria-controls="child1_menu1"
                                    >
                                      14/Jun/24
                                    </button>
                                    <div
                                      id="child1_menu1"
                                      className="accordion-collapse collapse"
                                      data-bs-parent="#c_1st_child"
                                    >
                                      <div className="accordion-body p-2">
                                        {/* 2nd child menu */}
                                        <div
                                          className="accordion"
                                          id="c_2st_child"
                                        >
                                          <div className="accordion-item">
                                            <button
                                              className="accordion-button accordion-header collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#child2_menu1"
                                              aria-expanded="false"
                                              aria-controls="child2_menu1"
                                            >
                                              Afghanistan v Papua New Guinea
                                            </button>
                                            <div
                                              id="child2_menu1"
                                              className="accordion-collapse collapse"
                                              data-bs-parent="#c_2st_child"
                                            >
                                              <Link
                                                data-bs-dismiss="offcanvas"
                                                onClick={() =>
                                                  handleClick(
                                                    "/MasterLiveMatch/cricket"
                                                  )
                                                }
                                                to="/MasterLiveMatch/cricket"
                                                className="nav-link fw-medium pt-lg-0 pt-2"
                                              >
                                                <small>MATCH_ODDS</small>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#menu2"
                              aria-expanded="false"
                              aria-controls="menu2"
                            >
                              T20 Blast
                            </button>
                            <div
                              id="menu2"
                              className="accordion-collapse collapse"
                              data-bs-parent="#cricket"
                            >
                              <div className="accordion-body p-2">
                                <strong>
                                  This is the second item's accordion body.
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown-hover">
                      <Link className="nav-link" to="#">
                        Basketball
                        <ChevronDown
                          size={23}
                          strokeWidth={1}
                          className="ms-1"
                        />
                      </Link>

                      {/* dropdown menu */}
                      <div className="menu-hover">
                        {/* main level menu */}
                        <div className="accordion" id="basketball">
                          {/* 1st menu */}
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#b_menu1"
                              aria-expanded="false"
                              aria-controls="b_menu1"
                            >
                              ICC World Cup T20 2024
                            </button>
                            <div
                              id="b_menu1"
                              className="accordion-collapse collapse"
                              data-bs-parent="#basketball"
                            >
                              <div className="accordion-body p-2">
                                {/* 1st child menu */}
                                <div className="accordion" id="b_1st_child">
                                  <div className="accordion-item">
                                    <button
                                      className="accordion-button accordion-header collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#b_child1_menu1"
                                      aria-expanded="false"
                                      aria-controls="b_child1_menu1"
                                    >
                                      14/Jun/24
                                    </button>
                                    <div
                                      id="b_child1_menu1"
                                      className="accordion-collapse collapse"
                                      data-bs-parent="#b_1st_child"
                                    >
                                      <div className="accordion-body p-2">
                                        {/* 2nd child menu */}
                                        <div
                                          className="accordion"
                                          id="b_2st_child"
                                        >
                                          <div className="accordion-item">
                                            <button
                                              className="accordion-button accordion-header collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#child2_menu1"
                                              aria-expanded="false"
                                              aria-controls="child2_menu1"
                                            >
                                              Afghanistan v Papua New Guinea
                                            </button>
                                            <div
                                              id="child2_menu1"
                                              className="accordion-collapse collapse"
                                              data-bs-parent="#b_2st_child"
                                            >
                                              <Link
                                                data-bs-dismiss="offcanvas"
                                                onClick={() =>
                                                  handleClick(
                                                    "/MasterLiveMatch/basketball"
                                                  )
                                                }
                                                to="/MasterLiveMatch/basketball"
                                                className="nav-link fw-medium pt-lg-0 pt-2"
                                              >
                                                <small>MATCH_ODDS</small>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#b_menu2"
                              aria-expanded="false"
                              aria-controls="b_menu2"
                            >
                              T20 Blast
                            </button>
                            <div
                              id="b_menu2"
                              className="accordion-collapse collapse"
                              data-bs-parent="#cricket"
                            >
                              <div className="accordion-body p-2">
                                <strong>
                                  This is the second item's accordion body.
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown-hover">
                      <Link className="nav-link" to="#">
                        Soccer
                        <ChevronDown
                          size={23}
                          strokeWidth={1}
                          className="ms-1"
                        />
                      </Link>

                      {/* dropdown menu */}
                      <div className="menu-hover">
                        {/* main level menu */}
                        <div className="accordion" id="soccer">
                          {/* 1st menu */}
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#s_menu1"
                              aria-expanded="false"
                              aria-controls="s_menu1"
                            >
                              ICC World Cup T20 2024
                            </button>
                            <div
                              id="s_menu1"
                              className="accordion-collapse collapse"
                              data-bs-parent="#soccer"
                            >
                              <div className="accordion-body p-2">
                                {/* 1st child menu */}
                                <div className="accordion" id="s_1st_child">
                                  <div className="accordion-item">
                                    <button
                                      className="accordion-button accordion-header collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#s_child1_menu1"
                                      aria-expanded="false"
                                      aria-controls="s_child1_menu1"
                                    >
                                      14/Jun/24
                                    </button>
                                    <div
                                      id="s_child1_menu1"
                                      className="accordion-collapse collapse"
                                      data-bs-parent="#s_1st_child"
                                    >
                                      <div className="accordion-body p-2">
                                        {/* 2nd child menu */}
                                        <div
                                          className="accordion"
                                          id="s_2st_child"
                                        >
                                          <div className="accordion-item">
                                            <button
                                              className="accordion-button accordion-header collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#child2_menu1"
                                              aria-expanded="false"
                                              aria-controls="child2_menu1"
                                            >
                                              Afghanistan v Papua New Guinea
                                            </button>
                                            <div
                                              id="child2_menu1"
                                              className="accordion-collapse collapse"
                                              data-bs-parent="#s_2st_child"
                                            >
                                              <Link
                                                data-bs-dismiss="offcanvas"
                                                onClick={() =>
                                                  handleClick(
                                                    "/MasterLiveMatch/soccer"
                                                  )
                                                }
                                                to="/MasterLiveMatch/soccer"
                                                className="nav-link fw-medium pt-lg-0 pt-2"
                                              >
                                                <small>MATCH_ODDS</small>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#s_menu2"
                              aria-expanded="false"
                              aria-controls="s_menu2"
                            >
                              T20 Blast
                            </button>
                            <div
                              id="s_menu2"
                              className="accordion-collapse collapse"
                              data-bs-parent="#soccer"
                            >
                              <div className="accordion-body p-2">
                                <strong>
                                  This is the second item's accordion body.
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown-hover">
                      <Link className="nav-link" to="#">
                        Tennis
                        <ChevronDown
                          size={23}
                          strokeWidth={1}
                          className="ms-1"
                        />
                      </Link>

                      {/* dropdown menu */}
                      <div className="menu-hover">
                        {/* main level menu */}
                        <div className="accordion" id="tennis">
                          {/* 1st menu */}
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#t_menu1"
                              aria-expanded="false"
                              aria-controls="t_menu1"
                            >
                              ICC World Cup T20 2024
                            </button>
                            <div
                              id="t_menu1"
                              className="accordion-collapse collapse"
                              data-bs-parent="#tennis"
                            >
                              <div className="accordion-body p-2">
                                {/* 1st child menu */}
                                <div className="accordion" id="t_1st_child">
                                  <div className="accordion-item">
                                    <button
                                      className="accordion-button accordion-header collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#t_child1_menu1"
                                      aria-expanded="false"
                                      aria-controls="t_child1_menu1"
                                    >
                                      14/Jun/24
                                    </button>
                                    <div
                                      id="t_child1_menu1"
                                      className="accordion-collapse collapse"
                                      data-bs-parent="#t_1st_child"
                                    >
                                      <div className="accordion-body p-2">
                                        {/* 2nd child menu */}
                                        <div
                                          className="accordion"
                                          id="t_2st_child"
                                        >
                                          <div className="accordion-item">
                                            <button
                                              className="accordion-button accordion-header collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#child2_menu1"
                                              aria-expanded="false"
                                              aria-controls="child2_menu1"
                                            >
                                              Afghanistan v Papua New Guinea
                                            </button>
                                            <div
                                              id="child2_menu1"
                                              className="accordion-collapse collapse"
                                              data-bs-parent="#t_2st_child"
                                            >
                                              <Link
                                                data-bs-dismiss="offcanvas"
                                                onClick={() =>
                                                  handleClick(
                                                    "/MasterLiveMatch/tennis"
                                                  )
                                                }
                                                to="/MasterLiveMatch/tennis"
                                                className="nav-link fw-medium pt-lg-0 pt-2"
                                              >
                                                <small>MATCH_ODDS</small>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#t_menu2"
                              aria-expanded="false"
                              aria-controls="t_menu2"
                            >
                              T20 Blast
                            </button>
                            <div
                              id="t_menu2"
                              className="accordion-collapse collapse"
                              data-bs-parent="#tennis"
                            >
                              <div className="accordion-body p-2">
                                <strong>
                                  This is the second item's accordion body.
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown-hover">
                      <Link className="nav-link" to="#">
                        Volleyball
                        <ChevronDown
                          size={23}
                          strokeWidth={1}
                          className="ms-1"
                        />
                      </Link>

                      {/* dropdown menu */}
                      <div className="menu-hover">
                        {/* main level menu */}
                        <div className="accordion" id="volleyball">
                          {/* 1st menu */}
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#v_menu1"
                              aria-expanded="false"
                              aria-controls="v_menu1"
                            >
                              ICC World Cup T20 2024
                            </button>
                            <div
                              id="v_menu1"
                              className="accordion-collapse collapse"
                              data-bs-parent="#volleyball"
                            >
                              <div className="accordion-body p-2">
                                {/* 1st child menu */}
                                <div className="accordion" id="v_1st_child">
                                  <div className="accordion-item">
                                    <button
                                      className="accordion-button accordion-header collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#t_child1_menu1"
                                      aria-expanded="false"
                                      aria-controls="t_child1_menu1"
                                    >
                                      14/Jun/24
                                    </button>
                                    <div
                                      id="v_child1_menu1"
                                      className="accordion-collapse collapse"
                                      data-bs-parent="#v_1st_child"
                                    >
                                      <div className="accordion-body p-2">
                                        {/* 2nd child menu */}
                                        <div
                                          className="accordion"
                                          id="v_2st_child"
                                        >
                                          <div className="accordion-item">
                                            <button
                                              className="accordion-button accordion-header collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target="#child2_menu1"
                                              aria-expanded="false"
                                              aria-controls="child2_menu1"
                                            >
                                              Afghanistan v Papua New Guinea
                                            </button>
                                            <div
                                              id="child2_menu1"
                                              className="accordion-collapse collapse"
                                              data-bs-parent="#t_2st_child"
                                            >
                                              <Link
                                                data-bs-dismiss="offcanvas"
                                                onClick={() =>
                                                  handleClick(
                                                    "/MasterLiveMatch/volleyball"
                                                  )
                                                }
                                                to="/MasterLiveMatch/volleyball"
                                                className="nav-link fw-medium pt-lg-0 pt-2"
                                              >
                                                <small>MATCH_ODDS</small>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <button
                              className="accordion-button accordion-header collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#v_menu2"
                              aria-expanded="false"
                              aria-controls="v_menu2"
                            >
                              T20 Blast
                            </button>
                            <div
                              id="v_menu2"
                              className="accordion-collapse collapse"
                              data-bs-parent="#volleyball"
                            >
                              <div className="accordion-body p-2">
                                <strong>
                                  This is the second item's accordion body.
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link to="/" className="d-lg-none d-block">
              <img src={logo} width={90} alt="" />
            </Link>

            <div className="d-flex align-items-center justify-content-between">
              <Link
                className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
                to="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2"
              >
                <GripHorizontal />
              </Link>
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                  <Link
                    className="nav-link position-relative"
                    to="#"
                    id="drop2"
                    aria-expanded="false"
                  >
                    <BellRing />
                    <div className="notification bg-primary rounded-circle" />
                  </Link>
                </li>

                {/* ------------------------------- */}
                {/* start profile Dropdown */}
                {/* ------------------------------- */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link pe-0"
                    to="#"
                    id="drop1"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center">
                      <div className="dropdown">
                        <div
                          className="user-profile-img dropdown-toggle pe-lg-2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg"
                            className="rounded-circle"
                            width={35}
                            height={35}
                            alt="modernize-img"
                          />
                        </div>
                        <ul
                          className="dropdown-menu"
                          style={{ position: "absolute", left: "-150px" }}
                        >
                          <li>
                            <Link
                              className="dropdown-item py-3 lh-1"
                              to="/SecurityAuth"
                            >
                              Secure Auth Verification
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item py-3 lh-1"
                              to="/change-password"
                            >
                              Change Password
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item py-3 lh-1 border-top"
                              to="#"
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </li>
                {/* ------------------------------- */}
                {/* end profile Dropdown */}
                {/* ------------------------------- */}
              </ul>
            </div>
          </nav>
          {/* ---------------------------------- */}
          {/* End Vertical Layout Header */}
          {/* ---------------------------------- */}
          {/* ------------------------------- */}
        </div>
      </header>
    </>
  );
}

export default Header;
