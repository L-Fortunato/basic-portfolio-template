import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as HashRouter } from 'react-router-dom'
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
          <AnimatedRoute exact path='/basic-portfolio-template' component={Home} atEnter={{ opacity: 0 }} atLeave={{ opacity: 1 }} atActive={{ opacity: 1 }} />
          <AnimatedRoute exact path='/about' component={About} atEnter={{ opacity: 0 }} atLeave={{ opacity: 1}} atActive={{ opacity: 1 }} />
        </AnimatedSwitch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
