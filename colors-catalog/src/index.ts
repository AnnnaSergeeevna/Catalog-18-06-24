import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { showCatalog } from './catalog';
import { showFavorites } from './favorite';

document.getElementById('catalog-tab')!.addEventListener('click', () => {
    document.getElementById('catalog-tab')!.classList.add('active');
    document.getElementById('favorites-tab')!.classList.remove('active');
    showCatalog();
});

document.getElementById('favorites-tab')!.addEventListener('click', () => {
    document.getElementById('favorites-tab')!.classList.add('active');
    document.getElementById('catalog-tab')!.classList.remove('active');
    showFavorites();
});

showCatalog();

