// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
// console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        console.log('========== Por Hacer =========='.green);

        for (let tarea of listado) {
            console.log('Descripcion:', tarea.descripcion);
            console.log('Completado:', tarea.completado);
            console.log('------------------------------'.green);
        }

        console.log('============  Fin  ============'.green);
        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Actualizado:', actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('Borrado:', borrado);
        break;
    default:
        console.log("Comando no reconocido");
}