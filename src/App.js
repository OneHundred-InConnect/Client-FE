import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import ServicePage from "./pages/landing/ServicePage";
import Campaign from "./pages/Campaign";
import PremiumPage from "./pages/landing/PremiumPage";
import LoginPage from "./pages/user/LoginPage";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/service" element={<ServicePage/>}/>
                    <Route path="/campaign" element={<Campaign/>}/>
                    <Route path="/premium" element={<PremiumPage/>}/>
                </Route>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;