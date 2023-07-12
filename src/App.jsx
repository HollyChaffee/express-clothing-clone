import './App.css'
import NavBar from './components/header/NavBar'
import Home from './pages/Home'
import LabelsRow from "./components/labels/LabelsRow";
//import PictureGrid from "./components/PictureGrid";

function App() {

  return (
    <div className="App">
      <NavBar />
      <LabelsRow />
      <Home />
   
     
    </div>

  )
}

export default App