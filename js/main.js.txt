document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => overlay.remove());
    });
});
