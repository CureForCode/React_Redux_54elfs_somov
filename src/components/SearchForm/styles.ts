import styled from "@emotion/styled"

export const FormWrapper = styled.form`
  display: flex;
  width: 710px;
  height: 48px;
  margin-top: 90px;
`

export const Row = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;

  input {
    width: 550px;
    height: 48px;
    border-radius: 40px;
    padding: 12px 20px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    font-size: 20px;
    color: #fff;
  }

  button {
    width: 146px;
    height: 48px;
    padding: 12px 40px;
    border-radius: 50px;
    font-size: 20px;
    background:
      linear-gradient(0deg, #3678b4, #3678b4),
      linear-gradient(270.38deg, #362a84 0.23%, #5936b4 94.2%);
  }
`
