import Navbar from './Components/Navbar';
import Billboard from './Components/Billboard';
import Footer from './Components/Footer';
import './index.css';

function App() {

  return (
       <div className="App">
        <Navbar/>
              <div className="content">
           <Billboard/>
          </div>
        </div>
  );
}

export default App;

