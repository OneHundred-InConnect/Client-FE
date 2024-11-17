import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/landing/LandingPage";
import ServicePage from "./pages/landing/ServicePage";
import PremiumPage from "./pages/landing/PremiumPage";
import BusinessPage from "./pages/home/business/BusinessPage";
import InfluencerPage from "./pages/home/influencer/InfluencerPage";
import CampaignPage from "./pages/home/business/CampaignPage";
import LoginPage from "./pages/user/LoginPage";
import SelectTypePage from "./pages/user/SignUpPage";
import {PATH} from "./constants/path";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path={PATH.LANDING} element={<LandingPage/>}/>
                    <Route path={PATH.LANDING_SERVICE} element={<ServicePage/>}/>
                    <Route path={PATH.LANDING_PREMIUM} element={<PremiumPage/>}/>
                    <Route path={PATH.BUSINESS_HOME} element={<BusinessPage/>}/>
                    <Route path={PATH.INFLUENCER_HOME} element={<InfluencerPage/>}/>
                    <Route path={PATH.BUSINESS_CAMPAIGN} element={<CampaignPage/>}/>
                </Route>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/login/signUp" element={<SelectTypePage/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;