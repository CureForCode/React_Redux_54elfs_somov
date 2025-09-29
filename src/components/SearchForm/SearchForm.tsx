import { FormEvent, useState } from "react"
import Button from "components/Button/Button"
import Input from "components/Input/Input"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice"
import { FormWrapper, Row } from "./styles"

function SearchForm() {
  const dispatch = useAppDispatch()
  const isFetching = useAppSelector(weatherSelectors.isFetching)
  const [city, setCity] = useState("")

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = city.trim()
    if (!trimmed) {
      alert("Enter the name of the city")
      return
    }
    dispatch(weatherActions.getWeatherByCity(trimmed))
  }

  return (
    <FormWrapper onSubmit={onSubmit}>
      <Row>
        <Input
          id="city"
          name="city"
          placeholder="Enter your city"
          label=""
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <Button
          name="Search"
          type="submit"
          disabled={isFetching}
          size="sm"
          fullWidth={false}
        />
      </Row>
    </FormWrapper>
  )
}

export default SearchForm
