import styled from "styled-components";
import Logo from "./Logo";
import Button from "../ui/Button";

import { HiMiniUser } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const StyledNavbar = styled.nav`
  min-width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  background-color: #0a2e36;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 4.8rem;
  height: 9.2rem;
  font-size: 1.6rem;
  color: white;
`;
const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 3.6rem;
  cursor: pointer;
  font-weight: 500;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
function Navbar() {
  const navigate = useNavigate();
  return (
    <StyledNavbar>
      <Logo />
      <StyledUl>
        <li onClick={() => navigate("/account")}>
          <HiMiniUser />
          Account
        </li>

        <Button variation="secondary" onClick={() => navigate("/logout")}>
          Logout
          <HiOutlineArrowRight />
        </Button>
      </StyledUl>
    </StyledNavbar>
  );
}

export default Navbar;
