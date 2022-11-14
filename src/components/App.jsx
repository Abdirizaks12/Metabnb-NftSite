import React from "react";
import Homepage from "./Homepage";
import PlaceToStay from "./PlaceToStay";
import { BrowserRouter as Router, Route,  Routes}  from "react-router-dom";

export default function App(){
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/PlaceToStay" element={<PlaceToStay />} />
          </Routes>
        </Router> )
}