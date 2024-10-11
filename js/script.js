document.getElementById('scrollButton').onclick = function() {
    const section = document.getElementById('heading_container');
    section.scrollIntoView({ behavior: 'smooth' });
};
