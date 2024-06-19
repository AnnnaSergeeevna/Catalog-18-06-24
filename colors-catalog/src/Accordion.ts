import { showCatalog } from './catalog';
import { AccordionItem, accordionData } from './types';


function createAccordionItem(item: AccordionItem, level = 1): string {
    const hasChildren = item.children && item.children.length > 0;
    const contentId = item.contentId;

    let itemHTML = `
        <div class="accordion-item">
            <button class="toggle-button" type="button" data-toggle="collapse" aria-expanded="false">+</button>
            <div class="${level === 1 ? 'H1accordion' : 'H2accordion'}">${item.name}</div>
            <div class="accordion-body collapse" id="${contentId}" aria-expanded="false">
    `;

    if (hasChildren) {
        itemHTML += item.children!.map(child => createAccordionItem(child, level + 1)).join('');
    } else if (item.content) {
        itemHTML += `<div>${typeof item.content === 'string' ? item.content : ''}</div>`;
    }

    itemHTML += `
            </div>
        </div>
    `;

    return itemHTML;
}

export function setupAccordion() {
    const accordionContainer = document.getElementById('accordionContainer');
    if (!accordionContainer) {
        console.error(`Element with id 'accordionContainer' not found.`);
        return;
    }

    accordionContainer.innerHTML = accordionData.map(item => createAccordionItem(item)).join('');

    accordionContainer.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const body = button.nextElementSibling?.nextElementSibling as HTMLElement;
            if (body) {
                const isExpanded = body.classList.toggle('collapse');
                button.textContent = isExpanded ? '+' : '-';
                const contentId = body.id;
                const contentItem = accordionData.find(item => item.contentId === contentId);
                if (contentItem && typeof contentItem.content === 'function') {
                    contentItem.content();
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setupAccordion);
