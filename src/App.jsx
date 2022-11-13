import './App.css'
import Navbar from './components/Navbar'
// import { BrowserRouter as Router, Route,  Routes}  from "react-router-dom";
import Homepage from "./components/Homepage"
import TopContent from './components/TopContent'
import Partners from './components/Partners'
import Adventure from './components/Adventure'
import Giftcard from './components/Giftcard'
import Footer from './components/Footer'
// import BuyPage from "./BuyPage"

function App() {
return(
  <div className='app'>
    <TopContent/>
    <Partners/>
    <Adventure/>
    <Giftcard/>
    <Footer/>

  </div>
)

  // return (
  //   <Router>
  //     <Routes>
  //       <Route exact path="/" element={<Homepage />} />
  //       <Route path="/" element={<BuyPage />} />
  //     </Routes>
  //   </Router>   
  // )
}

export default App
