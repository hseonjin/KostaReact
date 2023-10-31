import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ElecChargeStatList from './ElecChargeStatList';
import CulturalEventInfo from './CulturalEventInfo';
import EvInfoService from './EvInfoService';

function App() {
  return (
    <div className="App">
      {/* <ElecChargeStatList /> */}
      {/* <CulturalEventInfo /> */}
      <EvInfoService />
    </div>
  );
}

export default App;
