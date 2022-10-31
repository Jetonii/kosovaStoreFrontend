import Navbar from "../../components/Navbar/Navbar"
import Main from "./Main"
import Delivery from "./Delivery"
import PopularProducts from "./PopularProducts"
import LoyaltyMembership from "./LoyaltyMembership"
import Footer from "../../components/Footer/Footer"
import PeopleSaying from "../PeopleSaying/PeopleSaying"
import FAQs from "./FAQs"
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <hr className="hr__style"></hr>
            <Delivery />
            <hr className="hr__style"></hr>
            <PopularProducts />
            <hr className="hr__style"></hr>
            <LoyaltyMembership/>
            <hr className="hr__style"></hr>
            <PeopleSaying/>
            <hr className="hr__style"></hr>
            <FAQs/>
            <Footer />
        </div>
    )
}

export default Home;