import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
function Sidenav() {
  const location = useLocation();
  const isLogin = ["/login"].includes(location.pathname);
  $(document).ready(function () {
    if ($(".nav-collapse li a").hasClass("active")) {
      $(".nav-collapse li a.active").parent().parent().addClass("show");
      $(".nav-collapse li a.active")
        .parent()
        .parent()
        .siblings()
        .removeClass("collapsed");
    }
  });
  const showSidenav2 = () => {
    $("body").toggleClass("vertical-collpsed-mobile");
  };
  return (
    <>
      <nav className={isLogin ? "d-none" : "vertical-menu"}>
        <ul id="mainNav" className="h-100">
          <li className="nav_list no-dropdown" onClick={showSidenav2}>
            <Link
              className={
                location.pathname === "/admin/home"
                  ? "nav_link active"
                  : "nav_link"
              }
              to="/admin/home"
            >
              <i className="nav-icon bx bx-home-circle" />
              <span className="nav_name">Dashboard</span>
            </Link>
          </li>
          <li className="nav_list no-dropdown" onClick={showSidenav2}>
            <Link
              className={
                location.pathname === "/admin/market-analysis"
                  ? "nav_link active"
                  : "nav_link"
              }
              to="/admin/market-analysis"
            >
              <i className="nav-icon bx bxs-bar-chart-alt-2" />
              <span className="nav_name">Market Analysis</span>
            </Link>
          </li>
          <li className="nav_list no-dropdown" onClick={showSidenav2}>
            <Link
              className={
                location.pathname === "/admin/multi-account-login"
                  ? "nav_link active"
                  : "nav_link"
              }
              to="/admin/multi-account-login"
            >
              <i className="nav-icon bx bx-user-plus" />
              <span className="nav_name">Multi Login Account</span>
            </Link>
          </li>
          <li className="nav_list">
            <Link
              className="nav_link dropdown-toggle collapsed"
              to="#account"
              data-bs-toggle="collapse"
              data-bs-target="#account"
            >
              <i className="nav-icon bx bx-user-circle" />
              <span className="nav_link-title">Account</span>
            </Link>
            <ul
              id="account"
              className="nav-collapse collapse sub-menu"
              data-bs-parent="#mainNav"
              onClick={showSidenav2}
            >
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/active-users"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/active-users"
                >
                  <span className="nav_name">
                    Account List For Active Users
                  </span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/users"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/users"
                >
                  <span className="nav_name">Account List</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/create-account"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/create-account"
                >
                  <span className="nav_name">Create Account</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav_list no-dropdown" onClick={showSidenav2}>
            <Link
              className={
                location.pathname === "/admin/bank"
                  ? "nav_link active"
                  : "nav_link"
              }
              to="/admin/bank"
            >
              <i className="nav-icon bx bxs-bank" />
              <span className="nav_name">Bank</span>
            </Link>
          </li>
          <li className="nav_list">
            <Link
              className="nav_link dropdown-toggle collapsed"
              to="#reports"
              data-bs-toggle="collapse"
              data-bs-target="#reports"
            >
              <i className="nav-icon bx bx-file" />
              <span className="nav_link-title">Reports</span>
            </Link>
            <ul
              id="reports"
              className="nav-collapse collapse sub-menu"
              data-bs-parent="#mainNav"
              onClick={showSidenav2}
            >
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/reports/accountstatement"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/reports/accountstatement"
                >
                  <span className="nav_name">Account Statement</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/reports/profitloss"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/reports/profitloss"
                >
                  <span className="nav_name">Party Win Loss</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/reports/currentbets"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/reports/currentbets"
                >
                  <span className="nav_name">Current Bets</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/reports/userhistory"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/reports/userhistory"
                >
                  <span className="nav_name">User History</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/settings/userlock"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/settings/userlock"
                >
                  <span className="nav_name">General Lock</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/reports/casinoresult"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/reports/casinoresult"
                >
                  <span className="nav_name">Our Casino Result</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/reports/livecasinoreport"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/reports/livecasinoreport"
                >
                  <span className="nav_name">Live Casino Result</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/reports/sportbookreport"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/reports/sportbookreport"
                >
                  <span className="nav_name">Sportbook Report</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/reports/turnover"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/reports/turnover"
                >
                  <span className="nav_name">Turn Over</span>
                </Link>
              </li>
              <li className="nav_list">
                <Link
                  className={
                    location.pathname === "/admin/reports/authlist"
                      ? "nav_link active"
                      : "nav_link"
                  }
                  to="/admin/reports/authlist"
                >
                  <span className="nav_name">User Authentication</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav_list no-dropdown" onClick={showSidenav2}>
            <Link
              className={
                location.pathname === "/admin/casino/list"
                  ? "nav_link active"
                  : "nav_link"
              }
              to="/admin/casino/list"
            >
              <i className="nav-icon mdi mdi-cards-playing-outline"></i>
              <span className="nav_name">Our Casino</span>
            </Link>
          </li>
          <li className="nav_list no-dropdown" onClick={showSidenav2}>
            <Link
              className={
                location.pathname === "/admin/vcasino/list"
                  ? "nav_link active"
                  : "nav_link"
              }
              to="/admin/vcasino/list"
            >
              <i className="nav-icon mdi mdi-cards-playing-outline"></i>
              <span className="nav_name">Virtual Casino</span>
              <span className="badge text-bg-success float-end">New</span>
            </Link>
          </li>
          <li className="nav_list">
            <Link
              className="nav_link dropdown-toggle collapsed"
              to="#events"
              data-bs-toggle="collapse"
              data-bs-target="#events"
            >
              <i className="nav-icon bx bxs-calendar-event" />
              <span className="nav_link-title">Events</span>
            </Link>
            <ul
              id="events"
              className="nav-collapse fw-medium text-white collapse sub-menu"
              data-bs-parent="#mainNav"
            >
              {/* Politics */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport40 collapsed"
                  to="#events-child1"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child1"
                >
                  <span className="nav_link-title">Politics (2)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child1"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child1_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child1_01"
                    >
                      <span className="nav_link-title">
                        USA Presidential Election 2024
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child1_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/politics"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/politics"
                        >
                          <span className="nav_name">
                            USA Presidential Election 2024
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Cricket */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport4 collapsed"
                  to="#events-child2"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child2"
                >
                  <span className="nav_link-title">Cricket (15)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child2"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child2_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child2_01"
                    >
                      <span className="nav_link-title">
                        ICC World Twenty20 (5)
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child2_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child2"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/cricket2"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/cricket2"
                        >
                          <span className="nav_name">Afghanistan v India</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child2_02"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child2_02"
                    >
                      <span className="nav_link-title">
                        Virtual Cricket League (6)
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child2_02"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child2"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/cricket"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/cricket"
                        >
                          <span className="nav_name">
                            Bangladesh T10 v New Zealand T10
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Football */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport1 collapsed"
                  to="#events-child3"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child3"
                >
                  <span className="nav_link-title">Football (2)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child3"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child3_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child3_01"
                    >
                      <span className="nav_link-title">CHILE Chilean Cup</span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child3_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/football"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/football"
                        >
                          <span className="nav_name">
                            San Luis v Everton De Vina
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Tennis */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport2 collapsed"
                  to="#events-child4"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child4"
                >
                  <span className="nav_link-title">Tennis (12)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child4"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child4_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child4_01"
                    >
                      <span className="nav_link-title">
                        CHALLENGER MEN - SINGLES ILKLEY (UNITED KINGDOM)
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child4_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/tennis"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/tennis"
                        >
                          <span className="nav_name">
                            Arthur Fery v Duje Ajdukovic
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Horse Racing */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport10 collapsed"
                  to="#events-child5"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child5"
                >
                  <span className="nav_link-title">Horse Racing (03)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child5"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child5_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child5_01"
                    >
                      <span className="nav_link-title">GB</span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child5_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname ===
                            "/admin/game/details/horse-racing"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/horse-racing"
                        >
                          <span className="nav_name">
                            Beverley-00:15:00 19/06/2024
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Greyhound Racing */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport65 collapsed"
                  to="#events-child6"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child6"
                >
                  <span className="nav_link-title">Greyhound Racing (05)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child6"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child6_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child6_01"
                    >
                      <span className="nav_link-title">GB</span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child6_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname ===
                            "/admin/game/details/greyhound-racing"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/greyhound-racing"
                        >
                          <span className="nav_name">Doncaster</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Table Tennis */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport8 collapsed"
                  to="#events-child7"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child7"
                >
                  <span className="nav_link-title">Table Tennis (05)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child7"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child7_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child7_01"
                    >
                      <span className="nav_link-title">CZECH Liga Pro</span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child7_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname ===
                            "/admin/game/details/table-tennis"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/table-tennis"
                        >
                          <span className="nav_name">
                            Ales Krejci - Jan Manhal Sr.
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Badminton */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport22 collapsed"
                  to="#events-child8"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child8"
                >
                  <span className="nav_link-title">Badminton (07)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child8"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child8_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child8_01"
                    >
                      <span className="nav_link-title">
                        BWF WORLD TOUR - MEN Kaohsiung Masters (Taiwan)
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child8_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname ===
                            "/admin/game/details/badminton"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/badminton"
                        >
                          <span className="nav_name">
                            alvi wijaya chairullah - Tzu Wei Wang
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Esoccer */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle collapsed"
                  to="#events-child9"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child9"
                >
                  <span className="nav_link-title">Esoccer (07)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child9"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child9_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child9_01"
                    >
                      <span className="nav_link-title">
                        Esoccer Adriatic League (E) - 10 Mins Play
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child9_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/e-soccer"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/e-soccer"
                        >
                          <span className="nav_name">
                            ac milan (felix) - AS Roma (donatello)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Basketball */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport15 collapsed"
                  to="#events-child10"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child10"
                >
                  <span className="nav_link-title">Basketball (07)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child10"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child10_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child10_01"
                    >
                      <span className="nav_link-title">
                        Esoccer Adriatic League (E) - 10 Mins Play
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child10_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname ===
                            "/admin/game/details/basketball"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/basketball"
                        >
                          <span className="nav_name">
                            ac milan (felix) - AS Roma (donatello)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Volleyball */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport18 collapsed"
                  to="#events-child11"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child11"
                >
                  <span className="nav_link-title">Volleyball (07)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child11"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child11_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child11_01"
                    >
                      <span className="nav_link-title">
                        Esoccer Adriatic League (E) - 10 Mins Play
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child11_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname ===
                            "/admin/game/details/volleyball"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/volleyball"
                        >
                          <span className="nav_name">
                            ac milan (felix) - AS Roma (donatello)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Snooker */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport59 collapsed"
                  to="#events-child12"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child12"
                >
                  <span className="nav_link-title">Snooker (07)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child12"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child12_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child12_01"
                    >
                      <span className="nav_link-title">
                        Esoccer Adriatic League (E) - 10 Mins Play
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child12_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/snooker"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/snooker"
                        >
                          <span className="nav_name">
                            ac milan (felix) - AS Roma (donatello)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Ice Hockey */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Ice Hockey</span>
                </Link>
              </li>
              {/* Egames */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport11 collapsed"
                  to="#events-child13"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child13"
                >
                  <span className="nav_link-title">Egames (31)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child13"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child13_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child13_01"
                    >
                      <span className="nav_link-title">
                        Esoccer Adriatic League (E) - 10 Mins Play
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child13_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/egames"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/egames"
                        >
                          <span className="nav_name">
                            ac milan (felix) - AS Roma (donatello)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Futsal */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport9 collapsed"
                  to="#events-child14"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child14"
                >
                  <span className="nav_link-title">Futsal (31)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child14"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child14_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child14_01"
                    >
                      <span className="nav_link-title">
                        Esoccer Adriatic League (E) - 10 Mins Play
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child14_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/futsal"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/futsal"
                        >
                          <span className="nav_name">
                            ac milan (felix) - AS Roma (donatello)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Kabaddi */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Kabaddi</span>
                </Link>
              </li>
              {/* Golf */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Golf</span>
                </Link>
              </li>
              {/* Rugbey League */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Rugbey League</span>
                </Link>
              </li>
              {/* Boxing */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport6 collapsed"
                  to="#events-child15"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child15"
                >
                  <span className="nav_link-title">Boxing (1)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child15"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child15_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child15_01"
                    >
                      <span className="nav_link-title">
                        Esoccer Adriatic League (E) - 10 Mins Play
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child15_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/boxing"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/boxing"
                        >
                          <span className="nav_name">
                            ac milan (felix) - AS Roma (donatello)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Beach Volleyball */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Beach Volleyball</span>
                </Link>
              </li>

              {/* Mixed Matarial Arts */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Mixed Matarial Arts</span>
                </Link>
              </li>

              {/* MotoGP */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">MotoGP</span>
                </Link>
              </li>

              {/* Chess */}
              <li className="nav_list">
                {/* child menu label */}
                <Link
                  className="nav_link dropdown-toggle sport17 collapsed"
                  to="#events-child16"
                  data-bs-toggle="collapse"
                  data-bs-target="#events-child16"
                >
                  <span className="nav_link-title">Chess (2)</span>
                </Link>
                {/* child menu 1 */}
                <ul
                  id="events-child16"
                  className="nav-collapse collapse sub-menu"
                  data-bs-parent="#events"
                >
                  <li className="nav_list">
                    {/* child menu label */}
                    <Link
                      className="nav_link dropdown-toggle collapsed"
                      to="#events-child16_01"
                      data-bs-toggle="collapse"
                      data-bs-target="#events-child16_01"
                    >
                      <span className="nav_link-title">
                        Esoccer Adriatic League (E) - 10 Mins Play
                      </span>
                    </Link>
                    {/* child menu 1 */}
                    <ul
                      id="events-child16_01"
                      className="nav-collapse collapse sub-menu"
                      data-bs-parent="#events-child1"
                    >
                      <li className="nav_list">
                        <Link
                          className={
                            location.pathname === "/admin/game/details/chess"
                              ? "nav_link active"
                              : "nav_link"
                          }
                          to="/admin/game/details/chess"
                        >
                          <span className="nav_name">
                            ac milan (felix) - AS Roma (donatello)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Cycling */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Cycling</span>
                </Link>
              </li>

              {/* Motorbikes */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Motorbikes</span>
                </Link>
              </li>

              {/* Athletics */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Athletics</span>
                </Link>
              </li>

              {/* Basketball 3x3 */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Basketball 3x3</span>
                </Link>
              </li>

              {/* Sumo */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Sumo</span>
                </Link>
              </li>

              {/* Virtual Sport */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Virtual Sport</span>
                </Link>
              </li>

              {/* Motor Sport */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Motor Sport</span>
                </Link>
              </li>

              {/* Baseball */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Baseball</span>
                </Link>
              </li>

              {/* Rugby Union */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Rugby Union</span>
                </Link>
              </li>

              {/* Darts */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Darts</span>
                </Link>
              </li>

              {/* Darts */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Darts</span>
                </Link>
              </li>

              {/* American Football */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">American Football</span>
                </Link>
              </li>

              {/* Soccer */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Soccer</span>
                </Link>
              </li>

              {/* Esports */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Esports</span>
                </Link>
              </li>

              {/* Boat Racing */}
              <li className="nav_list no-dropdown" onClick={showSidenav2}>
                <Link
                  className={
                    location.pathname === "#" ? "nav_link active" : "nav_link"
                  }
                  to="#"
                >
                  <span className="nav_name">Boat Racing</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidenav;
