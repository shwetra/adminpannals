import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import ListUsers from "./Pages/Master/ListUsers";
import AddUser from "./Pages/Master/AddUser";
import CurrentEvents from "./Pages/Master/CurrentEvents";
import ControlPanel from "./Pages/Master/ControlPanel";
import ScheduleMatches from "./Pages/Master/ScheduleMatches";
import TeenPatti from "./Pages/MasterBook/TeenPatti/index";
import TeenPattiDetails from "./Pages/MasterBook/TeenPatti/Details";
import AndarBahar from "./Pages/MasterBook/AndarBahar";
import AndarBaharB from "./Pages/MasterBook/AndarBaharB";
import Live32CardsA from "./Pages/MasterBook/Live32CardsA";
import MatkaList from "./Pages/MasterBook/Matka";
import PokerList from "./Pages/MasterBook/Pocker";
import CasinoSports from "./Pages/MasterBook/CasinoSports";
import LiveLucky7 from "./Pages/MasterBook/LiveLucky7";
import RouletteAll from "./Pages/MasterBook/RouletteAll";
import Baccarat from "./Pages/MasterBook/Baccarat/Baccarat";
import BaccaratB from "./Pages/MasterBook/Baccarat/BaccaratB";
import DragonTiger from "./Pages/MasterBook/DragonTiger";
import AccountStatement from "./Pages/Reports/AccountStatement";
import CurrentBets from "./Pages/Reports/CurrentBets";
import BetHistory from "./Pages/Reports/BetHistory";
import GeneralReport from "./Pages/Reports/GeneralReport";
import GameReport from "./Pages/Reports/GameReport";
import CommissionReport from "./Pages/Reports/CommissionReport";
import CasinoReport from "./Pages/Reports/CasinoReport";
import UserProfitLoss from "./Pages/Reports/UserProfitLoss";
import CasinoResultReport from "./Pages/Reports/CasinoResultReport";
import Live32CardsB from "./Pages/MasterBook/Live32CardsB";
import MatkaDetails from "./Pages/MasterBook/Matka/Details";
import PockerDetails from "./Pages/MasterBook/Pocker/Details";
import Cricket5 from "./Pages/MasterBook/CasinoSports/Cricket5";
import CMatch20 from "./Pages/MasterBook/CasinoSports/CMatch20";
import BollywoodTable from "./Pages/MasterBook/BollywoodTable";
import Lucky7A from "./Pages/MasterBook/LiveLucky7/Lucky7A";
import Lucky7B from "./Pages/MasterBook/LiveLucky7/Lucky7B";
import RouletteA from "./Pages/MasterBook/RouletteAll/RouletteA";
import RouletteB from "./Pages/MasterBook/RouletteAll/RouletteB";
import Dise from "./Pages/MasterBook/Dise";
import DragonTiger20 from "./Pages/MasterBook/DragonTiger/DragonTiger20";
import DragonTiger20B from "./Pages/MasterBook/DragonTiger/DragonTiger20B";
import DragonTigerLion from "./Pages/MasterBook/DragonTiger/DragonTigerLion";
import DragonTigerDay from "./Pages/MasterBook/DragonTiger/DragonTigerDay";
import AmarAkbarA from "./Pages/MasterBook/AAA";
import CardsJudgement3 from "./Pages/MasterBook/3CardsJudgement";
import Card1Day from "./Pages/MasterBook/1Card1Day";
import Card2020 from "./Pages/MasterBook/1Card20";
import CasinoMeter from "./Pages/MasterBook/CasinoMeter";
import NoteNumber from "./Pages/MasterBook/NoteNumber";
import Queen from "./Pages/MasterBook/Queen";
import TeenMuflis from "./Pages/MasterBook/TeenMuflis";
import RaceTo17 from "./Pages/MasterBook/RaceTo17";
import Trio from "./Pages/MasterBook/Trio";
import CasinoWar from "./Pages/MasterBook/CasinoWar";
import CricketMatch from "./Pages/MasterLiveMatch/Cricket";
import VolleyballMatch from "./Pages/MasterLiveMatch/Volleyball";
import TennisMatch from "./Pages/MasterLiveMatch/Tennis";
import SoccerMatch from "./Pages/MasterLiveMatch/Soccer";
import BasketballMatch from "./Pages/MasterLiveMatch/Basketball";
import ChangePassword from "./Pages/ChangePassword";
import SecurityAuth from "./Pages/SecurityAuth";

