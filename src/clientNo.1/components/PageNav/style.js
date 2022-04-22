import styled from "styled-components";
export const NavbarSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;

export const Logo = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;
