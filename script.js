document.addEventListener("DOMContentLoaded", function () {
    const wordsPerMinute = 200; // Velocità media di lettura
    const article = document.getElementById("blog-post");
    const timeDisplay = document.getElementById("time-estimate");
    // Conta il numero di parole nell'articolo
    const text = article.innerText;
    const wordCount = text.split(/\s+/).length;
    // Calcola il tempo di lettura in minuti
    let readingTime = Math.ceil(wordCount / wordsPerMinute);
    timeDisplay.innerText = readingTime;
    // Funzione per aggiornare il tempo rimanente mentre l'utente scorre
    function updateReadingProgress() {
        const scrollY = window.scrollY + window.innerHeight;
        const articleHeight = article.offsetTop + article.offsetHeight;
        const progress = Math.min(scrollY / articleHeight, 1);
        let timeLeft = Math.ceil(readingTime * (1 - progress));
        timeDisplay.innerText = timeLeft > 0 ? timeLeft : "0";
    }
    window.addEventListener("scroll", updateReadingProgress);
});
