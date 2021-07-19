import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact"

const Container = styled.div`

`;

function App() {
  return (
    <Container>
    <Router>
      <div className="page">
        <Navbar />

        <div className="pageContent">
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </div>

    </Router>
    </Container>
    
  );
}

export default App;
