import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Style.scss";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Sidenav from "./Components/SideNav";
import Header from "./Components/Header";
import MarketAnalysis from "./Pages/MarketAnalysis";
import MultiAccountLogin from "./Pages/MultiAccountLogin";
import CreateAccount from "./Pages/CreateAccount";
import ActiveUsers from "./Pages/ActiveUsers";
import AccountList from "./Pages/AccountList";
import Bank from "./Pages/Bank";
import AccountStatement from "./Pages/Reports/AccountStatement";
import ProfitLoss from "./Pages/Reports/ProfitLoss";
import CurrentBets from "./Pages/Reports/CurrentBets";
import UserHistory from "./Pages/Reports/UserHistory";
import GeneralLock from "./Pages/Reports/GeneralLock";
import CasinoResult from "./Pages/Reports/CasinoResult";
import TurnOver from "./Pages/Reports/TurnOver";
import LiveCasinoResult from "./Pages/Reports/LiveCasinoResult";
import SportbookReport from "./Pages/Reports/SportbookReport";
import UserAuthentication from "./Pages/Reports/UserAuthentication";
import CasinoList from "./Pages/CasinoList";
import VirtualCasino from "./Pages/VirtualCasino";
import Politics from "./Pages/Events/Politics";
import Cricket from "./Pages/Events/Cricket";
import Cricket2 from "./Pages/Events/Cricket2";
import Football from "./Pages/Events/Football";
import Tennis from "./Pages/Events/Tennis";
import HorseRacing from "./Pages/Events/HorseRacing";
import GreyhoundRacing from "./Pages/Events/GreyhoundRacing";
import TableTennis from "./Pages/Events/TableTennis";
import Badminton from "./Pages/Events/Badminton";
import ESoccer from "./Pages/Events/ESoccer";
import Basketball from "./Pages/Events/Basketball";
import Volleyball from "./Pages/Events/Volleyball";
import Snooker from "./Pages/Events/Snooker";
import EGames from "./Pages/Events/EGames";
import Futsal from "./Pages/Events/Futsal";
import Boxing from "./Pages/Events/Boxing";
import Chess from "./Pages/Events/Chess";
import SecureAuth from "./Pages/SecureAuth";
import SuperOver2 from "./Pages/Casino/SuperOver2";
import BallbyBall from "./Pages/Casino/BallbyBall";
import TeenPattiInstant3 from "./Pages/Casino/TeenPattiInstant3";
import Sicbo from "./Pages/Casino/Sicbo";
import TeenPattiInstant2 from "./Pages/Casino/TeenPattiInstant2";
import TeenPattiDay1 from "./Pages/Casino/TeenPattiDay1";
import TeenPatti20 from "./Pages/Casino/TeenPatti20";
import TeenPattiTest from "./Pages/Casino/TeenPattiTest";
import TeenPattiOpen from "./Pages/Casino/TeenPattiOpen";
import PokerOneDay from "./Pages/Casino/PokerOneDay";
import Poker20 from "./Pages/Casino/Poker20";
import Poker6Player from "./Pages/Casino/Poker6Player";
import Baccarat from "./Pages/Casino/Baccarat";
import Baccarat2 from "./Pages/Casino/Baccarat2";
import DragonTigert20 from "./Pages/Casino/DragonTigert20";
import DragonTigert1Day from "./Pages/Casino/DragonTigert1Day";
import DTL20 from "./Pages/Casino/DTL20";
import DragonTigert202 from "./Pages/Casino/DragonTigert202";
import Card32A from "./Pages/Casino/Card32A";
import Card32B from "./Pages/Casino/Card32B";
import AndarBahar from "./Pages/Casino/AndarBahar";
import AndarBahar2 from "./Pages/Casino/AndarBahar2";
import Lucky7 from "./Pages/Casino/Lucky7";
import Lucky7eu from "./Pages/Casino/Lucky7eu";
import ThreeCardJ from "./Pages/Casino/ThreeCardJ";
import WarCasino from "./Pages/Casino/WarCasino";
import WorliMatka from "./Pages/Casino/WorliMatka";
import InstantWorli from "./Pages/Casino/InstantWorli";
import AAA from "./Pages/Casino/AAA";
import BollywoodTable from "./Pages/Casino/BollywoodTable";
import Lottery from "./Pages/Casino/Lottery";
import CricketV3 from "./Pages/Casino/CricketV3";
import CMatch20 from "./Pages/Casino/CMatch20";
import Meter from "./Pages/Casino/Meter";
import TeenPatti2 from "./Pages/Casino/TeenPatti2";
import Queen from "./Pages/Casino/Queen";
import Race20 from "./Pages/Casino/Race20";
import Lucky7eu2 from "./Pages/Casino/Lucky7eu2";
import SuperOver1 from "./Pages/Casino/SuperOver";
import Trap from "./Pages/Casino/Trap";
import TeenPatti2Cards from "./Pages/Casino/TeenPatti2Cards";
import CardBaccarat29 from "./Pages/Casino/CardBaccarat29";
import MuflisTeenPatti from "./Pages/Casino/MuflisTeenPatti";
import RaceTo17 from "./Pages/Casino/RaceTo17";
import TeenPattit20B from "./Pages/Casino/TeenPattit20B";
import Trio from "./Pages/Casino/Trio";
import NoteNumber from "./Pages/Casino/NoteNumber";
import KBC from "./Pages/Casino/KBC";
import OneCard2020 from "./Pages/Casino/OneCard2020";
import OneCard1Day from "./Pages/Casino/OneCard1Day";
import AndarBahar3 from "./Pages/Casino/AndarBahar3";
import AAA2 from "./Pages/Casino/AAA2";
import Race2 from "./Pages/Casino/Race2";
import TeenPattiInstant from "./Pages/Casino/TeenPattiInstant";
import DusKaDum from "./Pages/Casino/DusKaDum";
import OneCardMeter from "./Pages/Casino/OneCardMeter";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <main id="layout-wrapper">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Sidenav />
        <Header />
        {/* All route goes here */}
        <Routes>
          <Route path="/admin/home" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/market-analysis" element={<MarketAnalysis />} />
          <Route
            path="/admin/multi-account-login"
            element={<MultiAccountLogin />}
          />
          <Route path="/admin/create-account" element={<CreateAccount />} />
          <Route path="/admin/active-users" element={<ActiveUsers />} />
          <Route path="/admin/users" element={<AccountList />} />
          <Route path="/admin/bank" element={<Bank />} />

          {/* reports routes */}
          <Route
            path="/admin/reports/accountstatement"
            element={<AccountStatement />}
          />
          <Route path="/admin/reports/profitloss" element={<ProfitLoss />} />
          <Route path="/admin/reports/currentbets" element={<CurrentBets />} />
          <Route path="/admin/reports/userhistory" element={<UserHistory />} />
          <Route path="/admin/settings/userlock" element={<GeneralLock />} />
          <Route
            path="/admin/reports/casinoresult"
            element={<CasinoResult />}
          />
          <Route path="/admin/reports/turnover" element={<TurnOver />} />
          <Route
            path="/admin/reports/livecasinoreport"
            element={<LiveCasinoResult />}
          />
          <Route
            path="/admin/reports/sportbookreport"
            element={<SportbookReport />}
          />
          <Route
            path="/admin/reports/authlist"
            element={<UserAuthentication />}
          />

          {/* events routes */}
          <Route path="/admin/casino/list" element={<CasinoList />} />
          <Route path="/admin/vcasino/list" element={<VirtualCasino />} />
          <Route path="/admin/game/details/politics" element={<Politics />} />
          <Route path="/admin/game/details/cricket" element={<Cricket />} />
          <Route path="/admin/game/details/cricket2" element={<Cricket2 />} />
          <Route path="/admin/game/details/football" element={<Football />} />
          <Route path="/admin/game/details/tennis" element={<Tennis />} />
          <Route
            path="/admin/game/details/horse-racing"
            element={<HorseRacing />}
          />
          <Route
            path="/admin/game/details/greyhound-racing"
            element={<GreyhoundRacing />}
          />
          <Route
            path="/admin/game/details/table-tennis"
            element={<TableTennis />}
          />
          <Route path="/admin/game/details/badminton" element={<Badminton />} />
          <Route path="/admin/game/details/e-soccer" element={<ESoccer />} />
          <Route
            path="/admin/game/details/basketball"
            element={<Basketball />}
          />
          <Route
            path="/admin/game/details/volleyball"
            element={<Volleyball />}
          />
          <Route path="/admin/game/details/snooker" element={<Snooker />} />
          <Route path="/admin/game/details/egames" element={<EGames />} />
          <Route path="/admin/game/details/futsal" element={<Futsal />} />
          <Route path="/admin/game/details/boxing" element={<Boxing />} />
          <Route path="/admin/game/details/chess" element={<Chess />} />
          <Route path="/admin/secureauth" element={<SecureAuth />} />

          {/* casino routes */}
          <Route path="/admin/casino/superover2" element={<SuperOver2 />} />
          <Route path="/admin/casino/ballbyball" element={<BallbyBall />} />
          <Route
            path="/admin/casino/teenpattiinstant3"
            element={<TeenPattiInstant3 />}
          />
          <Route path="/admin/casino/sicbo" element={<Sicbo />} />
          <Route
            path="/admin/casino/teenpattiinstant2"
            element={<TeenPattiInstant2 />}
          />
          <Route
            path="/admin/casino/teenpattioneday"
            element={<TeenPattiDay1 />}
          />
          <Route path="/admin/casino/teenpattit20" element={<TeenPatti20 />} />
          <Route
            path="/admin/casino/teenpattitest"
            element={<TeenPattiTest />}
          />
          <Route
            path="/admin/casino/teenpattiopen"
            element={<TeenPattiOpen />}
          />
          <Route path="/admin/casino/pokeroneday" element={<PokerOneDay />} />
          <Route path="/admin/casino/poker20" element={<Poker20 />} />
          <Route path="/admin/casino/poker6player" element={<Poker6Player />} />
          <Route path="/admin/casino/baccarat" element={<Baccarat />} />
          <Route path="/admin/casino/baccarat2" element={<Baccarat2 />} />
          <Route
            path="/admin/casino/dragontigert20"
            element={<DragonTigert20 />}
          />
          <Route
            path="/admin/casino/dragontigeroneday"
            element={<DragonTigert1Day />}
          />
          <Route path="/admin/casino/dragontigerliont20" element={<DTL20 />} />
          <Route
            path="/admin/casino/dragontigert202"
            element={<DragonTigert202 />}
          />
          <Route path="/admin/casino/card32a" element={<Card32A />} />
          <Route path="/admin/casino/card32b" element={<Card32B />} />
          <Route path="/admin/casino/andar-bahar" element={<AndarBahar />} />
          <Route path="/admin/casino/andar-bahar2" element={<AndarBahar2 />} />
          <Route path="/admin/casino/lucky7" element={<Lucky7 />} />
          <Route path="/admin/casino/lucky7eu" element={<Lucky7eu />} />
          <Route path="/admin/casino/3cardj" element={<ThreeCardJ />} />
          <Route path="/admin/casino/war" element={<WarCasino />} />
          <Route path="/admin/casino/worli" element={<WorliMatka />} />
          <Route path="/admin/casino/instantworli" element={<InstantWorli />} />
          <Route path="/admin/casino/aaa" element={<AAA />} />
          <Route
            path="/admin/casino/bollywoodtable"
            element={<BollywoodTable />}
          />
          <Route path="/admin/casino/lottery" element={<Lottery />} />
          <Route path="/admin/casino/cricketv3" element={<CricketV3 />} />
          <Route path="/admin/casino/cmatch20" element={<CMatch20 />} />
          <Route path="/admin/casino/meter" element={<Meter />} />
          <Route path="/admin/casino/teenpatti2" element={<TeenPatti2 />} />
          <Route path="/admin/casino/queen" element={<Queen />} />
          <Route path="/admin/casino/race20" element={<Race20 />} />
          <Route path="/admin/casino/lucky7eu2" element={<Lucky7eu2 />} />
          <Route path="/admin/casino/superover" element={<SuperOver1 />} />
          <Route path="/admin/casino/trap" element={<Trap />} />
          <Route
            path="/admin/casino/teenpatti2cards"
            element={<TeenPatti2Cards />}
          />
          <Route
            path="/admin/casino/29cardbaccarat"
            element={<CardBaccarat29 />}
          />
          <Route path="/admin/casino/teenmuf" element={<MuflisTeenPatti />} />
          <Route path="/admin/casino/raceto17" element={<RaceTo17 />} />
          <Route
            path="/admin/casino/teenpattit20b"
            element={<TeenPattit20B />}
          />
          <Route path="/admin/casino/trio" element={<Trio />} />
          <Route path="/admin/casino/notenum" element={<NoteNumber />} />
          <Route path="/admin/casino/kbc" element={<KBC />} />
          <Route path="/admin/casino/1card2020" element={<OneCard2020 />} />
          <Route path="/admin/casino/1card1day" element={<OneCard1Day />} />
          <Route path="/admin/casino/ab3" element={<AndarBahar3 />} />
          <Route path="/admin/casino/aaa2" element={<AAA2 />} />
          <Route path="/admin/casino/race2" element={<Race2 />} />
          <Route
            path="/admin/casino/teenpattiinstant"
            element={<TeenPattiInstant />}
          />
          <Route path="/admin/casino/dum10" element={<DusKaDum />} />
          <Route path="/admin/casino/cmeter1" element={<OneCardMeter />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
