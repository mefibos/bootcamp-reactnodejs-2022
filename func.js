
function saludar(saludo) {
    return "hola " + saludo;
    
}

const mensaje=(prefijo,formateador) =>  (sufijo) => formateador(prefijo ,sufijo );
    


const formatoAbrazo = (prefijo,sufijo) => ` ${prefijo} ... abrazo ... ${sufijo}`;


const welcome = mensaje("welcome",formatoAbrazo);
const saybye = mensaje("bye",(prefijo,sufijo)=>`   ${prefijo} ...beso... ${sufijo}`);

console.log(saludar("adios"));
console.log(welcome("to the jungle"));
console.log(saybye("babies"));
