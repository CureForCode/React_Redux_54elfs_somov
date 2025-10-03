import styled from "@emotion/styled"

export const Card = styled.div`
  width: min(100%, 720px);
  min-height: 180px;
  padding: clamp(16px, 4vw, 28px);
  border-radius: 20px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 3vw, 18px);
  color: #fff;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(10px, 3vw, 16px);

  @media (max-width: 520px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  gap: clamp(10px, 2.8vw, 14px);
`

export const Temp = styled.div`
  font-size: clamp(36px, 8vw, 57px);
  font-weight: 500;
  line-height: 1.1;
`

export const City = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: clamp(16px, 3.2vw, 20px);
  font-weight: 700;
`

export const Country = styled.span`
  font-size: clamp(14px, 3vw, 20px);
  font-weight: 600;
  opacity: 0.85;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(10px, 3.5vw, 18px);

  img {
    width: clamp(44px, 12vw, 74px);
    height: clamp(44px, 12vw, 74px);
    object-fit: contain;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 4px;
  flex-wrap: wrap;

  button {
    height: 48px;
    font-size: clamp(16px, 2vw, 20px);
  }

  @media (max-width: 480px) {
    button {
      width: 100%;
    }
    width: 100%;
  }
`
