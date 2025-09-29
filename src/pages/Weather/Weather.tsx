import { useAppDispatch, useAppSelector } from "store/hooks"
import Header from "components/Header/Header"
import WeatherCard from "components/WeatherCard/WeatherCard"
import {
  savedWeatherActions,
  savedWeatherSelectors,
} from "store/redux/savedWeather/savedWeatherSlice"
import { Page, Main, List, Controls } from "./styles"
import Button from "components/Button/Button"

function Weathers() {
  const dispatch = useAppDispatch()
  const list = useAppSelector(savedWeatherSelectors.list)
  const hasAny = useAppSelector(savedWeatherSelectors.hasAny)

  const deleteAll = () => {
    dispatch(savedWeatherActions.deleteAll())
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
                  dispatch(savedWeatherActions.deleteOne(card.id))
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

