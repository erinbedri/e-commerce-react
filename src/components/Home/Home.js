import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

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
                    <div className="desc-item">
                        <i className="fa-solid fa-magnifying-glass" />
                        <div className="desc-text">
                            <h3>Find Your Dream Car</h3>
                            <p>
                                At Cars, we make buying and selling cars easier than ever. Whether you're looking to
                                upgrade your current ride or sell your old car, we've got you covered. Our platform
                                connects car sellers with potential buyers, enabling them to share detailed information
                                about their vehicles and contact each other directly.
                            </p>
                        </div>
                    </div>

                    <div className="desc-item">
                        <i className="fa-solid fa-car-on" />
                        <div className="desc-text">
                            <h3>Discover Your Next Dream Car </h3>
                            <p>
                                Explore a wide range of cars from classic models to the latest releases. Browse our
                                listings and find the perfect vehicle for you. Our detailed listings include all the
                                information you need to make an informed decision, including photos, descriptions, and
                                seller contact information.
                            </p>
                        </div>
                    </div>

                    <div className="desc-item">
                        <i className="fa-solid fa-sack-dollar" />
                        <div className="desc-text">
                            <h3>Sell Your Car with Ease </h3>
                            <p>
                                Selling your car has never been easier. Simply create a listing and share the details of
                                your vehicle. Our platform allows you to reach a large audience of potential buyers,
                                helping you get the best price for your car.
                            </p>
                        </div>
                    </div>

                    <div className="desc-item">
                        <i className="fa-solid fa-person-rays" />
                        <div className="desc-text">
                            <h3>Join the Cars Community</h3>
                            <p>
                                Join our community of car enthusiasts and start buying and selling cars today. Register
                                now to access all of our features and start making connections in the automotive world.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="home-testimonials container">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonials-list">
                        <div className="testimonials-item">
                            <p>
                                "I was skeptical about using an online platform to buy a car, but I was pleasantly
                                surprised by the level of support and security offered by Cars. The entire experience
                                was fantastic and I would definitely use the platform again in the future."
                            </p>
                            <img
                                src="https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875"
                                alt="testimonial image"
                            />
                            <h3>Roger Santiago</h3>
                        </div>
                        <div className="testimonials-item">
                            <p>
                                "I was looking for a new car and stumbled upon Cars. I was amazed by the variety of
                                listings and the detailed information provided. I was able to find my dream car and the
                                entire buying process was seamless. Thank you, Cars!"
                            </p>
                            <img
                                src="https://static01.nyt.com/images/2022/05/19/opinion/firstpersonPromo/firstpersonPromo-mediumSquareAt3X.jpg"
                                alt="testimonial image"
                            />
                            <h3>Maria Petrowa</h3>
                        </div>

                        <div className="testimonials-item">
                            <p>
                                "I've been a car enthusiast for years and was thrilled to discover the Cars community.
                                The platform makes it easy to connect with other car enthusiasts and find amazing
                                vehicles. I'm so glad I found this app!"
                            </p>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRlKoajg43IQzYuAfQ_hcvvgDfwe9aELgbQ&usqp=CAU"
                                alt="testimonial image"
                            />
                            <h3>Mark Antonio</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
