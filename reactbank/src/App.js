import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MakeAccount from './component/MakeAccount';
import AccountInfo from './component/AccountInfo';
import AllAccountInfo from './component/AllAccountInfo';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import BankTop from './component/BankTop';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BankTop />
      <Routes>
        <Route exact path="/makeAccount" element={<MakeAccount />} />
        <Route exact path="/accountInfo" element={<AccountInfo />} />
        <Route exact path="/deposit" element={<Deposit />} />
        <Route exact path="/withdraw" element={<Withdraw />} />
        <Route exact path="/allAccountInfo" element={<AllAccountInfo />} />
      </Routes>
    </div>
  );
}

export default App;
