/* =========== Iniciando com localStorage */
// Fazer por partes e testar.

// ----- Inserir
localStorage.setItem("priNome","Mari");
// Testar

// ------ Recuperar valor existente
let nome = localStorage.getItem("priNome");
console.log(nome);
//Testar

// ------ Recuperar valor Inexistente
let ultNome = localStorage.getItem("sobreNome");
console.log(ultNome);

// Perceber que o código não gera erro.
// Mas, então, oque está armazenado na variável?

if(!ultNome) {
    alert("Sobre nome não encontrado");
}

//Para executar a alteração do "valor", faça um
// novo localStorage.setItem().

// ---- Removendo item existente 
localStorage.removeItem("priNome");

// ---- Verificar tipo de dado armazenado 
localStorage.setItem("a","1"); // Duas Strings
localStorage.setItem("b",2); //Uma string e um número 
console.log(typeof localStorage.getItem("a"));
console.log(typeof localStorage.getItem("b"));

// ------ Fechar sessão e reabrir, verificando os dados armazenados
// ------ Reescrever outro codigo utilizando os métodos:
// ssesionStorage.xxxxx

// Limpando Tudo 
