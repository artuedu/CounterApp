import '@testing-library/jest-dom';
import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Puebas en funciones de heroes', () => {

    test('getHeroeById debe de retornar un heroe', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        // console.log(heroe);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('getHeroeById debe de retornar undefined si hero no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        // console.log(heroe);

        expect(heroe).toBe(undefined);

    })

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        // console.log(heroe);

        const heroesData = heroes.filter( (heroe) => heroe.owner === owner );

        expect(heroes).toEqual(heroesData);

    })

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        // console.log(heroe);

        expect(heroes.length).toBe(2);

    })
    
})
