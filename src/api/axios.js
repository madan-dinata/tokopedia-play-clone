import axios from "axios"
import { authHeader } from "./authHeader.js"

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

export const login = async (username, password) => {
  const { data } = await axios.post(`${BASE_URL}/login`, { username, password })
  return data
}

export const register = async (username, password) => {
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
