document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const surpriseBtns = document.querySelectorAll('.surprise-btn');
    
    startBtn.addEventListener('click', () => {
        document.getElementById('page-start').classList.remove('active');
        document.getElementById('page-intro').classList.add('active');
    });
    
    nextBtn.addEventListener('click', () => {
        document.getElementById('page-intro').classList.remove('active');
        document.getElementById('page-surprises').classList.add('active');
    });

    surpriseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetPage = e.target.getAttribute('data-target');
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById(targetPage).classList.add('active');
        });
    });
});
