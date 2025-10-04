import axios from "axios"
import { v4 } from "uuid"
import { createAppSlice } from "store/createAppSlice"
import {
  WeatherState,
  WeatherAPIResponse,
  SavedWeather,
  ApiError,
} from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const APP_ID = "5bcee31d922035d5c6c4672756ec9d88"
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast"

const initialState: WeatherState = {
  data: undefined,
  saved: [],
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
          const apiError: ApiError = {
            code: err?.response?.data?.cod ?? err?.response?.status,
            message:
              err?.response?.data?.message ??
              err?.message ??
              "Some Network Error",
            description:
              typeof err?.response?.data === "string"
                ? err.response.data
                : undefined,
          }
          return rejectWithValue(apiError)
        }
      },
      {
        pending: (state: WeatherState) => {
          state.isFetching = true
          state.error = undefined
          state.data = undefined
        },
        fulfilled: (
          state: WeatherState,
          action: PayloadAction<WeatherAPIResponse>,
        ) => {
          state.isFetching = false
          state.data = action.payload
          state.error = undefined
        },
        rejected: (state: WeatherState, action: PayloadAction<any>) => {
          state.isFetching = false
          state.data = undefined

          const payload = action.payload
          if (payload && typeof payload === "object") {
            state.error = {
              code: payload.code,
              message:
                typeof payload.message === "string"
                  ? payload.message
                  : "Some Network Error",
              description:
                typeof payload.description === "string"
                  ? payload.description
                  : undefined,
            }
          } else {
            state.error = { message: "Some Network Error" }
          }
        },
      },
    ),

    clear: create.reducer(
      (
        state: WeatherState,
        action: PayloadAction<"data" | "error" | "all" | undefined>,
      ) => {
        const mode = action.payload ?? "all"
        if (mode === "data" || mode === "all") state.data = undefined
        if (mode === "error" || mode === "all") state.error = undefined
      },
    ),

    saveFromCurrent: create.reducer((state: WeatherState) => {
      const data = state.data
      if (!data) return
      const card: SavedWeather = {
        id: v4(),
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        icons: data.weather.slice(0, 3),
      }
      state.saved = [card, ...state.saved]
    }),

    deleteSaved: create.reducer(
      (state: WeatherState, action: PayloadAction<string | undefined>) => {
        const id = action.payload
        if (id) {
          state.saved = state.saved.filter(item => item.id !== id)
        } else {
          state.saved = []
        }
      },
    ),
  }),
  selectors: {
    current: (state: WeatherState) => state.data,
    isFetching: (state: WeatherState) => state.isFetching,
    error: (state: WeatherState) => state.error,
    list: (state: WeatherState) => state.saved,
    hasAny: (state: WeatherState) => state.saved.length > 0,
  },
})

export const weatherActions = weatherSlice.actions
export const weatherSelectors = weatherSlice.selectors
