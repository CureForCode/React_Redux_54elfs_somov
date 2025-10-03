import styled from "@emotion/styled"

export const ErrorBox = styled.div`
  width: min(100%, 720px);
  min-height: 180px;
  padding: clamp(16px, 4vw, 24px);
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
  font-size: clamp(22px, 3.5vw, 28px);
  line-height: 1.2;
  font-weight: 500;
  color: #f35e5e;
  margin-bottom: 8px;
  text-align: center;
`

export const Text = styled.p`
  font-size: clamp(14px, 2.5vw, 18px);
  line-height: 1.3;
  font-weight: 400;
  color: #fff;
  text-align: center;
`

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    width: min(100%, 220px);
    height: 48px;
    font-size: clamp(16px, 2vw, 20px);
  }
`
