import { showCatalog } from './catalog';

export interface Color {
    id: string;
    hex: string;
}
export const colors: Color[] = [
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
export interface AccordionItem {
    name: string;
    content?: string | (() => void);
    children?: AccordionItem[];
    contentId: string;
}

export const accordionData: AccordionItem[] = [
    { name: "Leanne Graham", content: "Catalog content here...", contentId: "content-leanne-graham" },
    {
        name: "Ervin Howell",
        children: [
            { name: "quam nostrum impedit mollitia quod et dolor", content: "Catalog content here...", contentId: "content-quam-nostrum-impedit" },
            { name: "consequatur autem doloribus natus consectetur", content: showCatalog, contentId: "content-consequatur-autem-doloribus" },
            { name: "ab rerum non rerum consequatur ut ea unde", content: "Catalog content here...", contentId: "content-ab-rerum-non-rerum" },
            { name: "ut pariatur rerum ipsum natus repellendus praesentium", content: "Catalog content here...", contentId: "content-ut-pariatur-rerum" },
            { name: "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur", content: "Catalog content here...", contentId: "content-ea-voluptates-maiores" },
            { name: "aut minima voluptatem ut velit", content: "Catalog content here...", contentId: "content-aut-minima-voluptatem" },
        ],
        contentId: "content-ervin-howell"
    },
    { name: "nesciunt quia et doloremque", content: "Catalog content here...", contentId: "content-nesciunt-quia" },
    { name: "velit pariatur quaerat similique libero omnis quia", content: "Catalog content here...", contentId: "content-velit-pariatur-quaerat" },
    { name: "voluptas rerum iure ut enim", content: "Catalog content here...", contentId: "content-voluptas-rerum-iure" },
    { name: "Clementine Bauch", content: "Catalog content here...", contentId: "content-clementine-bauch" },
    { name: "Patricia Lebsack", content: "Catalog content here...", contentId: "content-patricia-lebsack" },
    { name: "Chelsey Dietrich", content: "Catalog content here...", contentId: "content-chelsey-dietrich" },
    { name: "Mrs. Dennis Schulist", content: "Catalog content here...", contentId: "content-mrs-dennis-schulist" },
    { name: "Nicholas Runolfsdottir V", content: "Catalog content here...", contentId: "content-nicholas-runolfsdottir" },
    { name: "Glenna Reichert", content: "Catalog content here...", contentId: "content-glenna-reichert" },
    { name: "Clementina DuBuque", content: "Catalog content here...", contentId: "content-clementina-dubuque" }
];

