import React from "react";

import "./car-details.css";

export default function CarDetails() {
    return (
        <section id="details" className="container">
            <h2 className="title">Car Details</h2>
            <div className="details-wrapper">
                <div className="details-text">
                    <span>
                        <b>Manufacturer: </b>Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit.
                    </span>
                    <span>
                        <b>Model : </b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.
                    </span>
                    <span>
                        <b>Category: </b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.
                    </span>
                    <span>
                        <b>Mileage: </b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.
                    </span>
                    <span>
                        <b>Year: </b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.
                    </span>
                    <span>
                        <b>Price: </b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.
                    </span>
                    <span>
                        <b>Location: </b>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.
                    </span>
                    <span>
                        <b>Description: </b>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Voluptate voluptatibus
                        quibusdam perferendis dicta ea modi maxime, nisi sunt
                        suscipit hic. Et facilis nulla ducimus quod consequuntur
                        quis tenetur velit ab!
                    </span>
                    <span>
                        <b>Contact: </b>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                    </span>
                </div>
                <div className="details-img">
                    <img
                        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f53054f4-30da-4a94-8aac-1aa6f662996d/bvlatuR/std/1200x628/Model-S-Social?quality=auto-medium&format=auto"
                        alt="car"
                    />
                </div>
            </div>
        </section>
    );
}
