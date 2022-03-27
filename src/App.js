import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import DetailData from "./pages/detailData";
import Keahlian from "./pages/keahlian";
import PengalamanKerja from "./pages/pengalamanKerja";
import PersonalData from "./pages/personalData";
import RiwayatPendidikan from "./pages/riwayatPendidikan";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={DetailData} />
        <Route path="/skill" exact component={Keahlian} />
        <Route path="/experience" exact component={PengalamanKerja} />
        <Route path="/personalData" exact component={PersonalData} />
        <Route path="/educations" exact component={RiwayatPendidikan} />
      </Switch>
    </Router>
  );
}

export default App;
