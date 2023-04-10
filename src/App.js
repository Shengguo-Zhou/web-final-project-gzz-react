// import logo from './logo.svg';
import './App.css';
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
function App() {
  return (
      <div style={{"background": "black"}}>
      <BrowserRouter>
        <div className="container" style={{"background": "black"}}>
          <Routes>
            <Route path="/*" element={<Tuiter/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;



