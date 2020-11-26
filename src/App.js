import './App.css';
import Footer from './components/Footer';
import { Gallery } from './components/Gallery';
import Header from './components/Header';
import Splash from './components/Splash';

function App() {
  return (
    <div className="App">
      <Header/>
      <Splash/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
