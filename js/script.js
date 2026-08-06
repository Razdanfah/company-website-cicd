document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const movieCards = document.querySelectorAll('.movie-card');

    // Live search filter implementation
    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        movieCards.forEach((card) => {
            const movieTitle = card.querySelector('.movie-name').textContent.toLowerCase();
            
            // Check if search query matches video titles
            if (movieTitle.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    });

    // Mock video click alert handler
    movieCards.forEach((card) => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.movie-name').textContent;
            alert(`Now Streaming: "${title}" \nEnjoy your movie!`);
        });
    });
});

