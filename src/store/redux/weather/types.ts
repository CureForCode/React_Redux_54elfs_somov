export interface WeatherAPIResponse {
  name: string // city
  sys: { country: string }
  weather: { icon: string; description: string }[]
  main: { temp: number }
}

export interface CurrentWeatherState {
  data?: WeatherAPIResponse
  error?: string
  isFetching: boolean
}
