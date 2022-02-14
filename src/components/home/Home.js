
import "./Home.css"
import Header from "../header/Header"
import Tours from "../tours/Tours"
import Footer from "../footer/Footer"

export default function Home(props) {
    return (
    <div className="home">
        <Header />
        <Tours data2={props.data} />
        <Footer />
    </div>
    )

}