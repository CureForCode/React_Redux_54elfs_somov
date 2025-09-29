import Button from "components/Button/Button"
import { ErrorBox, Title, Text, Actions } from "./styles"

interface ErrorCardProps {
  code?: string | number
  message: string
  onDelete: () => void
}

function ErrorCard({ code, message, onDelete }: ErrorCardProps) {
  return (
    <ErrorBox>
      <Title>API Error</Title>
      <Text>{code ? `(${code}) ${message}` : message}</Text>
      <Actions>
        <Button isRed name="Delete" onClick={onDelete} />
      </Actions>
    </ErrorBox>
  )
}

export default ErrorCard
