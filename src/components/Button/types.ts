import { type ReactNode } from "react"

export type ButtonType = "button" | "submit" | "reset" | undefined

export type ButtonSize = "lg" | "md" | "sm"

export interface ButtonProps {
  type?: ButtonType
  isRed?: boolean
  disabled?: boolean
  name: string
  onClick?: () => void
  children?: ReactNode
  size?: ButtonSize
  fullWidth?: boolean
}