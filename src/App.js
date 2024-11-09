import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Campaign from "./pages/Campaign";
import Premium from "./pages/Premium";
import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
    return (
        <Router>
            <Nav/>
            <div style={{paddingTop: '70px', background: 'lightgrey'}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/campaign" element={<Campaign/>}/>
                <Route path="/premium" element={<Premium/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

            </div>
        </Router>
    );
}

export default App;