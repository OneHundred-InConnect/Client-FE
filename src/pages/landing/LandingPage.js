import {Link} from "react-router-dom";
import {PATH} from "../../constants/path";

function LandingPage() {
    return (
        <div>
            <span>Landing</span>
            <div>
                <button><Link to={PATH.BUSINESS_HOME}>소상공인 홈</Link></button>
                <button><Link to={PATH.INFLUENCER_HOME}>인플루언서 홈</Link></button>

            </div>
        </div>
    );
}

export default LandingPage;