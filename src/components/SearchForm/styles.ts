import styled from "@emotion/styled"

export const FormWrapper = styled.form`
  display: flex;
  width: min(100%, 720px);
  height: auto;
  margin-top: clamp(32px, 10vw, 90px);
`

export const Row = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;

  input {
    flex: 1 1 auto;
    height: 48px;
    border-radius: 40px;
    padding: 12px 16px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    font-size: clamp(16px, 3.5vw, 20px);
    color: #fff;
  }

  button {
    flex: 0 0 auto;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`
