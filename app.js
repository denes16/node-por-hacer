const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];
switch (comando) {
    case "crear":
        console.log('Crear tarea');
        const tarea =  porHacer.crear(argv.d);
        console.log(tarea);
        break;
    case "listar":
        const listas = porHacer.getListado();
        for (const item of listas) {
            console.log('=======Tarea======='.green);
            console.log(item.d);
            console.log("Estado:",item.c);
            console.log('==============='.green);
        }
        break;
    case "actualizar":
        let r = porHacer.update(argv.d,argv.c);
        console.log(r);
        break;
    case "borrar":
        let s = porHacer.borrar(argv.d);
        console.log(s);
        break;
    default:
        console.log(`El comando ${ comando } no se reconoce`);
        break;

}