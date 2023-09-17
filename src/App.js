import "./App.css";
import WeatherApp from "./components/WeatherApp/WeatherApp";

// ---- Images ---- //
import search_icon from "./components/Assets/search.png";
import clear_icon from "./components/Assets/clear.png";
import cloud_icon from "./components/Assets/cloud.png";

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
