import React from "react";
import { Link } from "react-router-dom";

import "./home.css";
import UserTestimonial from "./UserTestimonial";
import Advantage from "./Advantage";
import { userTestimonials } from "./data/userTestimonials";
import { advantages } from "./data/advantages";

export default function Home() {
    return (
        <>
            <section id="home">
                <div className="hero">
                    <div className="hero-img">
                        <img src={require("../../images/hero-image.jpg")} alt="" />
                    </div>

                    <div className="hero-text-wrapper">
                        <div className="hero-title">
                            <span>BUY NEW OR USED CAR ONLINE</span>
                            <h1>FIND YOUR DREAM CAR</h1>
                            <span>Get the latest car reviews & best deals</span>
                        </div>
                        <div className="hero-text">
                            <h3>BUYING AND SELLING DONE EASIER</h3>
                            <p>
                                Shop from the comfort of your own home with our user-friendly online car sales website.
                                Browse our extensive inventory and purchase your dream car with confidence.
                            </p>
                            <Link to={"/catalog"}>
                                <button className="btn">EXPLORE OUR CATALOG</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="home-desc container">
                    {advantages.map((advantage) => (
                        <Advantage {...advantage} key={advantage.id} />
                    ))}
                </div>

                <div className="home-testimonials container">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonials-list">
                        {userTestimonials.map((user) => (
                            <UserTestimonial {...user} key={user.id} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
