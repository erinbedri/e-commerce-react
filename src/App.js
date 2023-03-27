import { Routes, Route } from "react-router-dom";

import "./App.css";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { AuthContext } from "./contexts/AuthContext";
import Header from "./components/common/Header/Header";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalogs/Catalog/Catalog";
import CatalogOwner from "./components/Catalogs/CatalogOwner/CatalogOwner";
import CarDetails from "./components/Cars/CarDetails/CarDetails";
import CarAdd from "./components/Cars/CarAdd/CarAdd";
import CarEdit from "./components/Cars/CarEdit/CarEdit";
import CarDelete from "./components/Cars/CarDelete/CarDelete";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Logout from "./components/Authentication/Logout/Logout";
import Footer from "./components/common/Footer/Footer";
import CarOwner from "./common/CarOwner";
import Profile from "./components/Authentication/Profile/Profile";
import Favourites from "./components/Catalogs/Favourites/Favourites";
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
                        <Route path="/" element={<Home />} />

                        <Route path="/catalog" element={<Catalog />} />

                        <Route element={<AuthenticatedUser />}>
                            <Route path="/catalog/owner" element={<CatalogOwner />} />
                        </Route>

                        <Route element={<AuthenticatedUser />}>
                            <Route path="/catalog/favourites" element={<Favourites />} />
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

                        <Route element={<AuthenticatedUser />}>
                            <Route path="/profile" element={<Profile />} />
                        </Route>

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
