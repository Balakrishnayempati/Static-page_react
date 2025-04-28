import Navbar from "./Navbar"
import Hero from "./hero"
import { Heroin } from "./heroin"
import "./App.css"
function App()
{
  return(
    <div>
      {/* <h1>Balu Yempati</h1>
      <p>Number</p> */}
      <Navbar/>
      <div id="nn">
        <Hero></Hero>
        <Heroin></Heroin>

      </div>
    </div>
    
  )
}

export default App