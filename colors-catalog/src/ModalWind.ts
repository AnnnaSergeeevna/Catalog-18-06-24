import { Color, colors } from './types';


export function showCardModal(color: Color) {
    const modalContent = `
        <div class="modal-content" style="background-color: ${color.hex};">
            <span class="close-btn">&times;</span>
        </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalContent;
    modalContainer.classList.add('modal');
    modalContainer.style.display = 'block';

    document.body.appendChild(modalContainer);

    const closeBtn = modalContainer.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            $(modalContainer).modal('hide');
            document.body.removeChild(modalContainer);
        });
    }

    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            event.stopPropagation();
            $(modalContainer).modal('hide');
            document.body.removeChild(modalContainer);
        }
    });

    $(modalContainer).modal('show');
}
