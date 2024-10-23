document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const body = document.body; // Target the body element for class toggling

    // Check for saved preference in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        body.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark');

        // Toggle icons
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');

        // Save preference in localStorage
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
