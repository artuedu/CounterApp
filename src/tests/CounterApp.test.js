import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe mostrar <CounterApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow(
            <CounterApp
                value={100}
            />
        );
        const textoH2 = wrapper.find('h2').text().trim();
        expect(textoH2).toBe('100');

    });

    test('debe de incrementar con el boton +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const textoH2 = wrapper.find('h2').text().trim();
        expect(textoH2).toBe('11');

    });

    test('debe de decrementar con el boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const textoH2 = wrapper.find('h2').text().trim();
        expect(textoH2).toBe('9');

    });
    
    test('debe de colocar el valor por defecto con el botton btn reset', () => {
        
        const wrapper = shallow(
            <CounterApp
                value={105}
            />
        );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);
        expect(counterText).toBe('105');


    })
    
})
