export interface WeatherAPIResponse {
  name: string
  sys: { country: string }
  weather: { icon: string; description: string }[]
  main: { temp: number }
}

export interface SavedWeather {
  id: string
  city: string
  country: string
  temp: number
  icons: { icon: string; description: string }[]
}

export interface ApiError {
  code?: number | string
  message: string
  description?: string
}

export interface WeatherState {
  data?: WeatherAPIResponse
  saved: SavedWeather[]
  error?: ApiError
  isFetching: boolean
}