function App() {
  const location = useLocation();
  const isLogin = ["/login"].includes(location.pathname);
  return (
    <>
      <main id="main-wrapper">
        <Sidebar />
        <div className={isLogin ? "page-wrapper ms-0" : "page-wrapper"}>
          <Header />
          {/* All route goes here */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/SecurityAuth" element={<SecurityAuth />} />
            <Route path="/MasterListUsersNew" element={<ListUsers />} />
            <Route path="/AddMasterUser" element={<AddUser />} />
            <Route path="/MasterCurrentEvents" element={<CurrentEvents />} />
            <Route path="/MasterControlPanel" element={<ControlPanel />} />
            <Route
              path="/MasterScheduleMatches"
              element={<ScheduleMatches />}
            />
            <Route path="/MasterBook/TeenPatti" element={<TeenPatti />} />
            <Route path="/MasterBook/MasterBookLiveTeenPatti" element={<TeenPattiDetails />} />
            <Route path="/MasterBook/AndarBahar" element={<AndarBahar />} />
            <Route path="/MasterBook/AndarBaharB" element={<AndarBaharB />} />
            <Route path="/MasterBook/Live32Cards" element={<Live32CardsA />} />
            <Route path="/MasterBook/Live32CardsB" element={<Live32CardsB />} />
            <Route path="/MasterBook/MatkaList" element={<MatkaList />} />
            <Route path="/MasterBook/Matka/Details" element={<MatkaDetails />} />
            <Route path="/MasterBook/PokerList" element={<PokerList />} />
            <Route path="/MasterBook/Pocker/Details" element={<PockerDetails />} />
            <Route path="/MasterBook/CasinoSports" element={<CasinoSports />} />
            <Route path="/MasterBook/Live/Cricket5" element={<Cricket5 />} />
            <Route path="/MasterBook/Live/CMatch20" element={<CMatch20 />} />
            <Route path="/MasterBook/Live/BollywoodTable" element={<BollywoodTable />} />
            <Route path="/MasterBook/LiveLucky7" element={<LiveLucky7 />} />
            <Route path="/MasterBook/Lucky7A" element={<Lucky7A />} />
            <Route path="/MasterBook/Lucky7B" element={<Lucky7B />} />
            <Route path="/MasterBook/RouletteAll" element={<RouletteAll />} />
            <Route path="/MasterBook/Live/RouletteA" element={<RouletteA />} />
            <Route path="/MasterBook/Live/RouletteB" element={<RouletteB />} />
            <Route path="/MasterBook/bankerplayer" element={<Baccarat />} />
            <Route path="/MasterBook/bankerplayerb" element={<BaccaratB />} />
            <Route path="/MasterBook/Live/LiveSicBo" element={<Dise />} />
            <Route path="/MasterBook/DragonTiger" element={<DragonTiger />} />
            <Route path="/MasterBook/Live/DT20" element={<DragonTiger20 />} />
            <Route path="/MasterBook/Live/DT20B" element={<DragonTiger20B />} />
            <Route path="/MasterBook/Live/DT" element={<DragonTigerLion />} />
            <Route path="/MasterBook/Live/DT6" element={<DragonTigerDay />} />
            <Route path="/MasterBook/Live/AAA" element={<AmarAkbarA />} />
            <Route path="/MasterBook/Live/3Cardj" element={<CardsJudgement3 />} />
            <Route path="/MasterBook/Live/1Card1Day" element={<Card1Day />} />
            <Route path="/MasterBook/Live/1Card2020" element={<Card2020 />} />
            <Route path="/MasterBook/Live/CMeter" element={<CasinoMeter />} />
            <Route path="/MasterBook/Live/NoteNum" element={<NoteNumber />} />
            <Route path="/MasterBook/Live/Queen" element={<Queen />} />
            <Route path="/MasterBook/Live/TeenMuflis" element={<TeenMuflis />} />
            <Route path="/MasterBook/Live/RaceTo17" element={<RaceTo17 />} />
            <Route path="/MasterBook/Live/Trio" element={<Trio />} />
            <Route path="/MasterBook/Live/War" element={<CasinoWar />} />

            {/* reports routes */}
            <Route
              path="/MasterUser/AccountStatement"
              element={<AccountStatement />}
            />
            <Route path="/MasterUser/CurrentBets" element={<CurrentBets />} />
            <Route path="/MasterUser/BetHistory" element={<BetHistory />} />
            <Route
              path="/MasterUser/GeneralReport"
              element={<GeneralReport />}
            />
            <Route path="/MasterUser/GameReport" element={<GameReport />} />
            <Route
              path="/MasterUser/CommissionReport"
              element={<CommissionReport />}
            />
            <Route path="/MasterUser/CasinoReport" element={<CasinoReport />} />
            <Route path="/MasterUser/UserProfitLoss" element={<UserProfitLoss />} />
            <Route path="/MasterUser/CasinoResultReport" element={<CasinoResultReport />} />


            {/* sports routes */}
            <Route path="/MasterLiveMatch/cricket" element={<CricketMatch />} />
            <Route path="/MasterLiveMatch/volleyball" element={<VolleyballMatch />} />
            <Route path="/MasterLiveMatch/tennis" element={<TennisMatch />} />
            <Route path="/MasterLiveMatch/soccer" element={<SoccerMatch />} />
            <Route path="/MasterLiveMatch/basketball" element={<BasketballMatch />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
