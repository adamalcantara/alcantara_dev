import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { GlobalStyles, lightTheme, darkTheme } from "./Styles/globalStyles"
import { useDarkMode } from "./Styles/useDarkMode";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact"

const Container = styled.div`

`;

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  return (
    <ThemeProvider theme={themeMode}>
       <Container>
    <Router>
      <GlobalStyles />
      <div className="page">
        <Navbar theme={theme} toggleTheme={toggleTheme}/>
        {/* <h1 id="heading">Alcantara Development</h1> */}
        <div className="pageContent">
          
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </div>

    </Router>
    </Container>
    </ThemeProvider>
  
  );
}

export default App;
