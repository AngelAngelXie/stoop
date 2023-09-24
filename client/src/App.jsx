import './App.css'
import axios from 'axios';
import ExistingItems from './pages/ExistingItems';
import Map from './pages/Map';
import Header from './Header';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;


function App() {

  return (
    <>
      <div>
        <Header></Header>
        <div>
          <Map></Map>
        </div>
        <div className="px-16 py-8">
          <ExistingItems/>
        </div>
        
        

      </div>
    </>
  )
}

export default App
