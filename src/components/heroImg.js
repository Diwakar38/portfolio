import "./heroImgStyle.css"
import React from "react"
import { Link } from "react-router-dom"

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="back-img" src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="Background" />
            </div>
            <div className="intro">
                <p>HI! I'm an aspiring software engineer</p>
                <h1>Backend Developer.</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;