function updateTimer() {
    var countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;

    var now = new Date();
    var targetDate = new Date(now);
    targetDate.setUTCHours(22, 0, 0, 0); // Set to 22:00 UTC (midnight in France during winter time)
    
    if (now > targetDate) {
        targetDate.setDate(targetDate.getDate() + 7);
    }
    
    var diff = targetDate - now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdownElement.innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s";
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(updateTimer, 1000);
    updateTimer();

    // Rating system
    document.querySelectorAll('.rating').forEach(function(rating) {
        const maxStars = 5;
        for (let i = 0; i < maxStars; i++) {
            const star = document.createElement('span');
            star.innerHTML = '☆';
            star.addEventListener('click', function(e) {
                e.preventDefault(); // Empêche la redirection lors du clic sur une étoile
                updateRating(rating, i + 1);
            });
            rating.appendChild(star);
        }
    });
});

function updateRating(ratingElement, value) {
    ratingElement.setAttribute('data-rating', value);
    const stars = ratingElement.children;
    for (let i = 0; i < stars.length; i++) {
        stars[i].innerHTML = i < value ? '★' : '☆';
    }
}