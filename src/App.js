import { Routes, Route } from "react-router-dom";

import "./App.css";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { AuthContext } from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import CatalogOwner from "./components/CatalogOwner/CatalogOwner";
import CarDetails from "./components/CarDetails/CarDetails";
import CarAdd from "./components/CarAdd/CarAdd";
import CarEdit from "./components/CarEdit/CarEdit";
import CarDelete from "./components/CarDelete/CarDelete";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Footer from "./components/Footer/Footer";
import CarOwner from "./common/CarOwner";
import AuthenticatedUser from "./common/AuthenticatedUser";
import NotFound from "./components/common/NotFound/NotFound";

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

                        <Route element={<AuthenticatedUser />}>
                            <Route path="/catalog/owner" element={<CatalogOwner />} />
                        </Route>

                        <Route path="/catalog/:carId/details" element={<CarDetails />} />

                        <Route element={<CarOwner />}>
                            <Route path="/catalog/:carId/delete" element={<CarDelete />} />
                        </Route>

                        <Route element={<CarOwner />}>
                            <Route path="/catalog/:carId/edit" element={<CarEdit />} />
                        </Route>

                        <Route element={<AuthenticatedUser />}>
                            <Route path="/catalog/car/add" element={<CarAdd />} />
                        </Route>

                        <Route path="/login" element={<Login />} />

                        <Route path="/register" element={<Register />} />

                        <Route path="/logout" element={<Logout />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
