const fs = require('fs');
let listas = [];
const save = () => {
    let data = JSON.stringify(listas);
    fs.writeFile('./db/data.json', data, (e) => { if (e) throw new Error('No se puede acceder al archivo de datos', e); });
};
const cargar = () => {
    try {
        listas = require('../db/data.json');
    } catch (e) {
        listas = [];
    }
}
const crear = (d) => {
    let lista = {
        d,
        c: false
    };
    cargar();
    listas.push(lista);
    save();
    return lista;
};
const getListado = () => {
    cargar();
    return listas;
};
const update = (d,c = true) => {
    cargar();
    let index = listas.findIndex( tarea => tarea.d === d);
    if( index >= 0 )
    {
        listas[index].c = c;
        save();
        return true;
    }
    else
    {
        return false;
    }
}
const borrar = (d) => {
    cargar();
    let index = listas.findIndex( tarea => tarea.d === d);
    if( index >= 0 )
    {
        listas.splice(index,1);
        save();
        return true;
    }
    else
    {
        return false;
    }
};
module.exports = {
    crear,
    getListado,
    update,
    borrar
};