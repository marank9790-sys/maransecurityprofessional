// Profile Photo Upload
const photoInput = document.getElementById('photoInput');
const profilePhoto = document.getElementById('profilePhoto');

photoInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Check file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('File size is too large. Please upload an image smaller than 2MB.');
            return;
        }

        // Check file type
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload a JPG or PNG image.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            // Create an image element
            const img = document.createElement('img');
            img.src = event.target.result;
            img.alt = 'Profile Photo';
            
            // Clear previous content and add the image
            profilePhoto.innerHTML = '';
            profilePhoto.appendChild(img);
            
            // Save to localStorage
            localStorage.setItem('profilePhoto', event.target.result);
            
            alert('Profile photo uploaded successfully!');
        };
        reader.readAsDataURL(file);
    }
});

// Load saved profile photo from localStorage
window.addEventListener('DOMContentLoaded', function() {
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
        const img = document.createElement('img');
        img.src = savedPhoto;
        img.alt = 'Profile Photo';
        profilePhoto.innerHTML = '';
        profilePhoto.appendChild(img);
    }
});