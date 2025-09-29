import styled from "@emotion/styled"

interface InputComponentProps {
  $error?: string | undefined
}

const generateInputBorder = (error?: string, disabled?: boolean) => {
  if (disabled) return "rgba(255,255,255,0.6)"
  return !!error ? "#ff6868ff" : "rgba(255,255,255,0.7)"
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 46px;
  border: 1px solid
    ${({ disabled, $error }) => generateInputBorder($error, disabled)};
  border-radius: 9999px;
  padding: 0 18px;
  outline: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
    font-size: 16px;
  }
`

export const ErrorText = styled.div`
  height: 18px;
  font-size: 16px;
  color: #ff6868ff;
`
