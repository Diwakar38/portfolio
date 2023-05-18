import "./heroImgStyle.css"
import back from "../assets/back.jpg"
import React from "react"
import { Link } from "react-router-dom"

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="back-img" src={back} alt="Background" />
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