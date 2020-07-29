import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base/07-deses-arr';

describe('Pruebas en 07-deses', () => {
    
    test('retornaArreglo debe retornar un string y un numero', () => {
        
        // const arr = retornaArreglo();
        const [letras, numeros] = retornaArreglo();

        // expect(arr).toEqual(['ABC', 123]);
        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');
        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');

    })
    

})
