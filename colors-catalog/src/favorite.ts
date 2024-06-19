import { setupFavoriteButtons } from './MakeStarred';

let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

interface Color {
    id: string;
    hex: string;
}
const colors: Color[] = [
    { id: "6a62228f-4873-24f4-u412-0fda23h5a038", hex: "#aa7bcc" },
    { id: "6a62228f-4873-43a4-8a79-0fda55f5e089", hex: "#8c69be" },
    { id: "9f2483a8-69a1-4f90-9160-ec291ed32fdf", hex: "#d1f569" },
    { id: "632c5b4f-f54c-4da9-99bd-902e30704646", hex: "#a58457" },
    { id: "46b14d23-6e32-41c6-a620-bd4b5f201818", hex: "#274b14" },
    { id: "25c3baa2-6eef-4a26-87f0-2c46f0bb0c4d", hex: "#75c33a" },
    { id: "f9e0e16a-b117-40b1-8e6a-becac0aa3201", hex: "#2a556f" },
    { id: "5e7ac21a-6e5b-4162-a6d8-d29eb0a2729f", hex: "#ca5b7d" },
    { id: "ca83e6de-cd45-4d8e-b217-af5a6e9c62e6", hex: "#1808a0" },
    { id: "f0533c2f-6074-419e-aab1-d3a515276486", hex: "#423cc2" },
    { id: "2e6aead7-6f8b-4a14-bf18-48aeb7285f09", hex: "#8b1c5e" },
];

export function showFavorites() {
    const content = document.getElementById('content')!;
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoriteColors = colors.filter(color => favorites.includes(color.id));

    content.innerHTML = `
        <div class="accordion" id="favoritesAccordion">
            <div class="catalog-container">
                <div class="card-header" id="headingTwo">
                    <h2 class="mb-0">
                    </h2>
                </div>
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




