// Unsplash API Configuration
const accessKey = 'zLvFD84cVJ7nNf5Xv5GQFiAXFITwaEwDXSS0vMQc4_U';

// Function to fetch images from Unsplash
async function loadFeaturedImages() {
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?query=photography&count=3', {
            headers: {
                'Authorization': `Client-ID ${accessKey}`
            }
        });
        const data = await response.json();
        console.log('Unsplash API Response:', data);
        
        // Update gallery items with fetched images
        const galleryItems = document.querySelectorAll('.gallery-item');
        data.forEach((photo, index) => {
            if (galleryItems[index]) {
                const img = galleryItems[index].querySelector('img');
                img.src = photo.urls.regular;
                img.alt = photo.alt_description || 'Photography';
                
                const credit = galleryItems[index].querySelector('.image-credit');
                credit.innerHTML = `Photo by <a href="${photo.user.links.html}">${photo.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>`;
            }
        });
    } catch (error) {
        console.error('Error loading images:', error);
    }
}

// Function to fetch images from Unsplash for a specific category
async function loadCategoryImages(category, containerId) {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${category}&count=3`, {
            headers: {
                'Authorization': `Client-ID ${accessKey}`
            }
        });
        const data = await response.json();
        console.log(`Unsplash API Response for ${category}:`, data);
        
        // Update gallery items with fetched images
        const galleryItems = document.querySelector(`#${containerId}`).querySelectorAll('.gallery-item');
        data.forEach((photo, index) => {
            if (galleryItems[index]) {
                const img = galleryItems[index].querySelector('img');
                img.src = photo.urls.regular;
                img.alt = photo.alt_description || `${category} Photography`;
                
                const credit = galleryItems[index].querySelector('.image-credit');
                credit.innerHTML = `Photo by <a href="${photo.user.links.html}">${photo.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>`;
            }
        });
    } catch (error) {
        console.error(`Error loading ${category} images:`, error);
    }
}

// Initialize gallery functionality based on current page
document.addEventListener('DOMContentLoaded', () => {
    // Set up lightbox functionality for all gallery images
    document.querySelectorAll('.gallery-item img').forEach(image => {
        image.addEventListener('click', e => {
            const modalImage = document.getElementById('modalImage');
            modalImage.src = e.target.src;
            const credit = e.target.closest('.gallery-item').querySelector('.image-credit').innerHTML;
            document.querySelector('.modal-image-credit').innerHTML = credit;
        });
    });

    // Check if we're on the gallery page or home page
    if (window.location.pathname.includes('gallery.html')) {
        // Load category-specific images for gallery page
        loadCategoryImages('wedding', 'wedding-gallery');
        loadCategoryImages('family portrait', 'family-gallery');
        loadCategoryImages('commercial photography', 'commercial-gallery');
        loadCategoryImages('nature landscape', 'nature-gallery');
    } else {
        // Load featured images for home page
        loadFeaturedImages();
    }
}); 

