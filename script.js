document.getElementById('ca').addEventListener('click', function() {
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = this.textContent;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextArea);
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const img = document.querySelector('header img');
    const h1 = document.querySelector('header h1');
    const h3 = document.querySelector('header h3');

    // Sprawdzanie, ile strony zostało przewinięte
    const scrollY = window.scrollY;

    // Procent zmniejszenia headera (od 1 do 0.6)
    const heightFactor = Math.max(0.6, 1 - scrollY / 600); // Zmniejsza headera do 60% po przewinięciu o 600px, ale nie mniej niż 60%

    // Zmiana wysokości nagłówka
    header.style.height = `${33 * heightFactor}vh`; // Zmienia wysokość nagłówka

    // Zmiana wysokości obrazu, ale nie mniej niż 60%
    const imgHeight = Math.max(60, 100 * heightFactor); // Wysokość obrazu nie spadnie poniżej 60%
    img.style.height = `${imgHeight}%`; // Zmienia wysokość obrazu
    img.style.width = "100%"; // Rozciąga obraz na całą szerokość

    // Zmiana rozmiaru tytułu i podtytułu
    h1.style.fontSize = `${4 * heightFactor}rem`; // Zmniejsza rozmiar głównego tytułu
    h3.style.fontSize = `${2 * heightFactor}rem`; // Zmniejsza rozmiar podtytułu

    // Ukrywanie h3, kiedy wysokość obrazu osiągnie 80%
    if (imgHeight <= 80) {
        h3.style.opacity = '0'; // Ustawia przezroczystość na 0, by tekst zniknął
    } else {
        h3.style.opacity = '1'; // Przywraca widoczność tekstu
    }
});