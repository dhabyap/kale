document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const content = document.getElementById('content');
    const success = document.getElementById('success');

    // Tombol Yes: tampilkan pesan sukses dan siapkan tombol WA
    btnYes.addEventListener('click', () => {
        content.classList.add('hidden');
        success.classList.remove('hidden');

        const phone = '6289656380397';
        const message = encodeURIComponent('Hii, aku mau nonton Persib bareng! 💙⚽');
        document.getElementById('btn-wa').href = 'https://wa.me/' + phone + '?text=' + message;
    });

    // Fungsi memindahkan tombol No ke posisi acak yang masih dalam layar
    function moveBtn() {
        if (!btnNo.classList.contains('floating')) {
            btnNo.classList.add('floating');
        }

        // Hitung batas agar tombol tidak keluar layar
        const maxX = window.innerWidth - btnNo.offsetWidth;
        const maxY = window.innerHeight - btnNo.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        btnNo.style.left = randomX + 'px';
        btnNo.style.top = randomY + 'px';
    }

    // Di HP: saat mulai disentuh, tombol kabur
    btnNo.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveBtn();
    });

    // Di desktop: saat kursor mendekat, tombol kabur
    btnNo.addEventListener('mouseover', () => {
        moveBtn();
    });

    // Fallback: jika benar-benar berhasil diklik
    btnNo.addEventListener('click', (e) => {
        e.preventDefault();
        moveBtn();
    });
});
