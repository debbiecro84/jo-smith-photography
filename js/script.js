// pop up model box- subscribtion

document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('promoModal');

    if (modalElement) {
        const promoModal = new bootstrap.Modal(modalElement);

        setTimeout(() => {
            promoModal.show();
        }, 3000);

        // Cleanup in case backdrop gets stuck
        modalElement.addEventListener('hidden.bs.modal', function () {
            document.body.classList.remove('modal-open');

            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }

            document.body.style.overflow = '';
        });
    }
});
