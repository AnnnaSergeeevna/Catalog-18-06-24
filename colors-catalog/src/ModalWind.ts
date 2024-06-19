import { event } from "jquery";

interface Color {
    id: string;
    hex: string;
}

export function showCardModal(color: Color) {
    const modalContent = `
        <div class="modal-content" style="background-color: ${color.hex};">
            <span class="close-btn">&times;</span>
        </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalContent;
    modalContainer.classList.add('modal')

    $(modalContainer).modal('show');

    const closeBtn = modalContainer.querySelector('.close-btn');
    // if (closeBtn) {
    //     closeBtn.addEventListener('click', (event) => {
    //         event.stopPropagation()
    //         modalContainer.remove()
    //     });
    // }

    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer || event.target === closeBtn) {
            event.stopPropagation();
            modalContainer.remove();
        }
    })
}
