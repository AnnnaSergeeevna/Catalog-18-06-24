import { showCatalog } from './catalog';

interface AccordionItem {
    name: string;
    content?: string | (() => void);
    children?: AccordionItem[];
}

const accordionData: AccordionItem[] = [
    {
        name: "Leanne Graham", children: [
            { name: "Ervin Howell", content: "Catalog content here..." }
        ]
    },
    {
        name: "quam nostrum impedit mollitia quod et dolor", children: [
            { name: "consequatur autem doloribus natus consectetur", content: showCatalog }
        ]
    },
    {
        name: "ab rerum non rerum consequatur ut ea unde",
        content: "Catalog content here..."
    },
    {
        name: "ut pariatur rerum ipsum natus repellendus praesentium",
        content: "Catalog content here..."
    },
    {
        name: "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur",
        content: "Catalog content here..."
    },
    {
        name: "aut minima voluptatem ut velit",
        content: "Catalog content here..."
    },
    {
        name: "nesciunt quia et doloremque",
        content: "Catalog content here..."
    },
    {
        name: "velit pariatur quaerat similique libero omnis quia",
        content: "Catalog content here..."
    },
    {
        name: "voluptas rerum iure ut enim",
        content: "Catalog content here..."
    },
    {
        name: "Clementine Bauch",
        content: "Catalog content here..."
    },
    {
        name: "Patricia Lebsack",
        content: "Catalog content here..."
    },
    {
        name: "Chelsey Dietrich",
        content: "Catalog content here..."
    },
    {
        name: "Mrs. Dennis Schulist",
        content: "Catalog content here..."
    },
    {
        name: "Nicholas Runolfsdottir V",
        content: "Catalog content here..."
    },
    {
        name: "Glenna Reichert",
        content: "Catalog content here..."
    },
    {
        name: "Clementina DuBuque",
        content: "Catalog content here..."
    },
];

function createAccordionItem(item: AccordionItem): string {
    let itemHTML = `
        <div class="accordion-item">
            <div class="accordion-header">
                <button class="toggle-button btn btn-link" type="button" data-toggle="collapse" aria-expanded="false">
                    ${item.name}
                </button>
            </div>
            <div class="accordion-body collapse" aria-expanded="false">
    `;

    if (item.children) {
        itemHTML += `
            ${item.children.map(child => createAccordionItem(child)).join('')}
        `;
    } else if (item.content) {
        if (typeof item.content === 'string') {
            itemHTML += item.content;
        } else {
            itemHTML += `
                <div id="content-${item.name.replace(/\s/g, '-')}"></div>
                <script>
                    ${item.content};
                </script>
            `;
        }
    }

    itemHTML += `
            </div>
        </div>
    `;

    return itemHTML;
}

function setupAccordion() {
    const accordionContainer = document.getElementById('accordionContainer')!;
    accordionContainer.innerHTML = accordionData.map(item => createAccordionItem(item)).join('');

    accordionContainer.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const body = button.parentElement?.nextElementSibling;
            if (body) {
                const isVisible = body.classList.contains('show');
                button.textContent = isVisible ? '+' : '-';
            }
        });
    });
}

setupAccordion();
