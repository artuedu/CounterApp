// const getImagenPromesa = () => new Promise(resolve => resolve('https://kjsdfnkjdf.com'));
// getImagenPromesa().then(console.log);

export const getImagen = async() => {
    try{
        const resp = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const {bpi:{EUR:{rate}}} = await resp.json();
        const url = `${rate} euros`
        return url;
    }catch(err){
        //Manejo del error
        // console.log(err);
        return 'No existe';
    }
}



