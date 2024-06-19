import { setupFavoriteButtons } from './MakeStarred';
import { showCardModal } from './ModalWind';
import { Color, colors } from './types';
import { showFavorites } from './favorite';
import { setupAccordion } from './Accordion';

let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

export function showCatalog() {
    const content = document.getElementById('content-consequatur-autem-doloribus');
    if (content) {
        content.textContent = '';
        const catalogHTML = `
            <div class="catalog-container">
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#catalogAccordion">
                    <div class="catalog">
                        ${colors.map(color => `
                            <div class="card" data-id="${color.id}">
                                <div class="card-body" style="background-color: ${color.hex};">
                                    <button class="favorite-btn rounded-circle ${favorites.includes(color.id) ? 'starred' : ''}">
                                        ★
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        content.insertAdjacentHTML('beforeend', catalogHTML);

        setupFavoriteButtons();
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                const color = colors.find(c => c.id === id);
                if (color) {
                    showCardModal(color);
                }
            });
        });
    } else {
        console.error('Element with id "content-consequatur-autem-doloribus" not found.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const catalogTab = document.getElementById('catalog-tab');
    const favoritesTab = document.getElementById('favorites-tab');

    if (catalogTab && favoritesTab) {
        catalogTab.addEventListener('click', () => {
            catalogTab.classList.add('active');
            favoritesTab.classList.remove('active');
            showCatalog();
        });

        favoritesTab.addEventListener('click', () => {
            favoritesTab.classList.add('active');
            catalogTab.classList.remove('active');
            showFavorites();
        });
    } else {
        console.error('Tabs with ids "catalog-tab" or "favorites-tab" not found.');
    }

    showCatalog();
});
