import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import {
  FeedbackWrapper,
  FeedbackControl,
  Count,
  ButtonwithcountContainer,
} from "./styles"

function Feedback() {
  const dispatch = useAppDispatch()
  const like = useAppSelector(feedbackSliceSelectors.like)
  const dislike = useAppSelector(feedbackSliceSelectors.dislike)

  const onLike = () => dispatch(feedbackSliceActions.like())
  const onDislike = () => dispatch(feedbackSliceActions.dislike())
  const onReset = () => dispatch(feedbackSliceActions.resetResults())

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonwithcountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonwithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={onReset} />
    </FeedbackWrapper>
  )
}

export default Feedback