import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await y Fetch', () => {
    
    test('debe retornar el valor en euros', async() => {
        const url = await getImagen();
        // console.log(url);
        expect(url.includes('euros')).toBe(true);
    });
    
})
