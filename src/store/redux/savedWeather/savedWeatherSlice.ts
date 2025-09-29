import { v4 } from "uuid"
import { createAppSlice } from "store/createAppSlice"
import { SavedWeather, SavedWeatherState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { WeatherAPIResponse } from "../weather/types"

const initialState: SavedWeatherState = {
  list: [],
}

export const savedWeatherSlice = createAppSlice({
  name: "SAVED_WEATHER",
  initialState,
  reducers: create => ({
    saveFromCurrent: create.reducer(
      (state: SavedWeatherState, action: PayloadAction<WeatherAPIResponse>) => {
        const data = action.payload
        const card: SavedWeather = {
          id: v4(),
          city: data.name,
          country: data.sys.country,
          temp: Math.round(data.main.temp),
          icons: data.weather.slice(0, 3),
        }
        state.list = [card, ...state.list]
      },
    ),
    deleteOne: create.reducer(
      (state: SavedWeatherState, action: PayloadAction<string>) => {
        state.list = state.list.filter(item => item.id !== action.payload)
      },
    ),
    deleteAll: create.reducer((state: SavedWeatherState) => {
      state.list = []
    }),
  }),
  selectors: {
    list: (state: SavedWeatherState) => state.list,
    hasAny: (state: SavedWeatherState) => state.list.length > 0,
  },
})

export const savedWeatherActions = savedWeatherSlice.actions
export const savedWeatherSelectors = savedWeatherSlice.selectors
