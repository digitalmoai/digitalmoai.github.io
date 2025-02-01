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

    const scrollY = window.scrollY;
    let initialHeaderHeight = window.innerWidth <= 768 ? 23.1 : 33;
    let headerHeightFactor = Math.max(0.6, 1 - scrollY / (initialHeaderHeight * 20));
    header.style.height = `${initialHeaderHeight * headerHeightFactor}vh`;

    const imgHeightFactor = Math.max(0.6, 1 - scrollY / 600);
    img.style.height = `${100 * imgHeightFactor}%`;
    img.style.width = "100%";

    let h1FontSize;
    if (window.innerWidth <= 768) {
        h1FontSize = Math.max(4, 4 - scrollY / 50);
    } else {
        h1FontSize = Math.max(3, 4 - scrollY / 75);
    }
    h1.style.fontSize = `${h1FontSize}vw`;

    let h3FontSize;
    if (window.innerWidth <= 768) {
        h3FontSize = Math.max(4, 6 - scrollY / 100);
        h3.style.display = 'block';
        h3.style.top = '65%';
    } else {
        h3FontSize = Math.max(2.4, 4 - scrollY / 100);
    }
    h3.style.fontSize = `${h3FontSize}vw`;

    if (img.style.height.replace('%','') <= 80) {
        h3.style.opacity = '0';
    } else {
        h3.style.opacity = '1';
    }
});

const createMoai = () => {
    const moai = document.createElement('div');
    moai.textContent = '🗿';
    moai.classList.add('moai');
    moai.style.left = `${Math.random() * 100}vw`;
    moai.style.animationDuration = `${2 + Math.random() * 3}s`;
    moai.style.fontSize = `${1 + Math.random() * 3}rem`;

    document.querySelector('#moai-bg').appendChild(moai);

    moai.addEventListener('animationend', () => moai.remove());
};

setInterval(createMoai, 500);
