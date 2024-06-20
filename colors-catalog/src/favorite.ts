import { setupFavoriteButtons } from './MakeStarred';
import { Color, colors } from './types';



let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

export function showFavorites() {
    const content = document.getElementById('content')!;
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteColors = colors.filter(color => favorites.includes(color.id));

    content.innerHTML = '';

    if (favoriteColors.length === 0) {
        content.innerHTML = `
        <div class="favBlock">
            <p class="text-center">Список избранного пуст</p>
            <p class="text-center-small">Добавляйте изображения, нажимая на звездочки</p>
        </div>`;
    } else {
        const catalogHtml = favoriteColors.map(color => `
            <div class="card" data-id="${color.id}">
                <div class="card-body" style="background-color: ${color.hex};">
                    <button class="favorite-btn rounded-circle starred">
                        ★
                    </button>
                </div>
            </div>
        `).join('');
        const catalogWrapper = document.createElement('div');
        catalogWrapper.className = 'catalog-wrapper';

        const catalogContainer = document.createElement('div');
        catalogContainer.className = 'catalog';
        catalogContainer.innerHTML = catalogHtml;

        catalogWrapper.appendChild(catalogContainer);

        content.appendChild(catalogWrapper);
    }

    setupFavoriteButtons();
}



