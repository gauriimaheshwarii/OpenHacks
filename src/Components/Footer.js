import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-curve-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#181c21" fillOpacity="1" d="M0,320L48,304C96,288,192,256,288,250.7C384,245,480,267,576,277.3C672,288,768,288,864,261.3C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <footer className="footer">
                <div className="footer-first-sub-column"> {/* First Column of the Footer which contain name */}
                    <h1 className="footer-first-sub-column-name"><span style={{color: "rgb(0, 222, 52)", marginRight: 4, padding: 0, fontFamily: "'Shantell Sans', cursive"}}>Eco</span><span style={{margin: 0, padding: 0, fontFamily: "'Tilt Neon', cursive", fontWeight: "lighter"}}>Circle</span></h1>
                    <div className="footer-first-sub-column-copy-write">
                        <h4>Copyright © 2023. All rights reserved.</h4>
                        <h4>Designed with ❤️</h4>
                    </div>
                </div>
                <div className="footer-second-sub-column"> {/* Second Column of the Footer which contain Nav Links */}
                    <div className="footer-second-sub-column-nav-links-container">
                        <NavLink to="/" className="footer-second-sub-column-nav-links" style={{textDecoration: "none"}}>Home</NavLink>
                        <NavLink to="/store" className="footer-second-sub-column-nav-links" style={{textDecoration: "none"}}>Store</NavLink>
                        <NavLink to="/api" className="footer-second-sub-column-nav-links"style={{textDecoration: "none"}}>Api</NavLink>
                        {/* <a href="#about" className="footer-second-sub-column-nav-links" scroll={false}>Contact</a> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;