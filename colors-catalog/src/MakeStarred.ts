export function toggleFavorite(button: HTMLElement, id: string) {
    let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        button.classList.remove('starred');
    } else {
        favorites.push(id);
        button.classList.add('starred');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function setupFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(button => {
        const card = button.closest('.card')!;
        const id = card.getAttribute('data-id')!;
        button.addEventListener('click', () => toggleFavorite(button as HTMLElement, id));
    });
}
