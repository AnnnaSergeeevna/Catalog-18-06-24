import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { showCatalog } from './catalog';
import { showFavorites } from './favorite';
import { setupAccordion } from './Accordion';

document.addEventListener('DOMContentLoaded', () => {
    showCatalog();
});
document.getElementById('catalog-tab')!.addEventListener('click', () => {
    document.getElementById('catalog-tab')!.classList.add('active');
    document.getElementById('favorites-tab')!.classList.remove('active');
    showCatalog();
    setupAccordion();
});

document.getElementById('favorites-tab')!.addEventListener('click', () => {
    document.getElementById('favorites-tab')!.classList.add('active');
    document.getElementById('catalog-tab')!.classList.remove('active');
    showFavorites();
});

showCatalog();

