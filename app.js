// node app crear -d "Sacar al perro"
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear TODO');
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea)
        break;
    case 'listar':
        console.log('Mostrar todas las tareas');
        let listado = porHacer.listar();
        
        for (let tarea of listado) {
            console.log('====================='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('====================='.green);
        }

        break;
    case 'actualizar':
        console.log('Actualiza una tarea');
        let result = porHacer.actualizar(argv.descripcion, argv.completado);
        if (result) {
            console.log('Actualizado correctamente');
        } else {
            console.log('Error de actualizacion');
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');

}