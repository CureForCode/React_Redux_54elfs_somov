import styled from "@emotion/styled"

export const ErrorBox = styled.div`
  width: 709px;
  height: 220px;
  padding: 24px;
  border-radius: 16px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 57px;
  line-height: 69px;
  font-weight: 500;
  color: #f35e5e;
  margin-bottom: 8px;
  text-align: center;
`

export const Text = styled.p`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  color: #fff;
  text-align: center;
`

export const Actions = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;

  button {
    width: 155px;
    height: 48px;
    padding: 12px 40px;
    border-radius: 50px;
    font-size: 20px;
    border: none;
  }
`

