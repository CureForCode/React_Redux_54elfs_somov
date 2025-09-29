export interface SavedWeather {
  id: string
  city: string
  country: string
  temp: number
  icons: { icon: string; description: string }[]
}

export interface SavedWeatherState {
  list: SavedWeather[]
}