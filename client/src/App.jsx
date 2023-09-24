import AddItemPage from './pages/addItemPage'
import './App.css'
import axios from 'axios';
import ExistingItems from './pages/ExistingItems';
import Map from './pages/Map';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <div>
        <Map></Map>
        {/* <AddItemPage/>
        <ExistingItems/> */}

      </div>
    </>
  )
}

export default App
