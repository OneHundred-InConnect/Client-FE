import {Link} from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <span>Landing</span>
            <div>
                <button><Link to="/bh">소상공인 홈</Link></button>
                <button><Link to="/ih">인플루언서 홈</Link></button>

            </div>
        </div>
    );
}

export default LandingPage;