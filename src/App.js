import './App.css';
import NaverMapComponent from './Components/NaverMaps';
import { NavermapsProvider } from 'react-naver-maps';

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const latitude = queryParams.get('latitude');

  const longitude = queryParams.get('longitude');

  return (
    <NavermapsProvider
      ncpClientId='83bfuniegk'
    // or finClientId, govClientId  
    >
      <div style={{ width: 300, height: 300, backgroundColor: "#f7f7f7" }}>
        <NaverMapComponent longitude={longitude} latitude={latitude} />
      </div>
    </NavermapsProvider>
  );
}

export default App;
