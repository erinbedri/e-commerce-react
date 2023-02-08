import React from "react";

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
                            <button>EXPLORE OUR CATALOG</button>
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
            </section>
        </>
    );
}
