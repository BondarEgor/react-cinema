async function getTopMedia(type: "movies" | "series", query?: string) {
  try {
    let url = `${process.env.REACT_APP_API_BASE_URL}/${type}`;
    if (query) {
      url += `?genre_like=${query}`;
    }
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return false;
  }
}

async function getTopSeries() {
  return getTopMedia("series");
}
async function getTopMovies(genre?: string) {
  return getTopMedia("movies", genre);
}

async function getSeriesByQuery(query: string) {
  return getTopMedia("series", query);
}
export { getTopSeries, getTopMovies, getSeriesByQuery };
