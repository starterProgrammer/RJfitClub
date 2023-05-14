import './App.css';
import { Hero } from './components/Hero/Hero';
import { Journey } from './components/Journey/Journey';
import { Programms } from './components/Programms/Programms';
import { Reasons } from './components/Reasons/Reasons';
import { Testimotinal } from './components/Testimotinal/Testimotinal';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programms />
      <Reasons />
      <Journey />
      <Testimotinal />
    </div>
  );
}

export default App;
