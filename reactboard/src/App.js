import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router';
import BoardList from './components/BoardList';
import DetailForm from './components/DetailForm';
import WriteForm from './components/WriteForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/boardList" element={<BoardList/>} />
        <Route exact path="/detailForm" element={<DetailForm/>} />
        <Route exact path="/writeForm" element={<WriteForm/>} />

      </Routes>
    </div>
  );
}

export default App;
