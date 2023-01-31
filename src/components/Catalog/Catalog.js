import React from "react";

import "./catalog.css";

export default function Catalog() {
    return (
        <section id="catalog" className="container">
            <h2 className="title">Car Catalog</h2>
            <div className="catalog-list">
                <div className="catalog-header">
                    <span />
                    <span>Manufacturer</span>
                    <span>Model</span>
                    <span>Category</span>
                    <span>Mileage</span>
                    <span>Year</span>
                    <span>Price</span>
                    <span>Location</span>
                </div>
                <div className="catalog-item">
                    <img
                        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f53054f4-30da-4a94-8aac-1aa6f662996d/bvlatuR/std/1200x628/Model-S-Social?quality=auto-medium&format=auto"
                        alt="car"
                    />
                    <span>Tesla</span>
                    <span>Model S</span>
                    <span>Electric Car</span>
                    <span>24.000 km</span>
                    <span>2018</span>
                    <span>EUR 43.000</span>
                    <span>Berlin, DE</span>
                </div>
                <div className="catalog-item">
                    <img
                        src="https://awesomeberlin.net/wp-content/uploads/2019/08/IMG_2007.jpg"
                        alt="car"
                    />
                    <span>Text Area 1</span>
                    <span>Text Area 2</span>
                    <span>Text Area 3</span>
                    <span>Text Area 4</span>
                    <span>Text Area 5</span>
                    <span>Text Area 6</span>
                    <span>Text Area 7</span>
                </div>
            </div>
        </section>
    );
}
