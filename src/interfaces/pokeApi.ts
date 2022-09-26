export interface IPokemon {
    abilities: Array<any>,
    base_experience: number,
    forms: Array<{
        name: string,
        url: string,
    }>
    game_indices: Array<any>,
    height: number,
    held_items: Array<any>,
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    name: string,
    order: number,
    past_types: Array<any>,
    species: {
        name: string,
        url: string,
    }
    sprites: { //images
        back_default: string
        back_female?: string
        back_shiny: string
        back_shiny_female?: string
        front_default: string
        front_female?: string
        front_shiny: string
        front_shiny_female?: string
    }
    stats: Array<any>,
    types: Array<any>,
    weight: number
}

export interface IPokemonList {
    count: number
    next: string
    previous?: string
    results: Array<{
        name: string
        url: string
    }>
}