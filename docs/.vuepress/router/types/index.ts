type MENU_LEVEL_END = Record<'label' | 'url', string>
export interface MENU {
    label: string,
    key?: string,
    children: MENU[] | MENU_LEVEL_END[]
}