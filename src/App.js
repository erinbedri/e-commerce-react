import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import CarDetails from "./components/CarDetails/CarDetails";
import CarAdd from "./components/CarAdd/CarAdd";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Catalog />} />

                    <Route path="/catalog" element={<Catalog />} />
                    <Route
                        path="/catalog/:carId/details"
                        element={<CarDetails />}
                    />
                    <Route path="/catalog/car/add" element={<CarAdd />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
