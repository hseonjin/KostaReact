import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AccountInfo from './component/AccountInfo';
import AllAccountInfo from './component/AllAccountInfo';
import Header from './component/Header';
import Main from './component/Main';
import MakeAccount from './component/MakeAccount';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import allAccountInfo from './component/AllAccountInfo';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/makeAccount" element={<MakeAccount />} />
        <Route exact path="/accountInfo" element={<AccountInfo />} />
        <Route exact path="/deposit" element={<Deposit />} />
        <Route exact path="/withdraw" element={<Withdraw />} />
        <Route exact path="/allAccountInfo" element={<AllAccountInfo />} />
        <Route exact path="/all" element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
