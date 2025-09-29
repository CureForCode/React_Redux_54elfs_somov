import { Routes, Route } from "react-router-dom"
import Home from "pages/Home/Home"
import Weather from "pages/Weather/Weather"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="weather" element={<Weather />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
