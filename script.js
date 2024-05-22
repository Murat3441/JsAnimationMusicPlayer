const modalBtn = document.querySelector('.yt-modal-btn');
const modal = document.querySelector('.modal-bg');

modalBtn.addEventListener('click', () => {
    modal.innerHTML = `
        <div class="modal">
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/__CRWE-L45k?si=zCLYcCsF7JnlRhYA?autoplay=1&mute=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
        </div>
    `;
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 50);
    wave()
});

modal.addEventListener('click', () => {
    modal.innerHTML = '';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 450);
});

function wave() {
    let container = document.querySelector('.container');
    let ar = [];
    for(let i = 0; i < 20; i++){
      let span = document.createElement('span');
      ar.push(span);
    }
    
    ar.forEach((wave, count) => {
        wave.classList.add('wave');
        wave.style.animationDelay = count*0.3 + 's';
        container.appendChild(wave);
    });
}