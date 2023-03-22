import React from "react";

export default function UserTestimonial({ name, img, testimonial }) {
    console.log(name);
    return (
        <div className="testimonials-item">
            <p>{testimonial}</p>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    );
}
