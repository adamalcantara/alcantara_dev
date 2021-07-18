import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Portfolio from "./Pages/Portfolio/Portfolio"

function App() {
  return (
    <Router>
      <div className="page">
        <Navbar />

        <div className="pageContent">
          <Route exact path="/" component={Portfolio} />
        </div>
      </div>

    </Router>
    
  );
}

export default App;
