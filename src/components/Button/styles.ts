import styled from "@emotion/styled"

interface ButtonComponentProps {
  $isRed: boolean
  $size: "lg" | "md" | "sm"
  $fullWidth: boolean
}

const generateButtonColor = (isRed: boolean, disabled?: boolean) => {
  if (disabled) return "#acacacff"
  return isRed ? "#ff6868ff" : "#1f27f5"
}

const generateButtonColorOnHover = (isRed: boolean, disabled?: boolean) => {
  if (disabled) return "#acacacff"
  return isRed ? "#fc3333ff" : "rgb(97, 102, 255)"
}

const heightBySize = (size: ButtonComponentProps["$size"]) =>
  size === "sm" ? "40px" : size === "md" ? "50px" : "70px"

const fontSizeBySize = (size: ButtonComponentProps["$size"]) =>
  size === "sm" ? "14px" : size === "md" ? "16px" : "20px"

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0 22px;
  height: ${({ $size }) => heightBySize($size)};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  border-radius: 9999px;
  background-color: ${({ $isRed, disabled }) =>
    generateButtonColor($isRed, disabled)};
  color: #ffffff;
  font-size: ${({ $size }) => fontSizeBySize($size)};
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $isRed, disabled }) =>
      generateButtonColorOnHover($isRed, disabled)};
  }
`