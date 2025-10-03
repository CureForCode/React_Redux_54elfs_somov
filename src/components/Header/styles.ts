import styled from "@emotion/styled"

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px clamp(16px, 6vw, 85px);
  min-height: 64px;
  background:
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
    rgba(18, 45, 77, 0.5);
  border-bottom: 1px solid #d2d2d2;
  backdrop-filter: blur(8.9px);
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 8px;
  }
`

export const Title = styled.h1`
  font-size: clamp(20px, 2.2vw, 24px);
  font-weight: 700;
  color: #fff;
`

export const Nav = styled.nav`
  display: flex;
  gap: clamp(10px, 2.5vw, 16px);

  a {
    font-size: clamp(16px, 2vw, 20px);
    text-decoration: none;
    color: #fff;

    &.active {
      font-weight: 700;
      text-decoration: underline;
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const NavItem = styled.div``
