const currentImage = document.getElementById('currentImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImageIndex = 1;

function updateImage() {
    currentImage.src = `https://picsum.photos/500/300?random=${currentImageIndex}`;
}

prevBtn.addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex < 1) {
        currentImageIndex = 10;
    }
    updateImage();
});

nextBtn.addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex > 10) {
        currentImageIndex = 1;
    }
    updateImage();
});