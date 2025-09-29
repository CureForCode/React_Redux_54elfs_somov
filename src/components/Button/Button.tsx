import { ButtonComponent } from "./styles"
import { type ButtonProps } from "./types"

function Button({
  type = "button",
  name,
  onClick = () => {},
  children,
  isRed = false,
  disabled = false,
  size = "lg",
  fullWidth = true,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      $isRed={isRed}
      $size={size}
      $fullWidth={fullWidth}
      onClick={onClick}
      type={type}
    >
      {!children && name}
      {children}
    </ButtonComponent>
  )
}

export default Button