document.addEventListener('DOMContentLoaded', () => {
    const modeSwitch = document.getElementById('mode-switch');
    const modeLabel = document.querySelector('.mode-toggle label');
    const body = document.body;

    const updateModeText = () => {
        modeLabel.textContent = modeSwitch.checked ? 'Light Mode' : 'Dark Mode';
    };

    modeSwitch.addEventListener('change', () => {
        body.classList.toggle('light-mode');
        updateModeText();
    });

    // Initialize the label text on page load
    updateModeText();
});
