import Navbar from "./Components/Navbar/nav";
import Crypto from "./Components/Navbar/Crypto/Crypto";
import Services from "./Components/Navbar/Services/Services";
import About from "./Components/Navbar/About/About";
import Why from "./Components/Navbar/why/Why";
function App()
{
  return(
    <div>
      <Navbar></Navbar>
      <Crypto></Crypto>
      <Services></Services>
      <About></About>
      <Why></Why>
    </div>
  )
}
export default App