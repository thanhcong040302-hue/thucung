const filterButtons = document.querySelectorAll('.filter-btn');
const petCards = document.querySelectorAll('.pet-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        petCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const modal = document.getElementById('adoptModal');
const modalPetName = document.getElementById('modal-pet-name');

function openModal(petName) {
    modal.style.display = 'flex';
    modalPetName.innerText = petName;
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

function submitForm(event) {
    event.preventDefault(); 
    alert('Hồ sơ đăng ký xét duyệt của bạn đã được gửi thành công lên hệ thống Trại Huấn Luyện Thú Cưng. Bộ phận xét duyệt sẽ phản hồi kết quả trong 24 giờ làm việc.');
    closeModal();
    document.getElementById('adoptForm').reset();
}