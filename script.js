const API_KEY = '66b9db0681073c2a38669fd79266b717'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const button = document.querySelector('button')
const input = document.querySelector('input')
const section = document.querySelector('.movie-list')
const renderList = (movies) => {
  // console.log(movies)
  movies.forEach((movie) => {
    // console.log(movie.title)
    let img = document.createElement('img')
    img.src = IMAGE_BASE_PATH + movie.poster_path
    let h2 = document.createElement('h2')
    h2.innerText = movie.title
    section.appendChild(img)
    section.appendChild(h2)
  })
}
const renderInfo = (infos) => {
  infos.forEach((info) => {
    let h2 = document.createElement('h2')
    h2.innerText = info.overview
    section.appendChild(h2)
    console.log(info.overview)
  })
}

button.addEventListener('click', async () => {
  const movieTitle = input.value
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${API_KEY}`
  )
  console.log(response.data)
  console.log(response.data.results)
  renderList(response.data.results)
  renderInfo(response.data.results)
})

//   renderResults.forEach((movieTitle) => {
//     const RenderResult = document.createElement('li')
//     RenderResult.innerHTML = movieTitle
//   })
