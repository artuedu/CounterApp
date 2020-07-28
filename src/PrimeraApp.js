// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


//Functional Component
const PrimeraApp = ({saludo, subtitulo}) => {

    return (
        // <Fragment   >
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicacion</p>
        // </Fragment  >
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{subtitulo}</p>
        </>
    );

}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;