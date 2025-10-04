import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherActions,
  weatherSelectors,
} from "store/redux/weather/weatherSlice"

import Header from "components/Header/Header"
import SearchForm from "components/SearchForm/SearchForm"
import WeatherCard from "components/WeatherCard/WeatherCard"
import ErrorCard from "components/ErrorCard/ErrorCard"

import ClipLoader from "react-spinners/ClipLoader"

import { Page, Main, Content, Loading } from "./styles"

function Home() {
  const dispatch = useAppDispatch()
  const isFetching = useAppSelector(weatherSelectors.isFetching)
  const error = useAppSelector(weatherSelectors.error)
  const data = useAppSelector(weatherSelectors.current)

  const onDeleteWeather = () => {
    dispatch(weatherActions.clear("data"))
  }

  const onSaveWeather = () => {
    if (data) {
      dispatch(weatherActions.saveFromCurrent())
      dispatch(weatherActions.clear("data"))
      alert("Information successfully saved")
    }
  }

  const onDeleteError = () => {
    dispatch(weatherActions.clear("error"))
    alert("Information about error was deleted")
  }

  useEffect(() => {}, [error])

  return (
    <Page>
      <Header />
      <Main>
        <SearchForm />
        <Content>
          {isFetching && (
            <Loading>
              <ClipLoader />
            </Loading>
          )}
          {data && (
            <WeatherCard
              city={data.name}
              country={data.sys.country}
              temp={Math.round(data.main.temp)}
              icons={data.weather}
              onSave={onSaveWeather}
              onDelete={onDeleteWeather}
            />
          )}
          {!data && error && (
            <ErrorCard
              code={error.code}
              message={error.message}
              description={error.description}
              onDelete={onDeleteError}
            />
          )}
        </Content>
      </Main>
    </Page>
  )
}

export default Home