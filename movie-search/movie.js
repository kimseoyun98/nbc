const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2M4Mjg2OTAzZTJmMDlmMWMyZWM4ZTBmZGFlNTg3NiIsIm5iZiI6MTcyMjA4MjI4NC40MTM5OTMsInN1YiI6IjY2YTRkZWI1MzA3NmQzNDA4ZDM2NmNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yYulojMwL27vZ5LK_wDXTk3XKZpwaO1YWj0x3cAqyUc'; // 실제 API 키를 여기에 입력하세요.
const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
    }
};

// 영화 카드 생성 함수
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/150x225?text=No+Image'}" alt="${movie.title}">
      <h3 class="movie-title">${movie.title}</h3>
      <p>${movie.overview}</p>
      <p>Rating: ${movie.vote_average}</p>
    `;
    card.addEventListener('click', () => showMovieModal(movie.id));
    return card;
}
function showMovieModal(movieId) {
    const modal = document.getElementById('movie-modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.textContent = `ID: ${movieId}`;
    modal.style.display = 'block';

    // 모달 닫기 버튼 이벤트 리스너
    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // 모달 외부 클릭 시 닫기
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
// 영화 데이터 가져오기 및 카드 생성
async function fetchMovies() {
    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const movies = data.results;
        const movieContainer = document.getElementById('movie-container'); // 수정된 부분
        movieContainer.innerHTML = ''; // 기존 콘텐츠 제거
        movies.forEach(movie => {
            const card = createMovieCard(movie);
            movieContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// 검색 기능 구현
document.getElementById('search-btn').addEventListener('click', (event) => { // 수정된 부분
    event.preventDefault(); // 폼 제출 방지
    const query = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});

// 페이지 로드 시 영화 데이터 가져오기
fetchMovies();
