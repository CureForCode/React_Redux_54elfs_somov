import Button from "components/Button/Button"
import { ErrorBox, Title, Text, Actions } from "./styles"

interface ErrorCardProps {
  code?: string | number
  message: string
  description?: string
  onDelete: () => void
}

function ErrorCard({ code, message, description, onDelete }: ErrorCardProps) {
  return (
    <ErrorBox role="alert" aria-live="assertive">
      <Title>API Error</Title>
      {code !== undefined && code !== null && (
        <Text>
          <strong>Status:</strong> {code}
        </Text>
      )}
      <Text>
        <strong>Message:</strong> {message}
      </Text>
      {description && (
        <Text>
          <strong>Description:</strong> {description}
        </Text>
      )}
      <Actions>
        <Button isRed name="Delete" onClick={onDelete} />
      </Actions>
    </ErrorBox>
  )
}

export default ErrorCard
