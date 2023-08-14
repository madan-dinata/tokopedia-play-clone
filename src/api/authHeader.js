export const authHeader = () => {
  const user = window.localStorage.getItem("accessToken")
  if (user) {
    return { Authorization: `Bearer ${user}` }
  } else {
    return {}
  }
}
