import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Grid from "./Components/Grid";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Grid />
      </div>
    </BrowserRouter>
  );
}

export default App;
