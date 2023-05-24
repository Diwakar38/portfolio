import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/heroImg2";

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="ABOUT." text="Learn a little about me" />

            <Footer />
        </div>
    )
}

export default About