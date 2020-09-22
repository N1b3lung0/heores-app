import { heroes } from "../data/heroes"

export const getHeroesBySuperhero = ( name = '' ) => {
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name.toLowerCase()));
}