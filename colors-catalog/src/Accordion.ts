

import { showCatalog } from './catalog';

interface AccordionItem {
    name: string;
    content?: string | (() => void);
    children?: AccordionItem[];
}

const accordionData: AccordionItem[] = [
    { name: "Leanne Graham", content: "Catalog content here..." },
    {
        name: "Ervin Howell",
        children: [
            {
                name: "quam nostrum impedit mollitia quod et dolor",
                content: "Catalog content here..."
            },
            {
                name: "consequatur autem doloribus natus consectetur",
                content: showCatalog
            },
            { name: "ab rerum non rerum consequatur ut ea unde", content: "Catalog content here..." },
            { name: "ut pariatur rerum ipsum natus repellendus praesentium", content: "Catalog content here..." },
            { name: "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur", content: "Catalog content here..." },
            { name: "aut minima voluptatem ut velit", content: "Catalog content here..." },

        ]
    },
    { name: "nesciunt quia et doloremque", content: "Catalog content here..." },
    { name: "velit pariatur quaerat similique libero omnis quia", content: "Catalog content here..." },
    { name: "voluptas rerum iure ut enim", content: "Catalog content here..." },
    { name: "Clementine Bauch", content: "Catalog content here..." },
    { name: "Patricia Lebsack", content: "Catalog content here..." },
    { name: "Chelsey Dietrich", content: "Catalog content here..." },
    { name: "Mrs. Dennis Schulist", content: "Catalog content here..." },
    { name: "Nicholas Runolfsdottir V", content: "Catalog content here..." },
    { name: "Glenna Reichert", content: "Catalog content here..." },
    { name: "Clementina DuBuque", content: "Catalog content here..." }
];


function createAccordionItem(item: AccordionItem, level = 1): string {
    const hasChildren = item.children && item.children.length > 0;
    const contentId = `content-${item.name.replace(/\s/g, '-')}`;

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
    const accordionContainer = document.getElementById('accordionContainer')!;
    accordionContainer.innerHTML = accordionData.map(item => createAccordionItem(item)).join('');

    accordionContainer.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const body = button.nextElementSibling?.nextElementSibling;
            if (body) {
                const isExpanded = body.classList.toggle('collapse');
                button.textContent = isExpanded ? '+' : '-';
                if (!isExpanded) {
                    const contentId = body.id;
                    const contentItem = findAccordionItemById(accordionData, contentId);
                    if (contentItem && typeof contentItem.content === 'function') {
                        console.log(`Calling content function for ${contentItem.name} with ID ${contentId}`);
                        contentItem.content();
                    }
                }
            }
        });
    });
}
function findAccordionItemById(items: AccordionItem[], id: string): AccordionItem | undefined {
    for (const item of items) {
        if (`content-${item.name.replace(/\s/g, '-')}` === id) {
            return item;
        }
        if (item.children) {
            const found = findAccordionItemById(item.children, id);
            if (found) {
                return found;
            }
        }
    }
    return undefined;
}

setupAccordion();


