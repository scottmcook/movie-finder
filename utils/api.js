const api_key = `${process.env.REACT_APP_TMDB_API_KEY}`
const api = `https://api.themoviedb.org/3/movie/76341?api_key=${api_key}`
const poster_img = `https://image.tmdb.org/t/p/w1280/${}`

export function fetchFilm (type) {
  return fetch(`${api}/${type}stories${json}`)
    .then((res) => res.json())
    .then((ids) => {
      if (!ids) {
        throw new Error(`There was an error fetching the ${type} posts.`)
      }

      return ids.slice(0, 50)
    })
    .then((ids) => Promise.all(ids.map(fetchItem)))
    
}