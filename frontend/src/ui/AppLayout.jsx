import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const StyledAppLayout = styled.div`
  overflow-y: scroll;
  height: 100vh;
  background: #f3f3f3;
`;
const Main = styled.main`
  padding: 12.4rem 4.8rem 4.8rem 4.8rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
