/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
