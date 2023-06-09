import './App.css';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Journey } from './components/Journey/Journey';
import { Programms } from './components/Programms/Programms';
import { Reasons } from './components/Reasons/Reasons';
import { Subscribe } from './components/Subscribe/Subscribe';
import { Testimotinal } from './components/Testimotinal/Testimotinal';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programms />
      <Reasons />
      <Journey />
      <Testimotinal />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
