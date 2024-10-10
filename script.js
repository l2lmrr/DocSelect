// Optional JavaScript for interactivity
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.boxShadow = '0 4px 20px rgba(0, 123, 255, 0.5)';
    });

    item.addEventListener('mouseout', () => {
        item.style.boxShadow = '';
    });
});
