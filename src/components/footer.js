import { FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./footerStyle.css"
import React from "react"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>National Institute of Technology Karnataka</p>
                            <p>Surathkal, Karnataka, India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <h4 style={{ color: "#fff" }}>
                            +91 8527168818
                        </h4>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <h4 style={{ color: "#fff" }}>
                            diwakar.arya1999@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>Current third year MCA student seeking developmental opportunities. Diligent, Patient, and focused, looking to provide value to a skilled team </p>
                    <div className="Social">
                        <FaLinkedinIn size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaGithub size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;