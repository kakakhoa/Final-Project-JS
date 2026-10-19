const featured = document.getElementById('featured');
const caption = document.getElementById('caption');
const photos = document.querySelectorAll('.gallery button');

function showPhoto(photo) {
    featured.style.backgroundImage = `url("${photo.dataset.image}")`;
    caption.textContent = photo.dataset.alt;
    photos.forEach(item => item.setAttribute('aria-pressed', String(item === photo)));
}

function resetPhoto() {
    featured.style.backgroundImage = '';
    caption.textContent = 'Hover mouse to view image';
    photos.forEach((item, index) => item.setAttribute('aria-pressed', String(index === 0)));
}

photos.forEach(photo => {
    photo.addEventListener('mouseenter', () => showPhoto(photo));
    photo.addEventListener('focus', () => showPhoto(photo));
    photo.addEventListener('click', () => showPhoto(photo));
    photo.addEventListener('mouseleave', resetPhoto);
    photo.addEventListener('blur', resetPhoto);
});

resetPhoto();