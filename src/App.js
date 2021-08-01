import "./App.css";
import TimerClass from "./components/TimerClass/TimerClass";
import TimerFunctional from "./components/TimerFunctional/TimerFunctional";

function App() {
  return (
    <div className="App">
      <TimerFunctional />
      <TimerClass />
    </div>
  );
}

export default App;
