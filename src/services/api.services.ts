async function getTopMedia(type: "movies" | "series", query?: string, params?: object) {
  try {
    const url = `${process.env.REACT_APP_API_BASE_URL}?${type}`

    const response = await fetch(url, params)
    const data = await response.json()

    return data
  } catch (error) {
    return false
  }
}

async function getTopSeries() {
  return getTopMedia("series")
}
async function getTopMovies(genre?: string, params?: object) {
  return getTopMedia("movies", genre, params)
}

async function getSeriesByQuery(query: string) {
  return getTopMedia("series", query)
}
export { getTopSeries, getTopMovies, getSeriesByQuery }
