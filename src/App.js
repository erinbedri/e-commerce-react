import "./App.css";

function App() {
    return (
        <div className="App">
            <header id="header" className="container">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <a href="#">
                            <h1>
                                C <i className="fa-solid fa-car" /> RS
                            </h1>
                        </a>
                    </div>
                    {/*
                <div class="header-nav">
                    <a href="#"><span>ALL</span></a>
                    <a href="#"><span>MEN</span></a>
                    <a href="#"><span>WOMEN</span></a>
                </div>
                */}
                    <div className="header-controls">
                        {/* Logged in user */}
                        <a href="#">
                            <i className="fa-solid fa-heart" />
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-user" />
                        </a>
                        <a href="#">Logout</a>
                        {/* Logged out user */}
                        <a href="#">Sign In</a>
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </header>
            <main>
                {/* CATALOG */}
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
                {/* CAR DETAILS */}
                <section id="details" className="container">
                    <h2 className="title">Car Details</h2>
                    <div className="details-wrapper">
                        <div className="details-text">
                            <span>
                                <b>Manufacturer: </b>Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit.
                            </span>
                            <span>
                                <b>Model : </b>Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit.
                            </span>
                            <span>
                                <b>Category: </b>Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit.
                            </span>
                            <span>
                                <b>Mileage: </b>Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit.
                            </span>
                            <span>
                                <b>Year: </b>Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit.
                            </span>
                            <span>
                                <b>Price: </b>Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit.
                            </span>
                            <span>
                                <b>Location: </b>Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit.
                            </span>
                            <span>
                                <b>Description: </b>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Voluptate
                                voluptatibus quibusdam perferendis dicta ea modi
                                maxime, nisi sunt suscipit hic. Et facilis nulla
                                ducimus quod consequuntur quis tenetur velit ab!
                            </span>
                            <span>
                                <b>Contact: </b>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
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
                {/* ADD CAR */}
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
                {/* LOGIN */}
                <section id="login" className="container">
                    <h2 className="title">Sign In</h2>
                    <form className="form">
                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            required
                        />
                        <label htmlFor="psw">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                        />
                        <button className="btn" type="submit">
                            Login
                        </button>
                        <span className="login-link">
                            Not registered? <a href="#">Sign up</a> instead.
                        </span>
                    </form>
                </section>
                {/* REGISTER */}
                <section id="register" className="container">
                    <h2 className="title">Sign Up</h2>
                    <form className="form">
                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            required
                        />
                        <label htmlFor="fname">
                            <b>First Name</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            name="fname"
                            required
                        />
                        <label htmlFor="lname">
                            <b>Last Name</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            name="lname"
                            required
                        />
                        <label htmlFor="telNumber">
                            <b>Telephone Number</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Telephone Number"
                            name="telNumber"
                            required
                        />
                        <label htmlFor="password">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            required
                        />
                        <label htmlFor="repeatPassword">
                            <b>Confirm Password</b>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="repeatPassword"
                            required
                        />
                        <button className="btn" type="submit">
                            Register
                        </button>
                        <span className="register-link">
                            Already registered?
                            <a href="#">Sign ip</a> instead.
                        </span>
                    </form>
                </section>
            </main>
            {/* FOTOER */}
            <footer id="footer" className="container">
                <div className="footer-wrapper">© 2023 Cars</div>
            </footer>
        </div>
    );
}

export default App;
