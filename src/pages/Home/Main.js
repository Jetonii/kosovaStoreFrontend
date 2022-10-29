import "./Home.css"


const Main = () => {
    return (
        <>
        <div></div>
        <main className="home__main">
            <section className="home__left__part">
                <h1 className="home__main__h1">Order groceries for delivery or pickup today </h1>
                <h4 className="home__main__h4">Never been closer.</h4>
                <button className="home__main__button" type='button'>Start shopping</button>
            </section>
            <section className="home__right__part">
                <img src={require("../assets/vegetables.png")} />
            </section>
        </main>
        </>

    )
}

export default Main;