import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__upper__part">
                <div>
                    <p className="footer__logo">Kosova Store</p>
                    <p className="footer__moto">Never been closer.</p>
                </div>
                <ul>
                    <li>WEEBLY THEMES</li>
                    <li>PRE-SALE FAQS</li>
                    <li>SUBMIT A TICKET</li>
                </ul>
                <ul>
                    <li>SERVICES</li>
                    <li>THEME TWEAK</li>
                </ul>
                <ul>
                    <li>SHOWCASE</li>
                    <li>WIDGETKIT</li>
                    <li>SUPPORT</li>
                </ul>
                <ul>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>AFFILIATES</li>
                    <li>RESOURCES</li>
                </ul>
            </section>

            <section className="footer__bottom__part">
                <a href="https://www.facebook.com/"><FaFacebookF size={30} color={"white"} /></a>
                <a href="https://instagram.com/"><FaInstagram size={30} color={"white"} /></a>
                <a href="https://www.linkedin.com/"><FaLinkedinIn size={30} color={"white"} /></a>
                <a href="https://www.twitter.com/"><FaTwitter size={30} color={"white"} /></a>
                <a href="https://www.youtube.com/"><FaYoutube size={30} color={"white"} /></a>
            </section>
            <center>
                <p>Copyright © 2022 - Developed by Jeton Sllamniku</p>
            </center>

        </footer>


    )
}

export default Footer