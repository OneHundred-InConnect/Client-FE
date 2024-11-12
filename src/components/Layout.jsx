import { Outlet } from 'react-router-dom';
import Nav from "./Nav";
import {Container} from "../styles/common/FrameStyles";

const Layout = () => {
    return (
        <>
        <Nav/>
            <Container>
                <Outlet/>
            </Container>
        </>
    );

}

export default Layout;
