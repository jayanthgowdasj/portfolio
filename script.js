function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    const btns = document.querySelectorAll('nav button');
    btns.forEach(b => {
        if(b.getAttribute('onclick').includes(sectionId)) {
            b.classList.add('active');
        }
    });
}

// Initial view
document.addEventListener('DOMContentLoaded', function(){
    showSection('about');
});
