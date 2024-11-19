import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/landing/LandingPage";
import ServicePage from "./pages/landing/ServicePage";
import PremiumPage from "./pages/landing/PremiumPage";
import BusinessPage from "./pages/business/BusinessPage";
import InfluencerPage from "./pages/influencer/InfluencerPage";
import BusinessCampaignPage from "./pages/business/BusinessCampaignPage";
import LoginPage from "./pages/user/LoginPage";
import SelectTypePage from "./pages/user/SignUpPage";
import {PATH} from "./constants/path";
import BusinessWorkPage from "./pages/business/BusinessWorkPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path={PATH.LANDING} element={<LandingPage/>}/>
                    <Route path={PATH.LANDING_SERVICE} element={<ServicePage/>}/>
                    <Route path={PATH.LANDING_PREMIUM} element={<PremiumPage/>}/>
                    <Route path={PATH.BUSINESS.HOME} element={<BusinessPage/>}/>
                    <Route path={PATH.INFLUENCER.HOME} element={<InfluencerPage/>}/>
                    <Route path={PATH.BUSINESS.CAMPAIGN} element={<BusinessCampaignPage/>}/>
                    <Route path={PATH.BUSINESS.PREMIUM} element={<PremiumPage/>}/>
                    <Route path={PATH.BUSINESS.WORK} element={<BusinessWorkPage/>}/>
                </Route>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/login/signUp" element={<SelectTypePage/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;