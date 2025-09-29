import styled from "@emotion/styled"

export const Card = styled.div`
  width: 709px;
  height: 220px;
  padding: 28px;
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
  gap: 18px;
  color: #fff;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`

export const Temp = styled.div`
  font-size: 57px;
  font-weight: 500;
  line-height: 69px;
`

export const City = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 20px;
  font-weight: 700;
`

export const Country = styled.span`
  font-size: 20px;
  font-weight: 600;
  opacity: 0.85;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  img {
    width: 74px;
    height: 74px;
    object-fit: contain;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 4px;

  button {
    width: 155px;
    height: 48px;
    padding: 12px 40px;
    border-radius: 50px;
    font-size: 20px;
  }
`
