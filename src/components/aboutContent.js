import { Link } from "react-router-dom"
import "./aboutContentStyles.css"
import React from "react"


const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>I'm a third year MCA student from NIT Karnataka</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent