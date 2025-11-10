// variables
console.log(" == TIPOS DE VARIABLES : == ");
var variableVar ="Soy una variable declarada con var";
let variableLet ="Soy una variable declarada con let";
const variableConst ="Soy una variable declarada con const";

console.log(variableVar);
console.log(variableLet);
console.log(variableConst);


console.log("\n-------------------------------");

// funcion
 function tipoVariables() {
    console.log(" == FUNCIÓN VARIABLES : == ");
    var variableVarFuncion ="Soy una variable de funcion declarada con var";
    let variableLetFuncion ="Soy una variable de funcion declarada con let";
    const variableConstFuncion ="Soy una variable de funcion declarada con const";

    console.log(variableVarFuncion);
    console.log(variableLetFuncion);
    console.log(variableConstFuncion);
 }

    tipoVariables();


console.log("\n-------------------------------");

 // bloque   
 console.log(" == BLOQUE : == ") // TIPOS DE BLOQUE IF, FOR, WHILE, SWITCH
 if (true) {
    var blockVar = "Soy var dentro de un bloque";
    let blockLet = "Soy let dentro de un bloque";
    const blockConst = "Soy const dentro de un bloque";
}


console.log(blockVar);   // ✅ var IGNORA el bloque (scope global o función)
try { console.log(blockLet); }   catch { console.log("blockLet no está accesible fuera del bloque"); }
try { console.log(blockConst); } catch { console.log("blockConst no está accesible fuera del bloque"); }

console.log("\n-------------------------------");


// Hoisting con var, let y const
console.log("== HOSTING : ==");

console.log(aVar); // ✅ undefined (hoisting con inicialización implícita)
try { console.log(aLet); } catch { console.log("ReferenceError: TDZ para aLet"); } // TDZ = Temporal Dead Zone
try { console.log(aConst); } catch { console.log("ReferenceError: TDZ para aConst"); }  // TDZ = Temporal Dead Zone

var aVar = "Soy var hoisted";
let aLet = "Soy let después de TDZ";
const aConst = "Soy const después de TDZ";

console.log("Después de declarar:");
console.log(aVar);   // ✅ "Soy var hoisted"
console.log(aLet);   // ✅ "Soy let después de TDZ"
console.log(aConst); // ✅ "Soy const después de TDZ"

console.log("\n-------------------------------");

// Redeclaración y Reasignación
console.log(" == REDECLARACIÓN Y REASIGNACIÓN : ==");

var x = 10;
var x = 20; // ✅ permitido (mala práctica) var si se puede redeclarar
console.log("var x =", x);

let y = 30;
// let y = 40; //no se puede redeclarar
y = 40; // ✅ pero sí reasignar
console.log("let y =", y);

const z = 50;
// z = 60; // no se puede reasignar ni redeclarar se utiliza de forma global o constante.
console.log("const z =", z);