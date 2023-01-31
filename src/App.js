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
                <Catalog />
                <CarDetails />
                <CarAdd />
                <Login />
                <Register />
            </main>

            <Footer />
        </div>
    );
}

export default App;
