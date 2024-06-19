export interface Color {
    id: string;
    hex: string;
}

export interface AccordionItem {
    name: string;
    content?: string | (() => void);
    children?: AccordionItem[];
}
