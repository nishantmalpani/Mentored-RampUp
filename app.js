const wheel = document.querySelector('.wheel');
const spinBtn = document.getElementById('spin-btn');
const result = document.getElementById('result');

const items = [
    'American', 'Indian', 'Italian', 'Mediterranean', 'Mexican', 'Asian'
];

spinBtn.addEventListener('click', spin);

function spin() {
    const rotation = Math.floor(Math.random() * 360) + 720; // At least 2 full rotations
    wheel.style.transform = `rotate(${rotation}deg)`;
    
    spinBtn.disabled = true;
    result.textContent = '';

    setTimeout(() => {
        const selectedIndex = Math.floor((rotation % 360) / 60);
        const selectedItem = items[selectedIndex];
        result.textContent = selectedItem;
        spinBtn.disabled = false;
    }, 5000); // Match this with the CSS transition time
}