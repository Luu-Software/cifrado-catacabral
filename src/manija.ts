import { preguntar } from './lib/consola.ts';

function obtenerPrefijo(numero: number, tamañoPrefijo: number): number {
  let longitudNumero=16;
  let potencia= longitudNumero-tamañoPrefijo;
  let divisor= Math.pow(10,potencia);
  return Math.floor(numero/divisor)
}

let tarjetaTexto: string = preguntar('Ingresá el número de tarjeta: ');
let tarjeta:number=Number(tarjetaTexto);

let prefijo1=obtenerPrefijo(tarjeta,1);
let prefijo2=obtenerPrefijo(tarjeta,2);

let red: string = ''; // COMPLETAR
if (prefijo2===34 || prefijo2===37){
  red='AMEX';
}
 else if(prefijo1===4){
  red='VISA';
 }
 else if(prefijo2===51 || prefijo2===52 || prefijo2===53 || prefijo2===54){
  red='MASTERCARD';}
  else {
    red='DESCONOCIDA';
  }
console.log(red);
