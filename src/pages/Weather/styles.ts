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
  margin-top: clamp(40px, 8vw, 90px);
  gap: 24px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: min(100%, 720px);
`

export const Controls = styled.div`
  margin-top: 24px;
  width: min(100%, 720px);

  button {
    width: 100%;
    height: 48px;
    padding: 12px 20px;
    border-radius: 50px;
    font-size: clamp(16px, 2vw, 20px);
    background:
      linear-gradient(0deg, #3678b4, #3678b4),
      linear-gradient(270.38deg, #362a84 0.23%, #5936b4 94.2%);
  }
`
