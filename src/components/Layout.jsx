import { Outlet, useNavigate } from 'react-router-dom';
import Nav from "./Nav";
import styled from "styled-components";

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

const Container = styled.div`
 
    padding-top: 70px;
`
