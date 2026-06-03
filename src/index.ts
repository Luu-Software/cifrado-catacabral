import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = await preguntar('Ingresa la palabra:'); // Preguntar por la palabra a cifrar o descifrar
let claveTexto: string = await preguntar('Ingresa tu clave:'); // Preguntar por la clave de cifrado (número)
let accion: string = await preguntar('Quiere descifrar o cifrar?'); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)

let clave:number=Number(claveTexto);

let resultado: string = ''; // COMPLETAR
if (accion==='cifrar'){
    resultado=cifrar(palabra, clave)
}
else if(accion==='descifrar'){
    resultado=descifrar(palabra, clave)
}
console.log(resultado);