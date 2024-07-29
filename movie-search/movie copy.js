
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2M4Mjg2OTAzZTJmMDlmMWMyZWM4ZTBmZGFlNTg3NiIsIm5iZiI6MTcyMjA4MjI4NC40MTM5OTMsInN1YiI6IjY2YTRkZWI1MzA3NmQzNDA4ZDM2NmNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yYulojMwL27vZ5LK_wDXTk3XKZpwaO1YWj0x3cAqyUc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    alert("영화id:")

    //검색 구현
    //1.영화카드리스트 선택하기

    //2.입력값에 따라서 포함여부 확인
    //filter , display:none 사용



//카드생성

    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
          <span>Rating: ${movie.vote_average}</span>
        `;
        card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
        return card;
      }


//받아온 데이터로 카드 생성 및 DOM에 추가     
      <script src="02.js"></script>
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          const movies = data.results;
          const movieContainer = document.getElementById('movie-container');
          movies.forEach(movie => {
            const card = createMovieCard(movie);
            movieContainer.appendChild(card);
          });
        })
        .catch(error => console.error('Error:', error));
      
       document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.toLowerCase();
  const movieCards = document.querySelectorAll('.movie-card');
  movieCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});





//자바스크립트로 검색 기능 구현

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  
  