import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import ServicePage from "./pages/landing/ServicePage";
import PremiumPage from "./pages/landing/PremiumPage";
import LoginPage from "./pages/user/LoginPage";
import Layout from "./components/Layout";
import SignUpPage from "./pages/user/SignUpPage";
import SelectTypePage from "./pages/user/SignUpPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/service" element={<ServicePage/>}/>
                    <Route path="/premium" element={<PremiumPage/>}/>
                </Route>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/login/signUp" element={<SelectTypePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;