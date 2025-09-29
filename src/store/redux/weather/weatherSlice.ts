import axios from "axios"
import { createAppSlice } from "store/createAppSlice"
import { CurrentWeatherState, WeatherAPIResponse } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const APP_ID = "5bcee31d922035d5c6c4672756ec9d88"
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast"

const initialState: CurrentWeatherState = {
  data: undefined,
  error: undefined,
  isFetching: false,
}

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState,
  reducers: create => ({
    getWeatherByCity: create.asyncThunk<WeatherAPIResponse, string>(
      async (city, { rejectWithValue }) => {
        const url = `${FORECAST_URL}?q=${encodeURIComponent(
          city,
        )}&appid=${APP_ID}&units=metric`

        try {
          const response = await axios.get(url)

          const name: string = response.data?.city?.name ?? ""
          const country: string = response.data?.city?.country ?? ""

          const list = Array.isArray(response.data?.list)
            ? response.data.list
            : []

          const icons = list.slice(0, 3).map((item: any) => ({
            icon: item?.weather?.[0]?.icon ?? "01d",
            description: item?.weather?.[0]?.description ?? "",
          }))

          const temp = Math.round(list?.[0]?.main?.temp ?? 0)

          const mapped: WeatherAPIResponse = {
            name,
            sys: { country },
            weather: icons,
            main: { temp },
          }
          return mapped
        } catch (err: any) {
          return rejectWithValue(
            err?.response?.data?.message ?? "Some Network Error",
          )
        }
      },
      {
        pending: (state: CurrentWeatherState) => {
          state.isFetching = true
          state.error = undefined
        },
        fulfilled: (
          state: CurrentWeatherState,
          action: PayloadAction<WeatherAPIResponse>,
        ) => {
          state.isFetching = false
          state.data = action.payload
          state.error = undefined
        },
        rejected: (state: CurrentWeatherState, action: PayloadAction<any>) => {
          state.isFetching = false
          state.data = undefined
          state.error =
            typeof action.payload === "string"
              ? action.payload
              : "Some Network Error"
        },
      },
    ),
    clearCurrent: create.reducer((state: CurrentWeatherState) => {
      state.data = undefined
      state.error = undefined
    }),
    clearError: create.reducer((state: CurrentWeatherState) => {
      state.error = undefined
    }),
  }),
  selectors: {
    current: (state: CurrentWeatherState) => state.data,
    isFetching: (state: CurrentWeatherState) => state.isFetching,
    error: (state: CurrentWeatherState) => state.error,
  },
})

export const weatherActions = weatherSlice.actions
export const weatherSelectors = weatherSlice.selectors
