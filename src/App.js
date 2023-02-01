import { Routes, Route } from "react-router-dom";

import "./App.css";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { AuthContext } from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import CarDetails from "./components/CarDetails/CarDetails";
import CarAdd from "./components/CarAdd/CarAdd";
import CarEdit from "./components/CarEdit/CarEdit";
import CarDelete from "./components/CarDelete/CarDelete";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Footer from "./components/Footer/Footer";

function App() {
    const [auth, setAuth] = useLocalStorage("auth", {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };
    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
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
                        <Route
                            path="/catalog/:carId/delete"
                            element={<CarDelete />}
                        />
                        <Route
                            path="/catalog/:carId/edit"
                            element={<CarEdit />}
                        />
                        <Route path="/catalog/car/add" element={<CarAdd />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
