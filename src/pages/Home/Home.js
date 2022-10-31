import Navbar from "../../components/Navbar/Navbar"
import Main from "./Main"
import Delivery from "./Delivery"
import PopularProducts from "./PopularProducts"
import Footer from "../../components/Footer/Footer"
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
            <Footer />
        </div>
    )
}

export default Home;