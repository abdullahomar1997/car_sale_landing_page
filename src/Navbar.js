import { Link as RouterLink, useMatch, useResolvedPath } from "react-router-dom";
import styled from 'styled-components';

const SiteTitle = styled(RouterLink)`
  text-decoration: none;
  color: black;
  font-size: 3rem;
  font-weight: bolder;
`;
const Container = styled.div`
    background-color: white;
`;
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavLink = styled(RouterLink)`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
`;

const NavItem = styled.li`

  &.active {
    font-weight: bold;
  }
`;

export default function Navbar() {
  return (
    <Container>
        <TitleContainer>
            <SiteTitle to="/">
                GOGO CARS
            </SiteTitle>
        </TitleContainer>
      <nav className="nav">
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/pricing">Cars</CustomLink>
            <CustomLink to="/about">Contact Us</CustomLink>
        </ul>
      </nav>
    </Container>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <NavItem className={isActive ? "active" : ""}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </NavItem>
  )
}
