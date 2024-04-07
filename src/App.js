import React from 'react'
import 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Header from './components/Header';
import GlobalStyle from './assets/styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';





const App = () => {
  const theme = {
    colors: {
      bg: "#003366",
      text: "#000",
      white: "#fff",
      tinity: "#4C7093"
    },
    media: {mobile: "768px", tab: "998px"}
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Router>
            <Header />
              <Routes>
                <Route exact path='/' element={< Home/>}></Route>
                <Route exact path='/calc' element= {<About/>}></Route>
                <Route exact path='/contact' element= {<Contact/>}></Route>
          </Routes>
          <Footer />
          </Router>
    </ThemeProvider>
    </div>
  )
}

export default App