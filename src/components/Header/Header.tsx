import { NavLink } from "react-router-dom"
import { HeaderWrapper, Title, Nav, NavItem } from "./styles"

function Header() {
  return (
    <HeaderWrapper>
      <Title>Weather App</Title>
      <Nav>
        <NavItem>
          <NavLink to="/" end>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/weather">Weather</NavLink>
        </NavItem>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
