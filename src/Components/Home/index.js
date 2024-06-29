import NavBar from "../Navbar";
import HomeMain from "./Home-main";
import HomeLocationBar from "./Home-location-time";
import HomeHeading from "./Home-heading-sec";
import Homebenefit from "./Home-benefits";
import StayPlace from "./Home-featured-place";
import StayTypesName from "./Home-stay-place";
import HomeHowitworks from "./Home-howIt";
import Footer from "../Footer";
import "./index.css"

const HomePage=()=>
{
    return(
        <div>
            <NavBar/>
            <HomeMain/>
            <HomeLocationBar/>
            <HomeHeading/>
            <Homebenefit/>
            <StayPlace/>
            <StayTypesName/>
            <HomeHowitworks/>
            
        </div>
    )
}

export default HomePage;