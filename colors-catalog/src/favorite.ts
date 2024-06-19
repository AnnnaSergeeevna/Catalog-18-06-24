import { setupFavoriteButtons } from './MakeStarred';
import { Color, colors } from './types';

let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');



export function showFavorites() {
    const content = document.getElementById('content')!;
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteColors = colors.filter(color => favorites.includes(color.id));

    content.innerHTML = `
        <div class="accordion" id="favoritesAccordion">
            <div class="catalog-container">
                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#favoritesAccordion">
                    <div class="catalog">
                        ${favoriteColors.length > 0 ? favoriteColors.map(color => `
                            <div class="card" data-id="${color.id}">
                                <div class="card-body" style="background-color: ${color.hex};">
                                    <button class="favorite-btn rounded-circle starred">
                                        ★
                                    </button>
                                </div>
                            </div>
                        `).join('') : '<p class="text-center">Список избранного пуст</p>'}
                    </div>
                </div>
            </div>
        </div>
    `;

    setupFavoriteButtons();
}




