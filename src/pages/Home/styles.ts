import styled from "@emotion/styled"
import bg from "assets/background.jpg"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  color: #fff;
  background: url(${bg}) center/cover no-repeat fixed;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(16px, 4vw, 32px) 16px;
  gap: clamp(40px, 10vw, 120px);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: min(100%, 720px);
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-weight: bold;
  color: #fff;
  width: 100%;
`
