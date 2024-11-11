import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Service from "./pages/Service";
import Campaign from "./pages/Campaign";
import Premium from "./pages/Premium";
import LoginPage from "./pages/Users/LoginPage";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/campaign" element={<Campaign/>}/>
                    <Route path="/premium" element={<Premium/>}/>
                </Route>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;