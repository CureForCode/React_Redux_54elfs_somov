import styled from "@emotion/styled"

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 85px;
  height: 80px;
  background:
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
    rgba(18, 45, 77, 0.5);
  border-bottom: 1px solid #d2d2d2;
  backdrop-filter: blur(8.9px);
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`

export const Nav = styled.nav`
  display: flex;
  gap: 16px;

  a {
    font-size: 20px;
    text-decoration: none;
    color: #fff;

    &.active {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`

export const NavItem = styled.div``
