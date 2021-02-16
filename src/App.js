import "./styles.css";
import Popup from "./Popup";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Popup />
      </Router>
    </div>
  );
}
