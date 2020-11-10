const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Estatus de la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear nueva tarea por hacer', {
        descripcion
    }).command('borrar', 'Borra una tarea', {
        descripcion
    }).command('listar', 'Ver todas las tareas por hacer',{
        completado
    })
    .command('actualizar', 'Cambiar una tarea', {
        descricion,
        completado
    })
    .help()
    .argv;
    module.exports = {
        argv
    };