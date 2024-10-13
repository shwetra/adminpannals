import {
  CandlestickChart,
  Circle,
  FilePieChart,
  Home,
  LogOut,
  Radio,
  Settings,
  UsersRound,
  X,
} from "lucide-react";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
function Sidebar() {
  const location = useLocation();
  const isLogin = ["/login"].includes(location.pathname);
  const hideSidenav = () => {
    $("body").removeClass("def-sidebar");
    $("body").removeClass("mini-sidebar");
  };
  return (
    <>
      <aside className={isLogin ? "d-none" : "left-sidebar with-vertical"}>
        <div>
          {/* ---------------------------------- */}
          {/* Start Vertical Layout Sidebar */}
          {/* ---------------------------------- */}
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <Link to="/" className="text-nowrap logo-img">
              <img
                src={logo}
                className="dark-logo"
                width={110}
                alt="Logo-Dark"
              />
            </Link>
            <Link
              onClick={hideSidenav}
              to="#"
              className="sidebartoggler ms-auto fs-5 d-block d-lg-none"
            >
              <X />
            </Link>
          </div>
          <nav
            className="sidebar-nav scroll-sidebar simplebar-scrollable-y"
            data-simplebar="init"
          >
            <div className="simplebar-wrapper">
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div className="simplebar-offset">
                  <div
                    className="simplebar-content-wrapper"
                    tabIndex={0}
                    role="region"
                    aria-label="scrollable content"
                  >
                    <div className="simplebar-content">
                      <ul id="sidebarnav">
                        {/* ---------------------------------- */}
                        {/* Home */}
                        {/* ---------------------------------- */}
                        <li className="nav-small-cap">
                          <i className="ti ti-dots nav-small-cap-icon fs-4" />
                          <span className="hide-menu">Menu</span>
                        </li>
                        {/* Dashboard */}
                        <li className="sidebar-item">
                          <Link
                            onClick={hideSidenav}
                            className={
                              location.pathname === "/"
                                ? "sidebar-link active"
                                : "sidebar-link"
                            }
                            to="/"
                            aria-expanded="false"
                          >
                            <span>
                              <Home />
                            </span>
                            <span className="hide-menu">Dashboard</span>
                          </Link>
                        </li>
                        {/* Dashboard End*/}
                        {/* Clients */}
                        <li className="sidebar-item">
                          <Link
                            onClick={hideSidenav}
                            className={
                              location.pathname === "/MasterListUsersNew"
                                ? "sidebar-link active"
                                : "sidebar-link"
                            }
                            to="/MasterListUsersNew"
                            aria-expanded="false"
                          >
                            <span>
                              <UsersRound />
                            </span>
                            <span className="hide-menu">List Of Clients</span>
                          </Link>
                        </li>
                        {/* Clients End*/}
                        {/* Market Analysis*/}
                        <li className="sidebar-item">
                          <Link
                            onClick={hideSidenav}
                            className={
                              location.pathname === "/MasterCurrentEvents"
                                ? "sidebar-link active"
                                : "sidebar-link"
                            }
                            to="/MasterCurrentEvents"
                            aria-expanded="false"
                          >
                            <span>
                              <CandlestickChart />
                            </span>
                            <span className="hide-menu">Market Analysis</span>
                          </Link>
                        </li>
                        {/* Market Analysis End*/}
                        {/* Settings*/}
                        <li className="sidebar-item">
                          <Link
                            to="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#settings-collapse"
                            className="sidebar-link btn-toggle collapsed"
                            aria-expanded="false"
                          >
                            <span>
                              <Settings />
                            </span>
                            <span className="hide-menu">Settings</span>
                          </Link>
                          <div className="collapse" id="settings-collapse">
                            {/* Level one menu Start */}
                            <ul
                              aria-expanded="false"
                              className="collapse first-level in"
                              onClick={hideSidenav}
                            >
                              {/* control panel */}
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterControlPanel"
                                  className={
                                    location.pathname === "/MasterControlPanel"
                                      ? "sidebar-link active"
                                      : "sidebar-link"
                                  }
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Control Panel
                                  </span>
                                </Link>
                              </li>
                              {/* control panel end*/}
                              {/* shcedule matches*/}
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterScheduleMatches"
                                  className={
                                    location.pathname ===
                                    "/MasterScheduleMatches"
                                      ? "sidebar-link active"
                                      : "sidebar-link"
                                  }
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Schedule Matches
                                  </span>
                                </Link>
                              </li>
                              {/* shcedule matches end*/}
                            </ul>
                            {/* Level one menu End */}
                          </div>
                        </li>
                        {/* Settings End*/}

                        {/* Live Market*/}
                        <li className="sidebar-item">
                          <Link
                            to="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#liveMarket-collapse"
                            className="sidebar-link btn-toggle collapsed"
                            aria-expanded="false"
                          >
                            <span>
                              <Radio />
                            </span>
                            <span className="hide-menu">Live Market</span>
                          </Link>
                          <div className="collapse" id="liveMarket-collapse">
                            {/* Level one menu Start */}
                            <ul
                              aria-expanded="false"
                              className="collapse first-level in"
                              onClick={hideSidenav}
                            >
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/TeenPatti"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Live Teen Patti
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/AndarBahar"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Andar Bahar</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/AndarBaharB"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Andar Bahar B
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live32Cards"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">32 Cards A</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live32CardsB"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">32 Cards B</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/MatkaList"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Matka</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/PokerList"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Poker</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/CasinoSports"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Sports Casino
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/BollywoodTable"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Bollywood Casino
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/LiveLucky7"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Lucky 7</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/RouletteAll"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Live Roulette
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/bankerplayer"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Baccarat</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/bankerplayerb"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Baccarat 2</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/LiveSicBo"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Dise</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/DragonTiger"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Dragon Tiger
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/AAA"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Amar Akbar Anthony
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/3Cardj"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    3 Cards Judgement
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/1Card1Day"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    1 Card One Day
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/1Card2020"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    1 Card 20-20
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/CMeter"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Casino Meter
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/NoteNum"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Note Number</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/Queen"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Queen</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/TeenMuflis"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Teen Muflis</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/RaceTo17"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Race To 17</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/Trio"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Trio</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterBook/Live/War"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Casino War</span>
                                </Link>
                              </li>
                            </ul>
                            {/* Level one menu End */}
                          </div>
                        </li>
                        {/* Live Market End*/}
                        {/* Reports*/}
                        <li className="sidebar-item">
                          <Link
                            className="sidebar-link btn-toggle collapsed"
                            to="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#reports-collapse"
                            aria-expanded="false"
                          >
                            <span>
                              <FilePieChart />
                            </span>
                            <span className="hide-menu">Reports</span>
                          </Link>
                          <div className="collapse" id="reports-collapse">
                            {/* Level one menu Start */}
                            <ul
                              aria-expanded="false"
                              className="collapse first-level in"
                              onClick={hideSidenav}
                            >
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterUser/AccountStatement"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Account Statement
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterUser/CurrentBets"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Current Bets
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterUser/BetHistory"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Bet History</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterUser/GeneralReport"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    General Report
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterUser/GameReport"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">Game Report</span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterUser/CommissionReport"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Commission Report
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterUser/CasinoReport"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Casino Report
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterUser/UserProfitLoss"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    User Profit Loss
                                  </span>
                                </Link>
                              </li>
                              <li className="sidebar-item">
                                <Link
                                  to="/MasterUser/CasinoResultReport"
                                  className="sidebar-link"
                                >
                                  <Circle className="circle" />
                                  <span className="hide-menu">
                                    Casino Result Report
                                  </span>
                                </Link>
                              </li>
                            </ul>
                            {/* Level one menu End */}
                          </div>
                        </li>
                        {/* Reports End*/}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="fixed-profile p-3 mx-4 mb-2 bg-secondary-subtle rounded mt-3">
            <div className="hstack gap-3">
              <div className="john-img">
                <img
                  src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg"
                  className="rounded-circle"
                  width={40}
                  height={40}
                  alt="modernize-img"
                />
              </div>
              <div className="john-title">
                <h6 className="mb-0 fs-4 fw-semibold">Mathew</h6>
                <span className="fs-2">Designer</span>
              </div>
              <button
                className="border-0 bg-transparent text-primary ms-auto"
                tabIndex={0}
                type="button"
                aria-label="logout"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>

          {/* ---------------------------------- */}
          {/* Start Vertical Layout Sidebar */}
          {/* ---------------------------------- */}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
