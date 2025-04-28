import "./nav.css"
import { FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
function Navbar()
{
    return(
        <div id="nav_bar">
            <div className="right-nav">
             Finexo   
            </div>
            <div className="left-nav">
                <span>HOME</span>
                <span>ABOUT</span>
                <span>SERVICES</span>
                <span>WHY US</span>
                <span>TEAM</span>
                <span><IoIosPerson />LOGIN</span>
                <span><FaSearch /></span>
            </div>

        </div>

    )
}
export default Navbar