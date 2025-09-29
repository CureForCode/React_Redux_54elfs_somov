import styled from "@emotion/styled"
import bg from "assets/background.jpg"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  color: #fff;
  background: url(${bg}) center/cover no-repeat fixed;
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  gap: 120px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-weight: bold;
  color: #fff;
`
