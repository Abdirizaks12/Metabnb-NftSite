import React from "react";
import Homepage from "./Homepage";
import PlaceToStay from "./PlaceToStay";
import { BrowserRouter as Router, Route,  Routes}  from "react-router-dom";
import "./app.css"
export default function App(){
    return (
      <div className="app-view">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/PlaceToStay" element={<PlaceToStay />} />
          </Routes>
        </Router>
        </div>
         )
}