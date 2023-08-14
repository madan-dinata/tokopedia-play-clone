/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import NotFound from "./pages/NotFound"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
