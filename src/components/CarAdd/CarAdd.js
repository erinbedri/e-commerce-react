import React from "react";

export default function CarAdd() {
    return (
        <section id="login" className="container">
            <h2 className="title">Add Car</h2>
            <form className="form">
                <label htmlFor="manufacturer">
                    <b>Manufacturer</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Manufacturer"
                    name="manufacturer"
                    required
                />
                <label htmlFor="model">
                    <b>Model</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Model"
                    name="model"
                    required
                />
                <label htmlFor="category">
                    <b>Category</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Category"
                    name="category"
                    required
                />
                <label htmlFor="mileage">
                    <b>Mileage</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Mileage"
                    name="mileage"
                    min={0}
                    required
                />
                <label htmlFor="year">
                    <b>Year</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Year"
                    name="year"
                    min={1900}
                    max={2023}
                    required
                />
                <label htmlFor="imageUrl">
                    <b>Image URL</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Image URL"
                    name="imageUrl"
                    required
                />
                <label htmlFor="price">
                    <b>Price</b>
                </label>
                <input
                    type="number"
                    placeholder="Enter Price"
                    name="price"
                    min={0}
                    required
                />
                <label htmlFor="location">
                    <b>Location</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Location"
                    name="location"
                    required
                />
                <label htmlFor="description">
                    <b>Description</b>
                </label>
                <textarea
                    id="description"
                    name="description"
                    rows={10}
                    defaultValue={"                    "}
                />
                <button className="btn" type="submit">
                    Add
                </button>
            </form>
        </section>
    );
}
