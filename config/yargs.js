const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true
};

const argv = require ('yargs')
    .command('crear','Crea una nueva tarea especificando la descripción',{
        descripcion
    })
    .command('actualizar','Actualiza una tarea partiendo del nombre', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion,
    })
    .help()
    .argv;

module.exports = {
    argv
}