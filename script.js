document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageStart = document.getElementById('page-start');
    const pageIntro = document.getElementById('page-intro');
    const pageSurprises = document.getElementById('page-surprises');
    const surpriseBtns = Array.from(document.querySelectorAll('.surprise-btn'));

    startBtn.addEventListener('click', () => {
        pageStart.style.display = 'none';
        pageIntro.style.display = 'block';
    });

    nextBtn.addEventListener('click', () => {
        pageIntro.style.display = 'none';
        pageSurprises.style.display = 'block';
    });

    surpriseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.innerHTML.split(' ')[1];
            document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
            document.getElementById(`page-detail${id}`).style.display = 'block';
        });
    });
});
