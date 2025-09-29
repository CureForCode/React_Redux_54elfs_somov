// Lessons
//import Lesson_16 from "lessons/Lesson_16/Lesson_16"
//import Lesson_18 from "lessons/Lesson_18/Lesson_18"

//Homeworks
//import Homework_16 from "homeworks/Homework_16/Homework_16"
//import Homework_18 from "homeworks/Homework_18/Homework_18"

//Weather Project React + Redux
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "pages/Home/Home"
import Weather from "pages/Weather/Weather"

function App() {
  return (
    <>
      {/* Lessons */}
      {/* <Lesson_16 /> */}
      {/*  <Lesson_18 /> */}

      {/* Homeworks */}
      {/* <Homework_16 /> */}
      {/* <Homework_18 /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
