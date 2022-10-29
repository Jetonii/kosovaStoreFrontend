import Navbar from "../../components/Navbar/Navbar"
import Main from "./Main"
import Delivery from "./Delivery"
import PopularProducts from "./PopularProducts"
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <hr></hr>
            <Delivery/>
            <hr></hr>
            <PopularProducts/>
            <Footer />
        </div>
    )
}

export default Home;