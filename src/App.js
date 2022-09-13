import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>

           
            <Route path='/' excat element={<Home />}/>
            <Route path="/search" element={<SearchPage />}/>
              
          </Routes>
      </div>
    </Router>
  );
}

export default App;
