import AddItemPage from './pages/addItemPage'
import './App.css'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <div>
        <AddItemPage></AddItemPage>
      </div>
    </>
  )
}

export default App
