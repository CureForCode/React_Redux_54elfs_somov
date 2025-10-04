import { useAppDispatch, useAppSelector } from "store/hooks"
import Header from "components/Header/Header"
import WeatherCard from "components/WeatherCard/WeatherCard"
import { Page, Main, List, Controls } from "./styles"
import Button from "components/Button/Button"

import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice"

function Weathers() {
  const dispatch = useAppDispatch()
  const list = useAppSelector(weatherSelectors.list)
  const hasAny = useAppSelector(weatherSelectors.hasAny)

  const deleteAll = () => {
    dispatch(weatherActions.deleteSaved())
    alert("Information was successfully deleted")
  }

  return (
    <Page>
      <Header />
      <Main>
        <List>
          {list.map(card => (
            <div key={card.id}>
              <WeatherCard
                city={card.city}
                country={card.country}
                temp={card.temp}
                icons={card.icons}
                readonly
                onDelete={() => {
                  dispatch(weatherActions.deleteSaved(card.id))
                  alert("Information was successfully deleted")
                }}
              />
            </div>
          ))}
        </List>
        {hasAny && (
          <Controls>
            <Button isRed name="Delete all cards" onClick={deleteAll} />
          </Controls>
        )}
      </Main>
    </Page>
  )
}

export default Weathers
