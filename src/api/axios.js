import axios from "axios"
import { authHeader } from "./authHeader"

const BASE_URL = `${import.meta.env.VITE_SOME_HOST_SOCKET}/api/v1`

export const getDescription = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/videos/${id}`)
  return data
}

export const getComments = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/comments/${id}`)
  return data
}

export const postComment = async (id, comment) => {
  const { data } = await axios.post(
    `${BASE_URL}/comments/${id}`,
    { comment },
    {
      headers: authHeader(),
    }
  )
  return data
}

export const postLogin = async (username, password) => {
  const { data } = await axios.post(`${BASE_URL}/login`, { username, password })
  return data
}

export const postRegister = async (username, password) => {
  const { data } = await axios.post(`${BASE_URL}/register`, { username, password })
  return data
}

export const getMe = async () => {
  const { data } = await axios.get(`${BASE_URL}/me`, {
    headers: authHeader(),
  })
  return data
}

export const getProducts = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/products/${id}`)
  return data
}

export const getVideos = async () => {
  const { data } = await axios.get(`${BASE_URL}/videos`)
  return data
}

export const getVideosBySearch = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/videos/search?q=${query}`)
  return data
}

export const getVideosId = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/videos/${id}`)
  return data
}
