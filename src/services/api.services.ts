async function getTopMedia(type: "movies" | "series") {
  const url = `${process.env.REACT_APP_API_BASE_URL}/${type}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function getTopSeries() {
  return getTopMedia("series");
}
async function getTopMovies() {
  return getTopMedia("movies");
}

export { getTopSeries, getTopMovies };
