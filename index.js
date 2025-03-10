let globalScope = "Глобальная переменная";
function tryGlobal(){
    console.log(globalScope);
}
tryGlobal();
console.log(globalScope);

function tryLocal(){
    let localScope = "Локальная переменная";
    console.log(localScope);
}
tryLocal();
console.log(localScope);

function tryBlock(){
    if (true){
        let blockScope = "Блочная переменная";
        console.log(blockScope);
    }
}
tryBlock();
console.log(blockScope);